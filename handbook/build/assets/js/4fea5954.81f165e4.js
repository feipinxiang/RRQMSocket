"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[3294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"udpbroadcast",title:"\u7ec4\u64ad\u3001\u5e7f\u64ad"},i=void 0,d={unversionedId:"udpbroadcast",id:"version-1.3.9/udpbroadcast",title:"\u7ec4\u64ad\u3001\u5e7f\u64ad",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/udpbroadcast.mdx",sourceDirName:".",slug:"/udpbroadcast",permalink:"/touchsocket/docs/1.3.9/udpbroadcast",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/udpbroadcast.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"udpbroadcast",title:"\u7ec4\u64ad\u3001\u5e7f\u64ad"},sidebar:"docs",previous:{title:"\u4f20\u8f93\u5927\u4e8e64K\u7684\u6570\u636e",permalink:"/touchsocket/docs/1.3.9/udptransmitbigdata"},next:{title:"\u4ecb\u7ecd\u53ca\u4f7f\u7528",permalink:"/touchsocket/docs/1.3.9/adapterdescription"}},l={},s=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7ec4\u64ad\u4f7f\u7528",id:"\u4e8c\u7ec4\u64ad\u4f7f\u7528",level:2},{value:"2.1 \u521b\u5efa\u7ec4\u64ad\u670d\u52a1\u5668",id:"21-\u521b\u5efa\u7ec4\u64ad\u670d\u52a1\u5668",level:3},{value:"2.2 \u53d1\u9001\u7ec4\u64ad\u6570\u636e",id:"22-\u53d1\u9001\u7ec4\u64ad\u6570\u636e",level:3},{value:"\u4e09\u3001\u5e7f\u64ad",id:"\u4e09\u5e7f\u64ad",level:2},{value:"3.1 \u521b\u5efa\u5e7f\u64ad\u670d\u52a1\u5668",id:"31-\u521b\u5efa\u5e7f\u64ad\u670d\u52a1\u5668",level:3},{value:"3.2 \u53d1\u9001\u5e7f\u64ad\u6570\u636e",id:"32-\u53d1\u9001\u5e7f\u64ad\u6570\u636e",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e7f\u64adBroadCast\uff1a\u4e3b\u673a\u4e4b\u95f4\u201c\u4e00\u5bf9\u6240\u6709\u201d\u7684\u901a\u8baf\u6a21\u5f0f\uff0c\u5e7f\u64ad\u8005\u53ef\u4ee5\u5411\u7f51\u7edc\u4e2d\u6240\u6709\u4e3b\u673a\u53d1\u9001\u4fe1\u606f\u3002\u5e7f\u64ad\u7981\u6b62\u5728Internet\u5bbd\u5e26\u7f51\u4e0a\u4f20\u8f93\uff08\u5e7f\u64ad\u98ce\u66b4\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u591a\u64adMultiCast\uff1a\u4e3b\u673a\u4e4b\u95f4\u201c\u4e00\u5bf9\u4e00\u7ec4\u201d\u7684\u901a\u8baf\u6a21\u5f0f\uff0c\u4e5f\u5c31\u662f\u52a0\u5165\u4e86\u540c\u4e00\u4e2a\u7ec4\u7684\u4e3b\u673a\u53ef\u4ee5\u63a5\u53d7\u5230\u6b64\u7ec4\u5185\u7684\u6240\u6709\u6570\u636e\u3002")),(0,a.kt)("h2",{id:"\u4e8c\u7ec4\u64ad\u4f7f\u7528"},"\u4e8c\u3001\u7ec4\u64ad\u4f7f\u7528"),(0,a.kt)("p",null,"\u7ec4\u64ad\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4e2d\u542f\u7528\u5e7f\u64ad",(0,a.kt)("strong",{parentName:"li"},"UseBroadcast"),"\u91cd\u8981"),(0,a.kt)("li",{parentName:"ol"},"\u5728UdpSession",(0,a.kt)("strong",{parentName:"li"},"\u542f\u52a8"),"\u540e\u3002\u8c03\u7528",(0,a.kt)("strong",{parentName:"li"},"JoinMulticastGroup"),"\u5373\u53ef\u52a0\u5165\u7ec4\u64ad\u3002\u8c03\u7528",(0,a.kt)("strong",{parentName:"li"},"DropMulticastGroup"),"\uff0c\u9000\u51fa\u7ec4\u64ad\u3002")),(0,a.kt)("h3",{id:"21-\u521b\u5efa\u7ec4\u64ad\u670d\u52a1\u5668"},"2.1 \u521b\u5efa\u7ec4\u64ad\u670d\u52a1\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{9}","{9}":!0},'//\u521b\u5efaudpService\nUdpSession udpService = new UdpSession();\nudpService.Received = (remote, byteBlock, requestInfo) =>\n{\n    Console.WriteLine(byteBlock.ToString());\n};\nudpService.Setup(new TouchSocketConfig()\n    .SetBindIPHost(new IPHost(7789))\n    .UseBroadcast()\n    .SetUdpDataHandlingAdapter(() => new NormalUdpDataHandlingAdapter()))\n    .Start();\n\n//\u52a0\u5165\u7ec4\u64ad\u7ec4\nudpService.JoinMulticastGroup(IPAddress.Parse("224.5.6.7"));\n')),(0,a.kt)("h3",{id:"22-\u53d1\u9001\u7ec4\u64ad\u6570\u636e"},"2.2 \u53d1\u9001\u7ec4\u64ad\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{7}","{7}":!0},'UdpSession udpClient = new UdpSession();\nudpClient.Setup(new TouchSocketConfig()\n    .SetBindIPHost(new IPHost(7788))\n    .SetUdpDataHandlingAdapter(() => new NormalUdpDataHandlingAdapter()))\n    .Start();\n\nudpClient.Send(new IPEndPoint(IPAddress.Parse("224.5.6.7"), 7789), Encoding.UTF8.GetBytes("\u6211\u662f\u7ec4\u64ad"));\n')),(0,a.kt)("h2",{id:"\u4e09\u5e7f\u64ad"},"\u4e09\u3001\u5e7f\u64ad"),(0,a.kt)("p",null,"\u5e7f\u64ad\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4e2d\u542f\u7528\u5e7f\u64ad",(0,a.kt)("strong",{parentName:"li"},"UseBroadcast"),"\u91cd\u8981")),(0,a.kt)("h3",{id:"31-\u521b\u5efa\u5e7f\u64ad\u670d\u52a1\u5668"},"3.1 \u521b\u5efa\u5e7f\u64ad\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u5e7f\u64ad\u63a5\u6536\u65f6\uff0c\u662f\u4e0d\u9700\u8981\u52a0\u5165\u7ec4\u64ad\u7ec4\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{9}","{9}":!0},"//\u521b\u5efaudpService\nUdpSession udpService = new UdpSession();\nudpService.Received = (remote, byteBlock, requestInfo) =>\n{\n    Console.WriteLine(byteBlock.ToString());\n};\nudpService.Setup(new TouchSocketConfig()\n    .SetBindIPHost(new IPHost(7789))\n    .UseBroadcast()\n    .SetUdpDataHandlingAdapter(() => new NormalUdpDataHandlingAdapter()))\n    .Start();\n")),(0,a.kt)("h3",{id:"32-\u53d1\u9001\u5e7f\u64ad\u6570\u636e"},"3.2 \u53d1\u9001\u5e7f\u64ad\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{3,8}","{3,8}":!0},'UdpSession udpClient = new UdpSession();\nudpClient.Setup(new TouchSocketConfig()\n    .UseBroadcast()//\u8be5\u914d\u7f6e\u5728\u53d1\u9001\u5e7f\u64ad\u65f6\u662f\u5fc5\u987b\u7684\n    .SetBindIPHost(new IPHost(7788))\n    .SetUdpDataHandlingAdapter(() => new NormalUdpDataHandlingAdapter()))\n    .Start();\n\nudpClient.Send(new IPEndPoint(IPAddress.Parse("255.255.255.255"), 7789), Encoding.UTF8.GetBytes("\u6211\u662f\u5e7f\u64ad"));\n')),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u53d1\u9001\u5e7f\u64ad\u6570\u636e\u65f6\uff0c\u53d1\u9001\u7aef\u914d\u7f6eUseBroadcast\u662f\u5fc5\u987b\u7684\u3002")))}c.isMDXComponent=!0}}]);