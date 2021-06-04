//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
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
using RRQMCore.Exceptions;
using RRQMCore.IO;
using RRQMCore.Log;
using RRQMCore.Serialization;
using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;

namespace RRQMSocket.FileTransfer
{
    /// <summary>
    /// 已接收的客户端
    /// </summary>
    public sealed class FileSocketClient : SocketClient, IFileService, IFileClient
    {
        #region 属性

        private long maxDownloadSpeed = 1024 * 1024;

        private long maxUploadSpeed = 1024 * 1024;

        /// <summary>
        /// 获取当前传输状态
        /// </summary>
        public TransferStatus TransferStatus { get; private set; }

        /// <summary>
        /// 获取当前传输文件包
        /// </summary>
        public ProgressBlockCollection FileBlocks { get { return fileBlocks == null ? null : fileBlocks; } }

        /// <summary>
        /// 获取当前传输文件信息
        /// </summary>
        public FileInfo TransferFileInfo { get { return fileBlocks == null ? null : fileBlocks.FileInfo; } }

        /// <summary>
        /// 获取当前传输进度
        /// </summary>
        public float TransferProgress
        {
            get
            {
                if (fileBlocks == null)
                {
                    return 0;
                }
                if (fileBlocks.FileInfo != null)
                {
                    this.progress = fileBlocks.FileInfo.FileLength > 0 ? (float)position / fileBlocks.FileInfo.FileLength : 0;//计算下载完成进度
                }
                else
                {
                    this.progress = 0;
                }
                return progress <= 1 ? progress : 1;
            }
        }

        /// <summary>
        /// 获取当前传输速度
        /// </summary>
        public long TransferSpeed
        {
            get
            {
                this.speed = tempLength;
                tempLength = 0;
                return speed;
            }
        }

        /// <summary>
        /// 每秒最大下载速度（Byte）,不可小于1024
        /// </summary>
        public long MaxDownloadSpeed
        {
            get { return maxDownloadSpeed; }
            set
            {
                if (value < 1024)
                {
                    value = 1024;
                }
                maxDownloadSpeed = value;
                MaxSpeedChanged(maxDownloadSpeed);
            }
        }

        /// <summary>
        /// 每秒最大上传速度（Byte）,不可小于1024
        /// </summary>
        public long MaxUploadSpeed
        {
            get { return maxUploadSpeed; }
            set
            {
                if (value < 1024)
                {
                    value = 1024;
                }
                maxUploadSpeed = value;
                MaxSpeedChanged(maxUploadSpeed);
            }
        }

        #endregion 属性

        #region 字段

        internal RRQMAgreementHelper AgreementHelper;
        internal bool breakpointResume;
        private bool bufferLengthChanged;
        private long dataTransferLength;
        private long speed;
        private long tempLength;
        private float progress;
        private long position;
        private Stopwatch stopwatch = new Stopwatch();
        private long timeTick;
        private ProgressBlockCollection fileBlocks;
        private RRQMStream uploadFileStream;
        #endregion 字段

        #region 事件

        /// <summary>
        /// 传输文件之前
        /// </summary>
        internal RRQMFileOperationEventHandler BeforeFileTransfer;

        /// <summary>
        /// 当文件传输完成时
        /// </summary>
        internal RRQMTransferFileMessageEventHandler FinishedFileTransfer;

        /// <summary>
        /// 当接收到系统信息的时候
        /// </summary>
        internal RRQMMessageEventHandler ReceiveSystemMes;

        /// <summary>
        /// 收到字节数组并返回
        /// </summary>
        internal RRQMBytesEventHandler ReceivedBytesThenReturn;

        /// <summary>
        /// 请求删除文件
        /// </summary>
        internal RRQMFileOperationEventHandler RequestDeleteFile;

        /// <summary>
        /// 请求文件信息
        /// </summary>
        internal RRQMFileOperationEventHandler RequestFileInfo;

        #endregion 事件

        private void MaxSpeedChanged(long speed)
        {
            if (speed < 1024 * 1024)
            {
                this.BufferLength = 1024 * 10;
            }
            else if (speed < 1024 * 1024 * 10)
            {
                this.BufferLength = 1024 * 64;
            }
            else if (speed < 1024 * 1024 * 50)
            {
                this.BufferLength = 1024 * 512;
            }
            else if (speed < 1024 * 1024 * 100)
            {
                this.BufferLength = 1024 * 1024;
            }
            else if (speed < 1024 * 1024 * 200)
            {
                this.BufferLength = 1024 * 1024 * 5;
            }
            else
            {
                this.BufferLength = 1024 * 1024 * 10;
            }
        }

        /// <summary>
        /// 继承
        /// </summary>
        protected override void WaitReceive()
        {
            if (this.GetNowTick() - timeTick > 0)
            {
                //时间过了一秒
                this.timeTick = GetNowTick();
                this.dataTransferLength = 0;
                this.dataTransferLength = 0;
                stopwatch.Restart();
            }
            else
            {
                //在这一秒中
                switch (this.TransferStatus)
                {
                    case TransferStatus.Upload:
                        if (this.dataTransferLength > this.maxUploadSpeed)
                        {
                            //上传饱和
                            stopwatch.Stop();
                            int sleepTime = 1000 - (int)stopwatch.ElapsedMilliseconds <= 0 ? 0 : 1000 - (int)stopwatch.ElapsedMilliseconds;
                            Thread.Sleep(sleepTime);
                        }
                        break;

                    case TransferStatus.Download:
                        if (this.dataTransferLength > this.maxDownloadSpeed)
                        {
                            //下载饱和
                            stopwatch.Stop();
                            int sleepTime = 1000 - (int)stopwatch.ElapsedMilliseconds <= 0 ? 0 : 1000 - (int)stopwatch.ElapsedMilliseconds;
                            Thread.Sleep(sleepTime);
                        }
                        break;
                }
            }
        }

        #region 协议函数

        private void RequestDownload(ByteBlock byteBlock, UrlFileInfo urlFileInfo)
        {
            FileOperationEventArgs args = new FileOperationEventArgs();
            args.FileInfo = urlFileInfo;
            args.IsPermitOperation = true;
            args.TargetPath = args.FileInfo.FilePath;
            args.TransferType = TransferType.Download;
            this.BeforeFileTransfer?.Invoke(this, args);

            string filePath = args.TargetPath;
            FileWaitResult waitResult = new FileWaitResult();
            if (!args.IsPermitOperation)
            {
                waitResult.Message = string.IsNullOrEmpty(args.Message) ? "服务器拒绝下载" : args.Message;
                waitResult.Status = 2;
                this.TransferStatus = TransferStatus.None;
            }
            else if (!File.Exists(urlFileInfo.FilePath))
            {
                waitResult.Message = string.Format("文件不存在", filePath);
                waitResult.Status = 2;
                this.TransferStatus = TransferStatus.None;
            }
            else
            {
                this.TransferStatus = TransferStatus.Download;
                waitResult.Message = null;
                waitResult.Status = 1;
                FileInfo fileInfo;

                if (!TransferFileHashDictionary.GetFileInfo(filePath, out fileInfo, breakpointResume))
                {
                    fileInfo = new FileInfo();
                    using (FileStream stream = File.OpenRead(filePath))
                    {
                        fileInfo.FilePath = filePath;
                        fileInfo.FileLength = stream.Length;
                        fileInfo.FileName = Path.GetFileName(filePath);
                        if (this.breakpointResume)
                        {
                            fileInfo.FileHash = FileControler.GetStreamHash(stream);
                        }
                        TransferFileHashDictionary.AddFile(fileInfo);
                    }
                }
                urlFileInfo.Copy(fileInfo);
                fileBlocks = FileBaseTool.GetProgressBlockCollection(urlFileInfo, this.breakpointResume);
                waitResult.PBCollectionTemp = PBCollectionTemp.GetFromProgressBlockCollection(fileBlocks);
            }

            byteBlock.Write(SerializeConvert.RRQMBinarySerialize(waitResult, true));
        }

        private void RequestUpload(ByteBlock byteBlock, PBCollectionTemp requestBlocks, bool restart)
        {
            FileWaitResult waitResult = new FileWaitResult();
            FileOperationEventArgs args = new FileOperationEventArgs();
            args.FileInfo = requestBlocks.FileInfo;
            args.TargetPath = requestBlocks.FileInfo.FileName;
            args.IsPermitOperation = true;
            this.BeforeFileTransfer?.Invoke(this, args);//触发 接收文件事件
            requestBlocks.FileInfo.FilePath = args.TargetPath;

            if (!args.IsPermitOperation)
            {
                waitResult.Status = 2;
                waitResult.Message =string.IsNullOrEmpty(args.Message)? "服务器拒绝上传":args.Message;
            }
            else if (FileControler.FileIsOpen(requestBlocks.FileInfo.FilePath))
            {
                waitResult.Status = 2;
                waitResult.Message = "该文件已被打开，或许正在由其他客户端上传";
            }
            else
            {
                this.TransferStatus = TransferStatus.Upload;

                restart = this.breakpointResume ? restart : true;
                if (!restart)
                {
                    FileInfo fileInfo;
                    if (TransferFileHashDictionary.GetFileInfoFromHash(requestBlocks.FileInfo.FileHash, out fileInfo))
                    {
                        try
                        {
                            if (fileInfo.FilePath != requestBlocks.FileInfo.FilePath)
                            {
                                File.Copy(fileInfo.FilePath, requestBlocks.FileInfo.FilePath);
                            }
                            this.fileBlocks = FileBaseTool.GetProgressBlockCollection(fileInfo, this.breakpointResume);
                            foreach (var item in this.fileBlocks)
                            {
                                item.Finished = true;
                            }
                            waitResult.Status = 3;
                            waitResult.Message = null;

                            byteBlock.Write(SerializeConvert.RRQMBinarySerialize(waitResult, true));
                            return;
                        }
                        catch
                        {
                        }
                    }
                }
                try
                {
                    ProgressBlockCollection blocks = requestBlocks.ToPBCollection();
                    uploadFileStream = RRQMStream.GetRQMStream(ref blocks, restart,this.breakpointResume);
                    blocks.FileInfo.FilePath = requestBlocks.FileInfo.FilePath;
                    this.fileBlocks = blocks;
                    waitResult.Status = 1;
                    waitResult.Message = null;
                    waitResult.PBCollectionTemp = PBCollectionTemp.GetFromProgressBlockCollection(blocks);
                }
                catch (Exception ex)
                {
                    waitResult.Status = 2;
                    waitResult.Message = ex.Message;
                    waitResult.PBCollectionTemp = null;
                }
            }

            byteBlock.Write(SerializeConvert.RRQMBinarySerialize(waitResult, true));
        }

        private void DownloadBlockData(ByteBlock byteBlock, byte[] buffer)
        {
            if (this.TransferStatus != TransferStatus.Download)
            {
                byteBlock.Write(0);
                return;
            }
            try
            {
                long position = BitConverter.ToInt64(buffer, 4);
                long requestLength = BitConverter.ToInt64(buffer, 12);
                if (FileBaseTool.ReadFileBytes(fileBlocks.FileInfo.FilePath, position, byteBlock, 1, (int)requestLength))
                {
                    Speed.downloadSpeed += requestLength;
                    this.position = position + requestLength;
                    this.tempLength += requestLength;
                    this.dataTransferLength += requestLength;
                    if (this.bufferLengthChanged)
                    {
                        byteBlock.Buffer[0] = 3;
                    }
                    else
                    {
                        byteBlock.Buffer[0] = 1;
                    }
                }
                else
                {
                    byteBlock.Buffer[0] = 2;
                }
            }
            catch
            {
            }
        }

        private void DownloadFinished(ByteBlock byteBlock)
        {
            TransferFileStreamDic.DisposeFileStream(this.fileBlocks.FileInfo.FilePath);
            byteBlock.Write(1);
            FilePathEventArgs args = new FilePathEventArgs();
            args.FileInfo = this.fileBlocks.FileInfo;
            this.TransferStatus = TransferStatus.None;
            args.TransferType = TransferType.Download;
            args.TargetPath = args.FileInfo.FilePath;
            this.FinishedFileTransfer?.Invoke(this, args);
            this.fileBlocks = null;
        }

        private void UploadBlockData(ByteBlock byteBlock, ByteBlock receivedbyteBlock)
        {
            if (this.TransferStatus != TransferStatus.Upload)
            {
                byteBlock.Write(4);
                return;
            }
            byte status = receivedbyteBlock.Buffer[4];
            int index = BitConverter.ToInt32(receivedbyteBlock.Buffer, 5);
            long position = BitConverter.ToInt64(receivedbyteBlock.Buffer, 9);
            long submitLength = BitConverter.ToInt64(receivedbyteBlock.Buffer, 17);

            string mes;
            if (FileBaseTool.WriteFile(this.uploadFileStream, out mes, position, receivedbyteBlock.Buffer, 25, (int)submitLength))
            {
                this.position = position + submitLength;
                this.tempLength += submitLength;
                this.dataTransferLength += submitLength;
                Speed.uploadSpeed += submitLength;

                if (this.bufferLengthChanged)
                {
                    byteBlock.Write(3);
                }
                else
                {
                    byteBlock.Write(1);
                }

                if (status == 1)
                {
                    FileProgressBlock fileProgress = this.fileBlocks.FirstOrDefault(a => a.Index == index);
                    fileProgress.Finished = true;
                    FileBaseTool.SaveProgressBlockCollection(this.uploadFileStream, this.fileBlocks);
                }
            }
            else
            {
                byteBlock.Write(2);
                Logger.Debug(LogType.Error, this, "上传文件写入错误：" + mes);
            }
        }

        private void UploadFinished(ByteBlock byteBlock)
        {
            TransferFileHashDictionary.AddFile(this.TransferFileInfo);
            if (this.uploadFileStream != null)
            {
                FileBaseTool.FileFinished(this.uploadFileStream);
                this.uploadFileStream = null;
            }
            if (this.fileBlocks != null)
            {
                TransferFileHashDictionary.AddFile(this.fileBlocks.FileInfo);
                FilePathEventArgs args = new FilePathEventArgs();
                args.FileInfo = this.fileBlocks.FileInfo;
                args.TargetPath = args.FileInfo.FilePath;
                args.TransferType = TransferType.Upload;
                this.FinishedFileTransfer?.Invoke(this, args);

                this.fileBlocks = null;
            }

            byteBlock.Write(1);
        }

        private void StopUpload(ByteBlock byteBlock)
        {
            FileBaseTool.SaveProgressBlockCollection(this.uploadFileStream, this.fileBlocks);
            this.uploadFileStream.Dispose();
            this.uploadFileStream = null;
            byteBlock.Write(1);
        }

        private void ReturnBytes(ByteBlock byteBlock, ByteBlock receivedByteBlock, int length)
        {
            BytesEventArgs args = new BytesEventArgs();
            byte[] buffer = new byte[length];
            byteBlock.Position = 4;
            receivedByteBlock.Read(buffer, 0, buffer.Length);
            args.ReceivedDataBytes = buffer;
            ReceivedBytesThenReturn?.Invoke(this, args);
            byteBlock.Write(1);
            if (args.ReturnDataBytes != null)
            {
                byteBlock.Write(args.ReturnDataBytes);
            }
        }

        private void RDeleteFile(ByteBlock byteBlock, UrlFileInfo urlFileInfo)
        {
            FileOperationEventArgs args = new FileOperationEventArgs();
            args.FileInfo = new FileInfo();
            args.FileInfo.Copy(urlFileInfo);
            args.TargetPath = urlFileInfo.FilePath;
            this.RequestDeleteFile?.Invoke(this, args);

            string filePath = args.TargetPath;

            if (!args.IsPermitOperation)
            {
                byteBlock.Write(3);
            }
            else if (!File.Exists(filePath))
            {
                byteBlock.Write(2);
            }
            else
            {
                try
                {
                    File.Delete(filePath);
                    byteBlock.Write(1);
                }
                catch (Exception ex)
                {
                    byteBlock.Write(4);
                    byteBlock.Write(Encoding.UTF8.GetBytes(ex.Message));
                }
            }
        }

        private void RFileInfo(ByteBlock byteBlock, UrlFileInfo urlFileInfo)
        {
            FileOperationEventArgs args = new FileOperationEventArgs();
            args.FileInfo = new FileInfo();
            args.FileInfo.Copy(urlFileInfo);
            args.TargetPath = args.FileInfo.FilePath;
            this.RequestFileInfo?.Invoke(this, args);
            string filePath = args.TargetPath;

            if (!args.IsPermitOperation)
            {
                byteBlock.Write(3);
            }
            else if (!File.Exists(filePath))
            {
                byteBlock.Write(2);
            }
            else
            {
                try
                {
                    FileInfo fileInfo = new FileInfo();
                    using (Stream stream = File.Open(filePath, FileMode.Open))
                    {
                        fileInfo.FileLength = stream.Length;
                        fileInfo.FileName = Path.GetFileName(filePath);
                        fileInfo.FilePath = filePath;
                    }
                    byteBlock.Write(1);
                    byteBlock.Write(SerializeConvert.RRQMBinarySerialize(fileInfo, true));
                }
                catch (Exception ex)
                {
                    byteBlock.Write(4);
                    byteBlock.Write(Encoding.UTF8.GetBytes(ex.Message));
                }
            }
        }

        private void SystemMessage(string mes)
        {
            ReceiveSystemMes?.Invoke(this, new MesEventArgs(mes));
        }

        #endregion 协议函数

        /// <summary>
        /// 当BufferLength改变值的时候
        /// </summary>
        protected override void OnBufferLengthChanged()
        {
            bufferLengthChanged = true;
        }

        /// <summary>
        /// 获取当前时间帧
        /// </summary>
        /// <returns></returns>
        private long GetNowTick()
        {
            return DateTime.Now.Ticks / 10000000;
        }

        /// <summary>
        /// 发送字节流
        /// </summary>
        /// <param name="buffer"></param>
        /// <param name="offset"></param>
        /// <param name="length"></param>
        /// <exception cref="RRQMNotConnectedException"></exception>
        /// <exception cref="RRQMOverlengthException"></exception>
        /// <exception cref="RRQMException"></exception>
        public override void Send(byte[] buffer, int offset, int length)
        {
            throw new RRQMException("不允许发送自由数据");
        }

        /// <summary>
        /// 发送消息
        /// </summary>
        /// <param name="mes"></param>
        /// <exception cref="RRQMException"></exception>
        public void SendSystemMes(string mes)
        {
            if (string.IsNullOrEmpty(mes))
            {
                throw new RRQMException("消息不可为空");
            }
            byte[] datas = Encoding.UTF8.GetBytes(mes);
            try
            {
                AgreementHelper.SocketSend(1000, datas);
            }
            catch (Exception ex)
            {
                throw new RRQMException(ex.Message);
            }
        }

        /// <summary>
        /// 处理已接收到的数据
        /// </summary>
        /// <param name="byteBlock"></param>
        /// <param name="obj"></param>
        protected override void HandleReceivedData(ByteBlock byteBlock, object obj)
        {
            byte[] buffer = byteBlock.Buffer;
            int r = (int)byteBlock.Position;
            int agreement = BitConverter.ToInt32(buffer, 0);
            int returnAgreement;
            ByteBlock returnByteBlock = this.BytePool.GetByteBlock(this.BufferLength);
            switch (agreement)
            {
                case 1000:
                    {
                        try
                        {
                            string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 4, r - 4);
                            SystemMessage(mes);
                            returnByteBlock.Write(1);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }
                case 1001:
                    {
                        try
                        {
                            UrlFileInfo fileInfo = SerializeConvert.RRQMBinaryDeserialize<UrlFileInfo>(buffer, 4);
                            RequestDownload(returnByteBlock, fileInfo);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1002:
                    {
                        try
                        {
                            DownloadBlockData(returnByteBlock, buffer);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }
                case 1003://停止下载
                    {
                        try
                        {
                            this.fileBlocks = null;
                            this.TransferStatus = TransferStatus.None;
                            returnByteBlock.Write(1);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }
                case 1004:
                    {
                        try
                        {
                            DownloadFinished(returnByteBlock);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1010:
                    {
                        try
                        {
                            bool restart = BitConverter.ToBoolean(byteBlock.Buffer, 4);
                            PBCollectionTemp blocks = SerializeConvert.RRQMBinaryDeserialize<PBCollectionTemp>(byteBlock.Buffer, 5);
                            RequestUpload(returnByteBlock, blocks, restart);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1011:
                    {
                        try
                        {
                            UploadBlockData(returnByteBlock, byteBlock);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1012:
                    {
                        try
                        {
                            UploadFinished(returnByteBlock);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }
                case 1013:
                    {
                        try
                        {
                            StopUpload(returnByteBlock);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1014:
                    {
                        try
                        {
                            ReturnBytes(returnByteBlock, byteBlock, r - 4);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1020:
                    {
                        try
                        {
                            if (this.TransferStatus == TransferStatus.Download)
                            {
                                this.MaxSpeedChanged(this.maxDownloadSpeed);
                            }
                            else
                            {
                                this.MaxSpeedChanged(this.maxUploadSpeed);
                            }
                            TransferSetting transferSetting = new TransferSetting();
                            transferSetting.breakpointResume = this.breakpointResume;
                            transferSetting.bufferLength = this.BufferLength;
                            transferSetting.Serialize(returnByteBlock);
                            this.bufferLengthChanged = false;
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1021:
                    {
                        try
                        {
                            UrlFileInfo urlFileInfo = SerializeConvert.RRQMBinaryDeserialize<UrlFileInfo>(byteBlock.Buffer, 4);
                            this.RDeleteFile(returnByteBlock, urlFileInfo);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }

                case 1022:
                    {
                        try
                        {
                            UrlFileInfo fileInfo = SerializeConvert.RRQMBinaryDeserialize<UrlFileInfo>(byteBlock.Buffer, 4);
                            this.RFileInfo(returnByteBlock, fileInfo);
                        }
                        catch (Exception ex)
                        {
                            Logger.Debug(LogType.Error, this, ex.Message, ex);
                        }
                        returnAgreement = 999;
                        break;
                    }
                default:
                    {
                        returnAgreement = 0;
                        break;
                    }
            }

            try
            {
                this.AgreementHelper.SocketSend(returnAgreement,returnByteBlock);
            }
            catch (Exception ex)
            {
                Logger.Debug(LogType.Error, this, ex.Message, ex);
            }
            finally
            {
                returnByteBlock.Dispose();
            }
        }

        /// <summary>
        ///  重置
        /// </summary>
        public override void Recreate()
        {
            base.Recreate();
            this.maxDownloadSpeed = 1024 * 1024;
            this.maxUploadSpeed = 1024 * 1024;
        }

        /// <summary>
        /// 释放资源
        /// </summary>
        public override void Dispose()
        {
            base.Dispose();
            if (uploadFileStream != null)
            {
                uploadFileStream.Dispose();
            }
        }
    }
}