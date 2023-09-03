"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[3738],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),a=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=a(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=a(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?o.createElement(k,i(i({ref:e},s),{},{components:n})):o.createElement(k,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var a=2;a<l;a++)i[a]=n[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3160:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>a});var o=n(7462),r=(n(7294),n(3905));const l={id:"troubleshootunity3d",title:"Unity3D\u76f8\u5173"},i=void 0,u={unversionedId:"troubleshootunity3d",id:"troubleshootunity3d",title:"Unity3D\u76f8\u5173",description:"\u3010\u95ee\u3011TouchSocket\u7cfb\u5217\u662f\u5426\u80fd\u7528\u4e8eUnity3D\uff1f",source:"@site/docs/troubleshootunity3d.mdx",sourceDirName:".",slug:"/troubleshootunity3d",permalink:"/touchsocket/docs/troubleshootunity3d",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/troubleshootunity3d.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1692974031,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{id:"troubleshootunity3d",title:"Unity3D\u76f8\u5173"},sidebar:"docs",previous:{title:"\u7591\u96be\u89e3\u7b54",permalink:"/touchsocket/docs/troubleshootsourcecode"},next:{title:"\u5185\u5b58\u6c60",permalink:"/touchsocket/docs/bytepool"}},c={},a=[{value:"\u3010\u95ee\u3011TouchSocket\u7cfb\u5217\u662f\u5426\u80fd\u7528\u4e8eUnity3D\uff1f",id:"\u95eetouchsocket\u7cfb\u5217\u662f\u5426\u80fd\u7528\u4e8eunity3d",level:2},{value:"\u3010\u89e3\u51b3\u3011",id:"\u89e3\u51b3",level:3},{value:"\u3010\u95ee\u3011\u7528\u4e8eUnity 3D\u65f6\uff0c\u663e\u793a\u6709dll\u4e0d\u517c\u5bb9\uff0c\u6216\u8005\u627e\u4e0d\u5230\uff1f",id:"\u95ee\u7528\u4e8eunity-3d\u65f6\u663e\u793a\u6709dll\u4e0d\u517c\u5bb9\u6216\u8005\u627e\u4e0d\u5230",level:2},{value:"\u3010\u89e3\u51b3\u3011",id:"\u89e3\u51b3-1",level:3},{value:"\u3010\u95ee\u3011\u7a0b\u5e8f\u96c6\u7528\u4e8eUnity 3D\u65f6\uff0c\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38\uff1f",id:"\u95ee\u7a0b\u5e8f\u96c6\u7528\u4e8eunity-3d\u65f6\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38",level:2},{value:"\u3010\u89e3\u51b31\u3011",id:"\u89e3\u51b31",level:3},{value:"\u3010\u89e3\u51b32\u3011",id:"\u89e3\u51b32",level:3},{value:"\u3010\u95ee\u3011\u7a0b\u5e8f\u96c6\u7528\u4e8eUnity 3D\u65f6\uff0cJson\u5e8f\u5217\u5316\u6709\u95ee\u9898\uff1f",id:"\u95ee\u7a0b\u5e8f\u96c6\u7528\u4e8eunity-3d\u65f6json\u5e8f\u5217\u5316\u6709\u95ee\u9898",level:2},{value:"\u3010\u89e3\u51b3\u3011",id:"\u89e3\u51b3-2",level:3}],s={toc:a};function p(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,o.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u95eetouchsocket\u7cfb\u5217\u662f\u5426\u80fd\u7528\u4e8eunity3d"},"\u3010\u95ee\u3011TouchSocket\u7cfb\u5217\u662f\u5426\u80fd\u7528\u4e8eUnity3D\uff1f"),(0,r.kt)("p",null,"TouchSocket\u7cfb\u5217\u662f\u5426\u80fd\u7528\u4e8eUnity3D"),(0,r.kt)("h3",{id:"\u89e3\u51b3"},"\u3010\u89e3\u51b3\u3011"),(0,r.kt)("p",null,"\u53ef\u4ee5\u7684\uff0cTouchSocket\u662f\u57fa\u4e8eNet45\u548c.netstandard2.0\u7684\uff0c\u4e14\u6ca1\u6709\u4efb\u4f55\u5176\u4ed6\u8fd0\u884c\u65f6\uff0c\u662f100%\u57fa\u4e8eC#\u5f00\u53d1\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8eunity\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u7531\u4e8eTouchSocket\u5168\u7cfb\u90fd\u662f\u57fa\u4e8eSocket\u6784\u5efa\u7684\uff0c\u6240\u4ee5\u76ee\u524d\u65e0\u6cd5\u7528\u4e8eWebGL\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u652f\u6301window\u3001android\u3001ios\u3001linux\u7b49\u5e73\u53f0\u3002"),(0,r.kt)("p",null,"\u76ee\u524d",(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u6d4b"),"\u652f\u6301Il2cpp\u7f16\u8bd1\uff0c\u652f\u6301HybridCLR\u70ed\u66f4\u65b0\u3002"),(0,r.kt)("p",null,"TouchSocket\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8bdemo\uff0c\u5305\u542b\u4e00\u4e2a\u670d\u52a1\u5668\u548cunity\u5305\u3002\u4ee5\u4f9b\u5927\u5bb6\u4e0b\u8f7d\u8bd5\u7528\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/Unity3d"},"TouchSocket For Unity")),(0,r.kt)("h2",{id:"\u95ee\u7528\u4e8eunity-3d\u65f6\u663e\u793a\u6709dll\u4e0d\u517c\u5bb9\u6216\u8005\u627e\u4e0d\u5230"},"\u3010\u95ee\u3011\u7528\u4e8eUnity 3D\u65f6\uff0c\u663e\u793a\u6709dll\u4e0d\u517c\u5bb9\uff0c\u6216\u8005\u627e\u4e0d\u5230\uff1f"),(0,r.kt)("p",null,"\u3010\u63cf\u8ff0\u3011"),(0,r.kt)("p",null,"unity\u63d0\u793a\uff1a\u7531\u4e8e\u4ee5\u4e0b\u9519\u8bef\uff0c\u5c06\u4e0d\u4f1a\u52a0\u8f7d\u7a0b\u5e8f\u96c6\u201cAssets/Plugins/TouchSocket.dl\u201d\u65e0\u6cd5\u89e3\u6790\u5f15\u7528\u201cTouchSocket.Core\u201d\u3002\u7a0b\u5e8f\u96c6\u662f\u5426\u4e22\u5931\u6216\u4e0e\u5f53\u524d\u5e73\u53f0\u4e0d\u517c\u5bb9?\u53ef\u4ee5\u5728\u63d2\u4ef6\u68c0\u67e5\u5668\u4e2d\u7981\u7528\u5f15\u7528\u9a8c\u8bc1.\u65e0\u6cd5\u89e3\u6790\u5f15\u7528\u201cTouchSocket\u201d\u3002\u7a0b\u5e8f\u96c6\u662f\u5426\u4e22\u5931\u6216\u4e0e\u5f53\u524d\u5e73\u53f0\u4e0d\u517c\u5bb9?\u53ef\u4ee5\u5728\u63d2\u4ef6\u68c0\u67e5\u5668\u4e2d\u7981\u7528\u5f15\u7528\u9a8c\u8bc1"),(0,r.kt)("h3",{id:"\u89e3\u51b3-1"},"\u3010\u89e3\u51b3\u3011"),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3aTouchSocket\u7cfb\u5217\u7a0b\u5e8f\u96c6\u6709\u4f9d\u8d56\u5173\u7cfb\u3002\u4f8b\u5982\uff1aTouchSocket\u4f9d\u8d56\u4e8eTouchSocket.Core\u3002\u6240\u4ee5\u5728\u4e0b\u8f7dTouchSocket.dll\u65f6\uff0c\u5e94\u8be5\u4e5f\u4e0b\u8f7dTouchSocket.Core.dll."),(0,r.kt)("p",null,"\u5f53\u7136\u6709\u65f6\u5019\u6211\u4eec\u5bf9\u5177\u4f53\u4f9d\u8d56\u4e0d\u4e86\u89e3\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728vs\u770b\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,r.kt)("h2",{id:"\u95ee\u7a0b\u5e8f\u96c6\u7528\u4e8eunity-3d\u65f6\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38"},"\u3010\u95ee\u3011\u7a0b\u5e8f\u96c6\u7528\u4e8eUnity 3D\u65f6\uff0c\u6709\u83ab\u540d\u5176\u5999\u7684\u5f02\u5e38\uff1f"),(0,r.kt)("p",null,"\u3010\u63cf\u8ff0\u3011"),(0,r.kt)("p",null,"\u6211\u5c06TouchSocket\u7a0b\u5e8f\u96c6\u5f15\u5165\u5230U3D\u4e2d\u540e\uff0c\u4f7f\u7528\u4e86\u76f8\u5173\u529f\u80fd\uff0c\u6216\u8005\u5176\u4ed6\u7ec4\u4ef6\u529f\u80fd\uff0c\u5728\u7f16\u8f91\u5668\u754c\u9762\u6b63\u5e38\uff0c\u4f46\u662f\u53d1\u5e03\u5230PC\u3001Android\u7b49\u5e73\u53f0\u65f6\u65e0\u6cd5\u4f7f\u7528\uff1f"),(0,r.kt)("h3",{id:"\u89e3\u51b31"},"\u3010\u89e3\u51b31\u3011"),(0,r.kt)("p",null,"\u9996\u5148\u67e5\u770b\u9879\u76ee\u662f\u5426\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"IL2CPP"),"\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u7684\u8bdd\uff0c\u53ef\u4ee5\u8003\u8651\u662f\u5426\u80fd\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Mono"),"\uff0c\u5982\u679c\u80fd\uff0c\u5219OK\u3002"),(0,r.kt)("img",{src:n(7453).Z,width:"300"}),(0,r.kt)("h3",{id:"\u89e3\u51b32"},"\u3010\u89e3\u51b32\u3011"),(0,r.kt)("p",null,"\u9700\u8981unity\u5185link.xml\u8bbe\u7f6e(\u653e\u7f6e\u5728Assets\u6587\u4ef6\u5939\u5185)\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/cn/current/Manual/ManagedCodeStripping.html#LinkXML"},"unity\u5b98\u65b9\u6587\u6863 \u6258\u7ba1\u4ee3\u7801\u5265\u79bb")),(0,r.kt)("p",null,"\u4e0b\u5217\u4ec5\u793a\u4f8b\u90e8\u5206\uff0c\u5982\u679c\u662f\u5176\u4ed6\u7ec4\u4ef6\uff0c\u5219\u6dfb\u52a0\u76f8\u5e94\u7a0b\u5e8f\u96c6\u540d\u79f0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"xml",xml:!0},'<linker>\n    <assembly fullname="TouchSocket" />\n</linker>\n')),(0,r.kt)("p",null,"\u7136\u540e\u5728\u7a0b\u5e8f\u8fd0\u4f5c\u6700\u5f00\u59cb\u65f6\u8c03\u7528\u5168\u5c40\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"GlobalEnvironment.OptimizedPlatforms = OptimizedPlatforms.Unity;\n")),(0,r.kt)("h2",{id:"\u95ee\u7a0b\u5e8f\u96c6\u7528\u4e8eunity-3d\u65f6json\u5e8f\u5217\u5316\u6709\u95ee\u9898"},"\u3010\u95ee\u3011\u7a0b\u5e8f\u96c6\u7528\u4e8eUnity 3D\u65f6\uff0cJson\u5e8f\u5217\u5316\u6709\u95ee\u9898\uff1f"),(0,r.kt)("h3",{id:"\u89e3\u51b3-2"},"\u3010\u89e3\u51b3\u3011"),(0,r.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3aunity\u4e2d\u4e0d\u652f\u6301\u4ee3\u7801\u751f\u6210\u7684Json\u5e8f\u5217\u5316\uff0c\u6240\u4ee5\u5fc5\u987b\u7528IL2cpp\u7248\u7684json\u3002\u4e0b\u9762\u63d0\u4f9b\u53c2\u8003\u535a\u5ba2\u3002"),(0,r.kt)("p",null,"\u5728git\u4e0a\u4e0b\u8f7dNewtonsoft.Json-for-Unity-master\u7684\u538b\u7f29\u6587\u4ef6\uff08.zip\uff09\uff0c\u89e3\u538b\u4e4b\u540e\uff0c\u590d\u5236\u5230unity3D\u5de5\u7a0b\u7684Asset/Plugins\u6587\u4ef6\u5939\u4e0b\u5c31\u53ef\u4ee5\u7528\u4e86\uff0c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jilleJr/Newtonsoft.Json-for-Unity"},"Unity\u7248Newtonsoft.Json")))}p.isMDXComponent=!0},7453:(t,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/png;base64,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"}}]);