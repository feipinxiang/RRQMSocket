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
using RRQMCore.Exceptions;

namespace RRQMSocket.RPC.WebApi
{
    /// <summary>
    /// WebApiSocket辅助类
    /// </summary>
    public class WebApiSocketClient : SimpleSocketClient, ICaller
    {
        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        public override bool CanSetDataHandlingAdapter => false;

        /// <summary>
        /// 禁用适配器赋值
        /// </summary>
        /// <param name="adapter"></param>
        public override sealed void SetDataHandlingAdapter(DataHandlingAdapter adapter)
        {
            throw new RRQMException($"{nameof(WebApiSocketClient)}不允许设置适配器。");
        }

        internal void SetAdapter(DataHandlingAdapter adapter)
        {
            base.SetDataHandlingAdapter(adapter);
        }
    }
}