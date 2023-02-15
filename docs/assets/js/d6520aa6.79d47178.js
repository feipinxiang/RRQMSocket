"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={id:"jsonrpcdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},a=void 0,i={unversionedId:"jsonrpcdescription",id:"jsonrpcdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/jsonrpcdescription.mdx",sourceDirName:".",slug:"/jsonrpcdescription",permalink:"/touchsocket/docs/jsonrpcdescription",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/jsonrpcdescription.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"jsonrpcdescription",title:"\u4ea7\u54c1\u53ca\u67b6\u6784\u4ecb\u7ecd"},sidebar:"docs",previous:{title:"\u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1",permalink:"/touchsocket/docs/callwebapi"},next:{title:"\u5b9a\u4e49\u3001\u53d1\u5e03\u3001\u542f\u52a8\u670d\u52a1",permalink:"/touchsocket/docs/jsonrpcservice"}},p={},s=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9\uff1a",id:"\u4e8c\u7279\u70b9",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"JsonRpc\u662f",(0,o.kt)("strong",{parentName:"p"},"\u901a\u7528"),"\u7684RPC\u89c4\u8303\uff0c\u4e0e",(0,o.kt)("strong",{parentName:"p"},"\u7f16\u7a0b\u8bed\u8a00\u65e0\u5173\u3001\u64cd\u4f5c\u7cfb\u7edf\u65e0\u5173"),"\u3002\u8be6\u7ec6\u8bf4\u660e\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/specification"},"JsonRpc 2.0 \u5b98\u65b9\u6587\u6863"),"\uff0c\u5728TouchSocket\u4e2d\u5c01\u88c5\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u524d\u540e\u7aef"),"\uff0c\u4f7f\u5176\u4f7f\u7528\u66f4\u52a0\u65b9\u4fbf\u3001\u9ad8\u6548\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u652f\u6301Tcp\u3001Http\u3001Websocket\u4e09\u79cd\u534f\u8bae\u8c03\u7528\u3002"),(0,o.kt)("a",{name:"C6IwW"}),(0,o.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5f02\u5e38\u53cd\u9988")," \u3002"),(0,o.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u652f\u6301\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u7c7b\u578b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301\u7c7b\u578b\u5d4c\u5957\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u652f\u6301js\u3001Android\u7b49\u8c03\u7528\u3002")))}u.isMDXComponent=!0}}]);