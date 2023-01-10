"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=l,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||r;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},665:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const r={id:"ipc",title:"33. IPC \u8fdb\u7a0b\u901a\u4fe1",sidebar_label:"33. IPC \u8fdb\u7a0b\u901a\u4fe1"},i=void 0,o={unversionedId:"ipc",id:"ipc",title:"33. IPC \u8fdb\u7a0b\u901a\u4fe1",description:"33.1 \u4ec0\u4e48\u662f IPC",source:"@site/docs/ipc.mdx",sourceDirName:".",slug:"/ipc",permalink:"/touchsocket/docs/ipc",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/ipc.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673350749,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{id:"ipc",title:"33. IPC \u8fdb\u7a0b\u901a\u4fe1",sidebar_label:"33. IPC \u8fdb\u7a0b\u901a\u4fe1"},sidebar:"docs",previous:{title:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",permalink:"/touchsocket/docs/sesssion-state"},next:{title:"34.1 \u5728 IIS \u90e8\u7f72",permalink:"/touchsocket/docs/deploy-iis"}},p={},c=[{value:"33.1 \u4ec0\u4e48\u662f <code>IPC</code>",id:"331-\u4ec0\u4e48\u662f-ipc",level:2},{value:"33.2 \u5b9e\u73b0 <code>IPC</code> \u901a\u4fe1\u65b9\u5f0f",id:"332-\u5b9e\u73b0-ipc-\u901a\u4fe1\u65b9\u5f0f",level:2},{value:"33.3 <code>IPC</code> \u901a\u4fe1\u6a21\u5f0f",id:"333-ipc-\u901a\u4fe1\u6a21\u5f0f",level:2},{value:"33.4 \u8fdb\u7a0b\u5185\u901a\u4fe1\uff08\u7ebf\u7a0b\u95f4\uff09",id:"334-\u8fdb\u7a0b\u5185\u901a\u4fe1\u7ebf\u7a0b\u95f4",level:2},{value:"33.4.1 \u4e86\u89e3 <code>Channel</code>",id:"3341-\u4e86\u89e3-channel",level:3},{value:"33.4.2 \u5e38\u89c4\u4f7f\u7528",id:"3342-\u5e38\u89c4\u4f7f\u7528",level:3},{value:"\u521b\u5efa <code>ChannelHandler&lt;TMessage&gt;</code> \u7ba1\u9053\u5904\u7406\u7a0b\u5e8f",id:"\u521b\u5efa-channelhandlertmessage-\u7ba1\u9053\u5904\u7406\u7a0b\u5e8f",level:4},{value:"\u4f7f\u7528 <code>ChannelContext&lt;TMessage, THandler&gt;</code> \u53d1\u9001\u6d88\u606f",id:"\u4f7f\u7528-channelcontexttmessage-thandler-\u53d1\u9001\u6d88\u606f",level:4},{value:"33.4.3 \u5b9e\u73b0\u591a\u8ba2\u9605",id:"3343-\u5b9e\u73b0\u591a\u8ba2\u9605",level:3},{value:"33.4.4 \u66f4\u591a <code>Channel</code> \u77e5\u8bc6",id:"3344-\u66f4\u591a-channel-\u77e5\u8bc6",level:3},{value:"33.4.5 <code>CallContext</code> \u65b9\u5f0f",id:"3345-callcontext-\u65b9\u5f0f",level:3},{value:"34.5 \u8fdb\u7a0b\u5916\u901a\u4fe1\uff08\u5171\u4eab\u5185\u5b58\uff09",id:"345-\u8fdb\u7a0b\u5916\u901a\u4fe1\u5171\u4eab\u5185\u5b58",level:2},{value:"33.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"336-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:c};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"331-\u4ec0\u4e48\u662f-ipc"},"33.1 \u4ec0\u4e48\u662f ",(0,l.kt)("inlineCode",{parentName:"h2"},"IPC")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f15\u7528\u767e\u5ea6\u767e\u79d1"),(0,l.kt)("p",{parentName:"blockquote"},"IPC\uff08Inter-Process Communication\uff0c\u8fdb\u7a0b\u95f4\u901a\u4fe1\uff09\u3002\u8fdb\u7a0b\u95f4\u901a\u4fe1\u662f\u6307\u4e24\u4e2a\u8fdb\u7a0b\u7684\u6570\u636e\u4e4b\u95f4\u4ea7\u751f\u4ea4\u4e92\u3002")),(0,l.kt)("p",null,"\u901a\u4fd7\u70b9\u8bf4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"IPC")," \u53ef\u4ee5\u5b9e\u73b0\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u95f4\u901a\u4fe1\uff08\u4ea4\u4e92\u6570\u636e\uff09\u3002"),(0,l.kt)("h2",{id:"332-\u5b9e\u73b0-ipc-\u901a\u4fe1\u65b9\u5f0f"},"33.2 \u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"h2"},"IPC")," \u901a\u4fe1\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u534a\u53cc\u5de5 Unix \u7ba1\u9053"),(0,l.kt)("li",{parentName:"ul"},"FIFOs(\u547d\u540d\u7ba1\u9053)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6d88\u606f\u961f\u5217"),"\uff08\u5e38\u7528\u6a21\u5f0f\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4fe1\u53f7\u91cf"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5171\u4eab\u5185\u5b58"),"\uff08\u5e38\u7528\u6a21\u5f0f\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"TouchSocket")," \u6846\u67b6\u9ed8\u8ba4\u5b9e\u73b0\u65b9\u5f0f\uff09"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u7f51\u7edc Socket"),"\uff08\u5e38\u7528\u6a21\u5f0f\uff09")),(0,l.kt)("h2",{id:"333-ipc-\u901a\u4fe1\u6a21\u5f0f"},"33.3 ",(0,l.kt)("inlineCode",{parentName:"h2"},"IPC")," \u901a\u4fe1\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IPC")," \u672c\u8eab\u6307\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fdb\u7a0b\u95f4")," \u901a\u4fe1\uff0c\u4f46 ",(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u5c06\u5185\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fdb\u7a0b\u95f4/\u5185")," \u4e24\u79cd\u8fdb\u7a0b\u901a\u4fe1\u6a21\u5f0f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u8fdb\u7a0b\u5185\u901a\u4fe1"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"TouchSocket")," \u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Channel")," \u7ba1\u9053\u63d0\u4f9b\u8fdb\u7a0b\u5185\u901a\u4fe1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u8fdb\u7a0b\u5916\u901a\u4fe1"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"TouchSocket")," \u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"MemoryMapperFile")," \u5171\u4eab\u5185\u5b58\u65b9\u5f0f\u5b9e\u73b0\u8fdb\u7a0b\u5916\u901a\u4fe1\uff08\u540e\u7eed\u7248\u672c\u5b8c\u5584\uff09")),(0,l.kt)("h2",{id:"334-\u8fdb\u7a0b\u5185\u901a\u4fe1\u7ebf\u7a0b\u95f4"},"33.4 \u8fdb\u7a0b\u5185\u901a\u4fe1\uff08\u7ebf\u7a0b\u95f4\uff09"),(0,l.kt)("p",null,"\u8fdb\u7a0b\u5185\u901a\u4fe1\u4fd7\u79f0\u7ebf\u7a0b\u95f4\u901a\u4fe1\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"C#")," \u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Channel\uff08\u7ba1\u9053\uff09")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"Lazy")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"Task.Factory")," \u5b9e\u73b0\u957f\u65f6\u95f4\u9ad8\u6027\u80fd\u7684\u7ebf\u7a0b\u95f4\u901a\u4fe1\u673a\u5236\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Channel")," \u7ba1\u9053\u4e5f\u662f\u76ee\u524d ",(0,l.kt)("inlineCode",{parentName:"p"},".NET/C#")," \u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u751f\u4ea7\u8005-\u8ba2\u9605\u8005")," \u6a21\u5f0f\u6700\u7b80\u6613\u4e14\u6700\u4e3a\u5f3a\u5927\u7684\u5b9e\u73b0\u3002"),(0,l.kt)("h3",{id:"3341-\u4e86\u89e3-channel"},"33.4.1 \u4e86\u89e3 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Channel")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Channel")," \u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".NET Core 2.1+")," \u7248\u672c\u4e4b\u540e\u52a0\u5165\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Channel")," \u5e95\u5c42\u5b9e\u73b0\u662f\u4e00\u4e2a\u9ad8\u6548\u7684\u3001\u7ebf\u7a0b\u5b89\u5168\u7684\u961f\u5217\uff0c\u53ef\u4ee5\u5728\u7ebf\u7a0b\u4e4b\u95f4\u4f20\u9012\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Channel")," \u7684\u4e3b\u8981\u5e94\u7528\u573a\u666f\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"\u53d1\u5e03/\u8ba2\u9605\u3001\u89c2\u5bdf\u8005\u6a21\u5f0f")," \u4e2d\u4f7f\u7528\uff0c\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"\u4e8b\u4ef6\u603b\u7ebf")," \u5c31\u662f\u6700\u597d\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Channel")," \u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u751f\u4ea7-\u6d88\u8d39")," \u673a\u5236\u53ef\u4ee5\u51cf\u5c11\u9879\u76ee\u95f4\u7684\u8026\u5408\uff0c\u63d0\u9ad8\u5e94\u7528\u541e\u5410\u91cf\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelContext<TMessage, THandler>")," \u5bc6\u5c01\u7c7b\uff0c\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"UnBoundedChannel")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"BoundedChannel")," \u4e24\u79cd\u7ba1\u9053\u901a\u4fe1\u6a21\u5f0f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UnBoundedChannel"),"\uff1a\u5177\u6709\u65e0\u9650\u5bb9\u91cf\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Channel"),", \u751f\u4ea7\u8005\u53ef\u4ee5\u5168\u901f\u8fdb\u884c\u751f\u4ea7\u6570\u636e\uff0c\u4f46\u5982\u679c\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u901f\u5ea6\u4f4e\u4e8e\u751f\u4ea7\u8005\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Channel")," \u7684\u8d44\u6e90\u4f7f\u7528\u4f1a\u65e0\u9650\u589e\u52a0\uff0c\u4f1a\u6709\u670d\u52a1\u5668\u8d44\u6e90\u8017\u5c3d\u7684\u53ef\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BoundedChannel"),"\uff1a\u5177\u6709\u6709\u9650\u5bb9\u91cf\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Channel"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"TouchSocket")," \u6846\u67b6\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"1000"),"\uff0c\u5230\u8fbe\u4e0a\u9650\u540e\uff0c\u751f\u4ea7\u8005\u8fdb\u5165\u7b49\u5f85\u5199\u5165\u76f4\u5230\u6709\u7a7a\u95f2\uff0c\u597d\u5904\u662f\u53ef\u4ee5\u63a7\u5236\u751f\u4ea7\u7684\u901f\u5ea6\uff0c\u63a7\u5236\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u3002",(0,l.kt)("strong",{parentName:"li"},"\uff08\u63a8\u8350\uff09"))),(0,l.kt)("h3",{id:"3342-\u5e38\u89c4\u4f7f\u7528"},"33.4.2 \u5e38\u89c4\u4f7f\u7528"),(0,l.kt)("h4",{id:"\u521b\u5efa-channelhandlertmessage-\u7ba1\u9053\u5904\u7406\u7a0b\u5e8f"},"\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"h4"},"ChannelHandler<TMessage>")," \u7ba1\u9053\u5904\u7406\u7a0b\u5e8f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,10,17}",showLineNumbers:!0,"":!0,"{1,10,17}":!0},'using TouchSocket.IPCChannel;\nusing System;\nusing System.Threading.Tasks;\n\nnamespace TouchSocket.Core\n{\n    /// <summary>\n    /// \u521b\u5efa\u7ba1\u9053\u5904\u7406\u7a0b\u5e8f\uff08\u5904\u7406 String \u7c7b\u578b\u6d88\u606f\uff09\n    /// </summary>\n    public class MyChannelHandler : ChannelHandler<string>\n    {\n        /// <summary>\n        /// \u63a5\u53d7\u5230\u7ba1\u9053\u6d88\u606f\u540e\u5904\u7406\u7a0b\u5e8f\n        /// </summary>\n        /// <param name="message"></param>\n        /// <returns></returns>\n        public override Task InvokeAsync(string message)\n        {\n            Console.WriteLine(message);\n\n            return Task.CompletedTask;\n        }\n    }\n}\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"}," ChannelHandler<TMessage>")," \u6cdb\u578b\u7c7b\u578b\u51b3\u5b9a\u4e86\u4f60\u8981\u63a5\u53d7\u90a3\u79cd\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u4e0d\u540c\u7c7b\u578b\u6d88\u606f\u5c06\u4f1a\u81ea\u52a8\u8fc7\u6ee4\u7b5b\u9009\u3002")),(0,l.kt)("h4",{id:"\u4f7f\u7528-channelcontexttmessage-thandler-\u53d1\u9001\u6d88\u606f"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h4"},"ChannelContext<TMessage, THandler>")," \u53d1\u9001\u6d88\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {5-6}",showLineNumbers:!0,"":!0,"{5-6}":!0},'public async Task SendAsync()\n{\n    for (int i = 0; i < 100; i++)\n    {\n        // \u4f7f\u7528\u6709\u9650\u5bb9\u91cf\u751f\u4ea7\u6570\u636e\n        await ChannelContext<string, MyChannelHandler>.BoundedChannel.Writer.WriteAsync($"Loop {i} times.");\n    }\n}\n')),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ChannelContext<string, MyChannelHandler>.BoundedChannel.Writer.TryWrite()")," \u540c\u6b65\u5199\u5165\u3002"),(0,l.kt)("h3",{id:"3343-\u5b9e\u73b0\u591a\u8ba2\u9605"},"33.4.3 \u5b9e\u73b0\u591a\u8ba2\u9605"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u957f\u65f6\u95f4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Task")," \u4efb\u52a1\u8fdb\u884c\u6570\u636e\u68c0\u67e5\u53ca\u8ba2\u9605\uff0c\u5982\u9700\u5b9e\u73b0\u591a\u8ba2\u9605\u6a21\u5f0f\uff0c\u53ef\u521b\u5efa\u65b0\u7684\u8ba2\u9605\u4efb\u52a1\u5373\u53ef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var reader = ChannelContext<string, MyChannelHandler>.BoundedChannel.Reader;\n\n// \u521b\u5efa\u957f\u65f6\u95f4\u7ebf\u7a0b\u7ba1\u9053\u8bfb\u53d6\u5668\n_ = Task.Factory.StartNew(async () =>\n  {\n      while (await reader.WaitToReadAsync())\n      {\n          if (!reader.TryRead(out var message)) continue;\n          // \u9ed8\u8ba4\u91cd\u8bd5 3 \u6b21\uff08\u6bcf\u6b21\u95f4\u9694 1s\uff09\n          await Retry.Invoke(async () => await Activator.CreateInstance<MyChannelHandler>().InvokeAsync(message), 3, 1000, finalThrow: false);\n      }\n  }, TaskCreationOptions.LongRunning);\n")),(0,l.kt)("h3",{id:"3344-\u66f4\u591a-channel-\u77e5\u8bc6"},"33.4.4 \u66f4\u591a ",(0,l.kt)("inlineCode",{parentName:"h3"},"Channel")," \u77e5\u8bc6"),(0,l.kt)("p",null,"\u53ef\u67e5\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/tiger-wang/p/14068973.html"},"Dotnet Core \u4e0b\u7684 Channel, \u4f60\u7528\u4e86\u5417\uff1f")," \u535a\u5ba2\u6559\u7a0b\uff08\ud83d\ude03 \u5199\u7684\u4e0d\u9519\uff09"),(0,l.kt)("h3",{id:"3345-callcontext-\u65b9\u5f0f"},"33.4.5 ",(0,l.kt)("inlineCode",{parentName:"h3"},"CallContext")," \u65b9\u5f0f"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocket v2.18+")," \u7248\u672c\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"CallContext")," \u9759\u6001\u7c7b\uff0c\u5185\u90e8\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"AsyncLocal<T>")," \u5b9e\u73b0\uff0c\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u7ebf\u7a0b\u95f4\u901a\u4fe1\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'CallContext.SetLocalValue("name", "TouchSocket");\nCallContext.GetLocalValue("name");\n\nCallContext<int>.SetLocalValue("count", 1);\nCallContext<int>.GetLocalValue("count");\n')),(0,l.kt)("h2",{id:"345-\u8fdb\u7a0b\u5916\u901a\u4fe1\u5171\u4eab\u5185\u5b58"},"34.5 \u8fdb\u7a0b\u5916\u901a\u4fe1\uff08\u5171\u4eab\u5185\u5b58\uff09"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u76ee\u524d\u6682\u672a\u63d0\u4f9b\u7684\u8fdb\u7a0b\u5916\u901a\u4fe1\u529f\u80fd\uff0c\u5c06\u5728\u540e\u7eed\u7248\u672c\u5b9e\u73b0\uff08\u4e3b\u8981\u662f\u6a21\u5757\u8bbe\u8ba1\u8fd8\u672a\u60f3\u597d\uff0c\u6280\u672f\u5df2\u5b9e\u73b0\uff09\u3002"),(0,l.kt)("p",null,"\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"MemoryMapperFile")," \u5b9e\u73b0\u5171\u4eab\u5185\u5b58\u8fbe\u5230\u8fdb\u7a0b\u5916\u901a\u4fe1\u529f\u80fd\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.io.memorymappedfiles.memorymappedfile?view=net-5.0"},"\u4e86\u89e3\u66f4\u591a MemoryMapperFile")),(0,l.kt)("h2",{id:"336-\u53cd\u9988\u4e0e\u5efa\u8bae"},"33.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,l.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,l.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")))}s.isMDXComponent=!0}}]);