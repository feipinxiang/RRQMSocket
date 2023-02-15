"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[3214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"resetid",title:"\u670d\u52a1\u5668\u91cd\u7f6eID"},i=void 0,c={unversionedId:"resetid",id:"resetid",title:"\u670d\u52a1\u5668\u91cd\u7f6eID",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/resetid.mdx",sourceDirName:".",slug:"/resetid",permalink:"/touchsocket/docs/resetid",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/resetid.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"resetid",title:"\u670d\u52a1\u5668\u91cd\u7f6eID"},sidebar:"docs",previous:{title:"Tcp\u7aef\u53e3\u8f6c\u53d1",permalink:"/touchsocket/docs/natservice"},next:{title:"\u65ad\u7ebf\u91cd\u8fde",permalink:"/touchsocket/docs/reconnection"}},l={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u914d\u7f6e\u521d\u59cbID\u7b56\u7565",id:"\u4e8c\u914d\u7f6e\u521d\u59cbid\u7b56\u7565",level:2},{value:"\u4e09\u3001\u521b\u5efa\u80fd\u4ee3\u8868\u8fde\u63a5\u7684ID",id:"\u4e09\u521b\u5efa\u80fd\u4ee3\u8868\u8fde\u63a5\u7684id",level:2},{value:"\u56db\u3001\u5373\u65f6\u4fee\u6539ID",id:"\u56db\u5373\u65f6\u4fee\u6539id",level:2},{value:"4.1 \u901a\u8fc7Service\u76f4\u63a5\u4fee\u6539",id:"41-\u901a\u8fc7service\u76f4\u63a5\u4fee\u6539",level:3},{value:"4.2 \u901a\u8fc7SocketClient\u4fee\u6539",id:"42-\u901a\u8fc7socketclient\u4fee\u6539",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u5ba2\u6237\u7aef\u5728\u8fde\u63a5\u65f6\uff0c\u670d\u52a1\u5668\u90fd\u4f1a\u4e3a\u8fde\u63a5\u7684\u5ba2\u6237\u7aef",(0,o.kt)("strong",{parentName:"p"},"\u65b0\u5206\u914d"),"\u4e00\u4e2a\u552f\u4e00\u7684ID\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u670d\u52a1\u5668\u4e2dID\u4e0eSocketClient\u5b9e\u4f8b\u5c31\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002"),(0,o.kt)("h2",{id:"\u4e8c\u914d\u7f6e\u521d\u59cbid\u7b56\u7565"},"\u4e8c\u3001\u914d\u7f6e\u521d\u59cbID\u7b56\u7565"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u670d\u52a1\u5668\u90fd\u4f1a\u6839\u636e",(0,o.kt)("strong",{parentName:"p"},"\u5386\u53f2\u8fde\u63a5\u6570\u91cf"),"\uff0c\u4e3a\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u65b0\u5206\u914dID\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u7b2c\u4e00\u4e2a\u8fde\u63a5\u7684\uff0c\u5176ID\u5c31\u662f1\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"),(0,o.kt)("p",null,"\u5f53\u7136\u6211\u4eec\u53ef\u4ee5\u81ea\u7531\u7684\u5b9a\u4e49ID\u7b56\u7565\uff0c\u53ea\u9700\u8981\u5728Config\u914d\u7f6e\u4e2d\uff0c\u914d\u7f6e",(0,o.kt)("a",{parentName:"p",href:"/touchsocket/docs/createtcpservice#setgetdefaultnewid"},"SetGetDefaultNewID"),"\uff0c\u81ea\u5b9a\u4e49\u65b0ID\u6765\u6e90\u5373\u53ef\u3002\u8981\u6c42\u4e0d\u548c\u73b0\u8fde\u63a5\u7684\u5ba2\u6237\u7aefID\u91cd\u590d\u3002"),(0,o.kt)("p",null,"\u4e0b\u5217\u793a\u4f8b\uff0c\u5c31\u662f\u4f7f\u7528Guid\u4f5c\u4e3a\u521d\u59cbID\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},".SetGetDefaultNewID(()=> { return new Guid().ToString(); })\n")),(0,o.kt)("h2",{id:"\u4e09\u521b\u5efa\u80fd\u4ee3\u8868\u8fde\u63a5\u7684id"},"\u4e09\u3001\u521b\u5efa\u80fd\u4ee3\u8868\u8fde\u63a5\u7684ID"),(0,o.kt)("p",null,"\u4e0a\u8ff0\u8fd9\u79cdID\u89c4\u8303\uff0c\u662f\u4e0e\u8fde\u63a5\u4fe1\u606f\u6ca1\u6709\u4efb\u4f55\u5173\u8054\u7684\uff0c\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u65e0\u6cd5\u5173\u8054SocketClient\u7684\u3002"),(0,o.kt)("p",null,"\u4f46\u5f80\u5f80\uff0c\u6709\u65f6\u5019\uff0c\u6211\u4eec\u5e0c\u671b\uff0cSocketClient\u7684ID\uff0c\u80fd\u4e00\u5b9a\u7a0b\u5ea6\u7684\u4ee3\u8868\u4e00\u4e9b\u4fe1\u606f\u3002\u4f8b\u5982\uff1a\u4ee5\u5ba2\u6237\u7aef\u7684IP\u548c\u7aef\u53e3\uff0c\u4f5c\u4e3a\u552f\u4e00ID\u3002"),(0,o.kt)("p",null,"\u90a3\u8fd9\u65f6\u5019\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u53ef\u4ee5\u8ba2\u9605",(0,o.kt)("strong",{parentName:"p"},"Connecting"),"\uff0c\u7136\u540e\uff0c\u4e3a\u65b0\u8fde\u63a5\u7684SocketClient\uff0c\u8bbe\u7f6e\u4e0e\u4e4b\u6709\u5173\u8054\u4fe1\u606f\u7684ID\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'m_service.Connecting = (client, e) => \n{\n    e.ID = $"{client.IP}:{client.Port}";\n};//\u6709\u5ba2\u6237\u7aef\u6b63\u5728\u8fde\u63a5\n')),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u884c\u4e3a\u901a\u8fc7\u63d2\u4ef6\u5b9e\u73b0\u53ef\u80fd\u66f4\u52a0\u4f18\u96c5\u3002")),(0,o.kt)("h2",{id:"\u56db\u5373\u65f6\u4fee\u6539id"},"\u56db\u3001\u5373\u65f6\u4fee\u6539ID"),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4fee\u6539ID\u7684\u65b9\u5f0f\uff0c\u5e94\u8be5\u8fd8\u4e0d\u8db3\u4ee5\u5e94\u5bf9\u6240\u6709\u60c5\u51b5\u3002\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\uff0c\u5728\u8be5\u8fde\u63a5\u5b8c\u6210\uff0c\u4e14\u7ecf\u8fc7\u67d0\u79cd\u9a8c\u8bc1\u4e4b\u540e\u518d\u8bbe\u7f6e\u65b0\u7684ID\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("strong",{parentName:"p"},"ResetID"),"\u7684\u65b9\u6cd5\uff0c\u6765\u5b9e\u73b0\u9700\u6c42\u3002"),(0,o.kt)("h3",{id:"41-\u901a\u8fc7service\u76f4\u63a5\u4fee\u6539"},"4.1 \u901a\u8fc7Service\u76f4\u63a5\u4fee\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'service.ResetID("oldId","newId");\n')),(0,o.kt)("h3",{id:"42-\u901a\u8fc7socketclient\u4fee\u6539"},"4.2 \u901a\u8fc7SocketClient\u4fee\u6539"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'socketClient.ResetID("newId");\n')),(0,o.kt)("admonition",{title:"\u5907\u6ce8",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u7684ID\u6807\u8bc6\uff0c\u4ec5\u4ec5\u662f\u670d\u52a1\u5668\uff08TcpService\uff09\u548c\u8f85\u52a9\u5ba2\u6237\u7aef\uff08SocketClient\uff09\u4e4b\u95f4\u7684\u5173\u8054\u3002\u4e0e\u5ba2\u6237\u7aef\uff08TcpClient\uff09\u662f\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\u7684\u3002")))}d.isMDXComponent=!0}}]);