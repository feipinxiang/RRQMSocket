"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[923],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"datasecurity",sidebar_position:4,title:"\u6570\u636e\u52a0\u5bc6",sidebar_label:"4.4 \u6570\u636e\u52a0\u5bc6"},c=void 0,i={unversionedId:"04\u3001Core/datasecurity",id:"04\u3001Core/datasecurity",title:"\u6570\u636e\u52a0\u5bc6",description:"\u4e00\u30013DES",source:"@site/docs/04\u3001Core/4.4 \u6570\u636e\u52a0\u5bc6.mdx",sourceDirName:"04\u3001Core",slug:"/04\u3001Core/datasecurity",permalink:"/touchsocket/docs/04\u3001Core/datasecurity",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/04\u3001Core/4.4 \u6570\u636e\u52a0\u5bc6.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"datasecurity",sidebar_position:4,title:"\u6570\u636e\u52a0\u5bc6",sidebar_label:"4.4 \u6570\u636e\u52a0\u5bc6"},sidebar:"tutorialSidebar",previous:{title:"4.3 \u5927\u5c0f\u7aef\u8f6c\u6362\u5668",permalink:"/touchsocket/docs/04\u3001Core/touchsocketbitconverter"},next:{title:"4.5 \u65e5\u5fd7\u8bb0\u5f55\u5668",permalink:"/touchsocket/docs/04\u3001Core/ilog"}},s={},l=[{value:"\u4e00\u30013DES",id:"\u4e003des",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e003des"},"\u4e00\u30013DES"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Nuget Package\uff1a"),(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket/"},"TouchSocket"),"\n\u3010\u52a0\u5bc6\u3011"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var dataLocked = DataSecurity.EncryptDES(data, "12345678");//\u52a0\u5bc6\u53e3\u4ee4\uff0c\u957f\u5ea6\u4e3a8\u3002\n')),(0,o.kt)("p",null,"\u3010\u89e3\u5bc6\u3011"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var newData = DataSecurity.DecryptDES(dataLocked, "12345678");//\u89e3\u5bc6\u53e3\u4ee4\uff0c\u548c\u52a0\u5bc6\u4e00\u81f4\u3002\n')))}p.isMDXComponent=!0}}]);