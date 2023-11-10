"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[8563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"createudpsession",title:"\u521b\u5efaUdpSession"},i=void 0,s={unversionedId:"createudpsession",id:"version-1.3.9/createudpsession",title:"\u521b\u5efaUdpSession",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/createudpsession.mdx",sourceDirName:".",slug:"/createudpsession",permalink:"/touchsocket/docs/1.3.9/createudpsession",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/createudpsession.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"createudpsession",title:"\u521b\u5efaUdpSession"},sidebar:"docs",previous:{title:"\u5176\u4ed6\u573a\u666f\u5e94\u7528",permalink:"/touchsocket/docs/1.3.9/tcpother"},next:{title:"Udp\u540c\u6b65\u8bf7\u6c42",permalink:"/touchsocket/docs/1.3.9/udpwaitingclient"}},l={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4ea7\u54c1\u7279\u70b9",id:"\u4e8c\u4ea7\u54c1\u7279\u70b9",level:2},{value:"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:2},{value:"\u56db\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u56db\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"\u56db\u3001\u4f7f\u7528UdpSession",id:"\u56db\u4f7f\u7528udpsession",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"UDP\u7ec4\u4ef6\u662f\u57fa\u4e8eUDP\u534f\u8bae\u7684\u6700\u57fa\u7840\u7ec4\u4ef6\uff0c\u5176\u529f\u80fd\u7b80\u5355\uff0c\u6613\u7528\u3002\u5b83\u65e2\u80fd\u5145\u5f53\u670d\u52a1\u5668\uff0c\u53c8\u80fd\u591f\u4f5c\u4e3a\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u4ea7\u54c1\u7279\u70b9"},"\u4e8c\u3001\u4ea7\u54c1\u7279\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u7ebf\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6c60"),(0,o.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd")),(0,o.kt)("h2",{id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f"},"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"UDP\u57fa\u7840\u4f7f\u7528\u573a\u666f\uff1a\u53ef\u8de8\u5e73\u53f0\u3001\u8de8\u8bed\u8a00\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"\u56db\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u56db\u3001\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,o.kt)("p",null,"\u58f0\u660e\u81ea\u5b9a\u4e49\u5b9e\u4f8b\u7c7b\uff0c\u7136\u540e\u5b9e\u73b0",(0,o.kt)("strong",{parentName:"p"},"IUdpSessionPlugin"),"\u63a5\u53e3\uff0c\u5373\u53ef\u5b9e\u73b0\u4e0b\u5217\u4e8b\u52a1\u7684\u89e6\u53d1\u3002\u6216\u8005\u7ee7\u627f\u81ea",(0,o.kt)("strong",{parentName:"p"},"UdpSessionPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u65b9\u6cd5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OnReceivedData"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728\u6536\u5230\u6570\u636e\u65f6\u89e6\u53d1")))),(0,o.kt)("h2",{id:"\u56db\u4f7f\u7528udpsession"},"\u56db\u3001\u4f7f\u7528UdpSession"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'UdpSession udpSession = new UdpSession();\nudpSession.Received += (remote, byteBlock,requestInfo) =>\n{\n    udpSession.Send(remote, byteBlock);\n    Console.WriteLine($"\u6536\u5230\uff1a{Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len)}");\n};\nudpSession.Setup(new TouchSocketConfig()\n     .SetBindIPHost(new IPHost(7789)))\n     .Start();\nConsole.WriteLine("\u7b49\u5f85\u63a5\u6536");\n\n')),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u5373\u4f7f\u4e0d\u76d1\u542c\u5730\u5740\uff0cSetup\u548cStart\u90fd\u662f\u5fc5\u987b\u8981\u7684\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5f53udp\u4f5c\u4e3a\u5ba2\u6237\u7aef\u65f6\uff0cConfig\u5982\u679c\u4e0d\u8bbe\u7f6eSetBindIPHost\uff0c\u5c06\u4e0d\u4f1a\u63a5\u6536\uff0c\u5982\u679c\u4e0d\u77e5\u9053\u7ed1\u5b9a\u90a3\u4e2a\u7aef\u53e3\uff0c\u53ef\u4ee5\u76f4\u63a5\u7ed1\u5b9a0\u7aef\u53e3\uff0c\u8fd9\u6837\uff0c\u5c31\u4f1a\u4f7f\u7528\u7cfb\u7edf\u7a7a\u95f2\u7684\u4e00\u4e2a\u7aef\u53e3\u4e86\u3002"))))}d.isMDXComponent=!0}}]);