//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：http://rrqm_home.gitee.io/touchsocket/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TouchSocket.Core;

namespace TouchSocket.Modbus
{
    internal sealed class ModbusRtuRequest : ModbusRtuBase, IRequestInfoBuilder, IRequestInfo
    {
        public ModbusRtuRequest(ModbusRequest request)
        {
            this.SlaveId = request.SlaveId;
            this.FunctionCode = request.FunctionCode;
            this.Quantity = request.Quantity;
            this.StartingAddress = request.StartingAddress;
            this.Data = request.Data;
            this.ReadStartAddress = request.ReadStartAddress;
            this.ReadQuantity = request.ReadQuantity;
        }

        /// <inheritdoc/>
        int IRequestInfoBuilder.MaxLength => 1024;

        /// <inheritdoc/>
        public void Build(ByteBlock byteBlock)
        {
            if ((byte)this.FunctionCode <= 4)
            {
                byteBlock.Write(this.SlaveId);
                byteBlock.Write((byte)this.FunctionCode);
                byteBlock.Write(this.StartingAddress, EndianType.Big);
                byteBlock.Write(this.Quantity, EndianType.Big);
            }
            else if (this.FunctionCode == FunctionCode.WriteSingleCoil || this.FunctionCode == FunctionCode.WriteSingleRegister)
            {
                byteBlock.Write(this.SlaveId);
                byteBlock.Write((byte)this.FunctionCode);
                byteBlock.Write(this.StartingAddress, EndianType.Big);
                byteBlock.Write(this.Data);
            }
            else if (this.FunctionCode == FunctionCode.WriteMultipleCoils || this.FunctionCode == FunctionCode.WriteMultipleRegisters)
            {
                byteBlock.Write(this.SlaveId);
                byteBlock.Write((byte)this.FunctionCode);
                byteBlock.Write(this.StartingAddress, EndianType.Big);
                byteBlock.Write(this.Quantity, EndianType.Big);
                byteBlock.Write((byte)this.Data.Length);
                byteBlock.Write(this.Data);
            }
            else if (this.FunctionCode == FunctionCode.ReadWriteMultipleRegisters)
            {
                byteBlock.Write(this.SlaveId);
                byteBlock.Write((byte)this.FunctionCode);
                byteBlock.Write(this.ReadStartAddress, EndianType.Big);
                byteBlock.Write(this.ReadQuantity, EndianType.Big);
                byteBlock.Write(this.StartingAddress, EndianType.Big);
                byteBlock.Write(this.Quantity, EndianType.Big);
                byteBlock.Write((byte)this.Data.Length);
                byteBlock.Write(this.Data);
            }
            else
            {
                throw new System.InvalidOperationException("无法识别的功能码");
            }

            this.Crc = TouchSocketModbusUtility.ToModbusCrc(byteBlock.Buffer, 0, byteBlock.Len);

            byteBlock.Write(this.Crc);
        }
    }
}