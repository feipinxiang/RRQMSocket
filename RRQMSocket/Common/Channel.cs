//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在RRQMCore.XREF命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.ByteManager;
using RRQMCore.Collections.Concurrent;
using RRQMCore.Exceptions;
using System;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

namespace RRQMSocket
{
    /// <summary>
    /// 通道
    /// </summary>
    public class Channel : IDisposable
    {
        internal byte[] current;
        internal int id = 0;
        internal ConcurrentDictionary<int, Channel> parent;

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private readonly BytePool bytePool;

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private readonly IntelligentDataQueue<ChannelData> dataQueue;

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private readonly ProtocolClient client1;
        
        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private readonly ProtocolSocketClient client2;

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private readonly AutoResetEvent waitHandle;

        private int bufferLength;
        private ChannelStatus status;

        internal Channel(ProtocolClient client)
        {
            this.status = ChannelStatus.Success;
            this.client1 = client;
            this.dataQueue = new IntelligentDataQueue<ChannelData>(1024 * 1024 * 20);
            this.waitHandle = new AutoResetEvent(false);
            this.bytePool = client.BytePool;
            this.bufferLength = client.BufferLength;
        }
        
        internal Channel(ProtocolSocketClient client)
        {
            this.status = ChannelStatus.Success;
            this.client2 = client;
            this.dataQueue = new IntelligentDataQueue<ChannelData>(1024 * 1024 * 20);
            this.waitHandle = new AutoResetEvent(false);
            this.bytePool = client.BytePool;
            this.bufferLength = client.BufferLength;
        }

        /// <summary>
        /// 获取当前的数据
        /// </summary>
        public byte[] Current
        {
            get { return current; }
        }

        /// <summary>
        /// ID
        /// </summary>
        public int ID
        {
            get { return id; }
        }

        /// <summary>
        /// 状态
        /// </summary>
        public ChannelStatus Status
        {
            get { return status; }
        }

        /// <summary>
        /// 取消
        /// </summary>
        public void Cancel()
        {
            ByteBlock byteBlock = this.bytePool.GetByteBlock(this.bufferLength);
            try
            {
                byteBlock.Write(this.id);
                if (this.client1 != null)
                {
                    this.client1.SocketSend(-5, byteBlock.Buffer, 0, byteBlock.Len);
                }
                else
                {
                    this.client2.SocketSend(-5, byteBlock.Buffer, 0, byteBlock.Len);
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                byteBlock.Dispose();
            }
        }

        /// <summary>
        /// 完成操作
        /// </summary>
        public void Complete()
        {
            this.RequestComplete();
            ByteBlock byteBlock = this.bytePool.GetByteBlock(this.bufferLength);
            try
            {
                byteBlock.Write(this.id);
                if (this.client1 != null)
                {
                    this.client1.SocketSend(-4, byteBlock.Buffer, 0, byteBlock.Len);
                }
                else
                {
                    this.client2.SocketSend(-4, byteBlock.Buffer, 0, byteBlock.Len);
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                byteBlock.Dispose();
            }
        }

        /// <summary>
        /// 释放
        /// </summary>
        public void Dispose()
        {
            ByteBlock byteBlock = this.bytePool.GetByteBlock(this.bufferLength);
            try
            {
                this.RequestDispose();
                byteBlock.Write(this.id);
                if (this.client1 != null)
                {
                    this.client1.SocketSend(-6, byteBlock.Buffer, 0, byteBlock.Len);
                }
                else
                {
                    this.client2.SocketSend(-6, byteBlock.Buffer, 0, byteBlock.Len);
                }
            }
            catch
            {
            }
            finally
            {
                byteBlock.Dispose();
            }
        }

        /// <summary>
        /// 转向下个元素
        /// </summary>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public bool MoveNext(int timeout = 60 * 1000)
        {
            if (this.status != ChannelStatus.Success)
            {
                return false;
            }
            if (this.dataQueue.TryDequeue(out ChannelData channelData))
            {
                switch (channelData.type)
                {
                    case -3:
                        {
                            this.current = channelData.data;
                            return true;
                        }
                    case -4:
                        {
                            this.RequestComplete();
                            break;
                        }
                    case -5:
                        {
                            this.RequestCancel();
                            break;
                        }
                    case -6:
                        {
                            this.RequestDispose();
                            break;
                        }
                    default:
                        break;
                }

                return false;
            }
            else
            {
                this.waitHandle.Reset();
                if (this.waitHandle.WaitOne(timeout))
                {
                    return this.MoveNext(timeout);
                }
                else
                {
                    this.status = ChannelStatus.Timeout;
                    return false;
                }
            }
        }

        /// <summary>
        /// 转向下个元素
        /// </summary>
        /// <returns></returns>
        public Task<bool> MoveNextAsync(int timeout = 60 * 1000)
        {
            return Task.Run(() =>
             {
                 return this.MoveNext(timeout);
             });
        }

        /// <summary>
        /// 写入通道
        /// </summary>
        /// <param name="data"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        public void Write(byte[] data, int offset, int length)
        {
            if ((byte)this.status>3)
            {
                throw new RRQMException("通道已不允许使用");
            }
            ByteBlock byteBlock = this.bytePool.GetByteBlock(length + 4);
            try
            {
                byteBlock.Write(this.id);
                byteBlock.WriteBytesPackage(data, offset, length);
                if (this.client1 != null)
                {
                    this.client1.SocketSend(-3, byteBlock.Buffer, 0, byteBlock.Len);
                }
                else
                {
                    this.client2.SocketSend(-3, byteBlock.Buffer, 0, byteBlock.Len);
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                byteBlock.Dispose();
            }
        }

        /// <summary>
        /// 写入通道
        /// </summary>
        /// <param name="data"></param>
        public void Write(byte[] data)
        {
            this.Write(data, 0, data.Length);
        }

        /// <summary>
        /// 写入通道
        /// </summary>
        /// <param name="data"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        public void WriteAsync(byte[] data, int offset, int length)
        {
            if ((byte)this.status > 3)
            {
                throw new RRQMException("通道已不允许使用");
            }
            ByteBlock byteBlock = this.bytePool.GetByteBlock(length + 4);
            try
            {
                byteBlock.Write(this.id);
                byteBlock.WriteBytesPackage(data, offset, length);
                if (this.client1 != null)
                {
                    this.client1.SocketSendAsync(-3, byteBlock.Buffer, 0, byteBlock.Len);
                }
                else
                {
                    this.client2.SocketSendAsync(-3, byteBlock.Buffer, 0, byteBlock.Len);
                }
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                byteBlock.Dispose();
            }
        }

        /// <summary>
        /// 写入通道
        /// </summary>
        /// <param name="data"></param>
        public void WriteAsync(byte[] data)
        {
            this.WriteAsync(data, 0, data.Length);
        }

        internal void ReceivedData(ChannelData data)
        {
            this.dataQueue.Enqueue(data);
            this.waitHandle.Set();
        }

        private void RequestCancel()
        {
            this.current = null;
            this.status = ChannelStatus.Cancel;
            this.waitHandle.Set();
        }

        private void RequestComplete()
        {
            this.current = null;
            this.status = ChannelStatus.Completed;
            this.waitHandle.Set();
        }

        private void RequestDispose()
        {
            this.current = null;
            this.waitHandle.Dispose();
            this.status = ChannelStatus.Disposed;
            this.waitHandle.Set();
            this.parent.TryRemove(this.id, out _);
            while (this.dataQueue.TryDequeue(out _))
            {
            }
        }
    }
}