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

namespace RRQMSocket.Properties {
    using System;
    
    
    /// <summary>
    ///   一个强类型的资源类，用于查找本地化的字符串等。
    /// </summary>
    // 此类是由 StronglyTypedResourceBuilder
    // 类通过类似于 ResGen 或 Visual Studio 的工具自动生成的。
    // 若要添加或移除成员，请编辑 .ResX 文件，然后重新运行 ResGen
    // (以 /str 作为命令选项)，或重新生成 VS 项目。
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Resources {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Resources() {
        }
        
        /// <summary>
        ///   返回此类使用的缓存的 ResourceManager 实例。
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("RRQMSocket.Properties.Resources", typeof(Resources).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   重写当前线程的 CurrentUICulture 属性，对
        ///   使用此强类型资源类的所有资源查找执行重写。
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   查找类似 使用须知
        ///
        ///RRQMSocket系程序集由作者若汝棋茗开发，所有版权归作者若汝棋茗所有，程序集源代码在遵循Apache License 2.0的开源协议以及附加协议下，可供其他开发者二次开发或（商业）使用。
        ///
        ///附加协议如下:
        ///
        ///个人使用须知:
        ///不得将程序集用作违法犯罪活动。
        ///不得将程序集单独包装售卖。
        ///不得擦除程序集所有有关作者的信息。
        ///以上内容必须全部符合，个人使用授权才成立。
        ///
        ///二次开发须知:
        ///二次开发完成后的作品必须附带源作品所有作者信息，包括但不限于作者名、Gitee、Github地址等。
        ///完成后的作品（仅RRQM部分）必须将发布时最新源代码提交一份给本作者，QQ邮箱：505554090@qq.com。
        ///以上内容必须全部符合，二次开发授权才成立。
        ///
        ///盈利性（商业）用途使用须知:
        ///不得将程序集用作违法犯罪活动。
        ///不得将程序集单独包装售卖。
        ///不得擦除程序集所有有关作者的信息，并必须于用户可见界面（如关于）中提名。
        ///开发完成后，必须将完成后作品（非源代码）发送至QQ邮箱：505554090@qq.com，并附带作品名称及公司名称（或个人姓名）。
        ///
        ///以上内容必须全 [字符串的其余部分被截断]&quot;; 的本地化字符串。
        /// </summary>
        internal static string 附加协议 {
            get {
                return ResourceManager.GetString("附加协议", resourceCulture);
            }
        }
    }
}