"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[4507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"fs",title:"13. FS \u9759\u6001\u7c7b",sidebar_label:"13. FS \u9759\u6001\u7c7b"},l=void 0,i={unversionedId:"global/fs",id:"global/fs",title:"13. FS \u9759\u6001\u7c7b",description:"13.1 \u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668",source:"@site/docs/global/fs.mdx",sourceDirName:"global",slug:"/global/fs",permalink:"/touchsocket/docs/global/fs",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/global/fs.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673350749,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{id:"fs",title:"13. FS \u9759\u6001\u7c7b",sidebar_label:"13. FS \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"12. SpareTime \u9759\u6001\u7c7b",permalink:"/touchsocket/docs/global/sparetime"},next:{title:"14. JWTEncryption \u9759\u6001\u7c7b",permalink:"/touchsocket/docs/global/jwt"}},s={},c=[{value:"13.1 \u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668",id:"131-\u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668",level:2},{value:"13.2 \u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668",id:"132-\u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668",level:2},{value:"13.3 \u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668",id:"133-\u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668",level:2},{value:"13.4 \u7279\u522b\u6ce8\u610f",id:"134-\u7279\u522b\u6ce8\u610f",level:2},{value:"13.5 \u83b7\u53d6\u6587\u4ef6 <code>ContentType</code> \u6216 <code>Mime</code>",id:"135-\u83b7\u53d6\u6587\u4ef6-contenttype-\u6216-mime",level:2},{value:"13.6 \u89e3\u51b3\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6 <code>MIME</code> \u7c7b\u578b",id:"136-\u89e3\u51b3\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6-mime-\u7c7b\u578b",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"131-\u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668"},"13.1 \u83b7\u53d6\u7269\u7406\u6587\u4ef6\u63d0\u4f9b\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var fileProvider = FS.GetPhysicalFileProvider(@"c:/test");\n')),(0,a.kt)("h2",{id:"132-\u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668"},"13.2 \u83b7\u53d6\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u63d0\u4f9b\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var fileProvider = FS.GetEmbeddedFileProvider(Assembly.GetEntryAssembly());\n")),(0,a.kt)("h2",{id:"133-\u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668"},"13.3 \u83b7\u53d6\u6587\u4ef6\u63d0\u4f9b\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var fileProvider = FS.GetFileProvider(FileProviderTypes.Physical, @"c:/test");\n')),(0,a.kt)("h2",{id:"134-\u7279\u522b\u6ce8\u610f"},"13.4 \u7279\u522b\u6ce8\u610f"),(0,a.kt)("p",null,"\u4f7f\u7528\u8be5\u529f\u80fd\u9700\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"services.AddVirtualFileServer()")," \u5df2\u6ce8\u518c\u3002\u6846\u67b6\u63d0\u4f9b\u4e24\u79cd\u65b9\u5f0f\u63a7\u5236\u8be5\u670d\u52a1\u6ce8\u518c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"AppSettings")," \u914d\u7f6e"),"\uff08\u63a8\u8350\u65b9\u5f0f\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "AppSettings": {\n    "EnabledVirtualFileServer": true\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee5\u4e0a\u914d\u7f6e\u9ed8\u8ba4\u5f00\u542f\uff0c\u65e0\u9700\u914d\u7f6e\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"`\u624b\u52a8\u6ce8\u518c"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddVirtualFileServer();\n")),(0,a.kt)("h2",{id:"135-\u83b7\u53d6\u6587\u4ef6-contenttype-\u6216-mime"},"13.5 \u83b7\u53d6\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"ContentType")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Mime")),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchSocket 3.3.1 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var success = FS.TryGetContentType("image.png", out var contentType);  // image/png\n')),(0,a.kt)("h2",{id:"136-\u89e3\u51b3\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6-mime-\u7c7b\u578b"},"13.6 \u89e3\u51b3\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"h2"},"MIME")," \u7c7b\u578b"),(0,a.kt)("p",null,"\u89e3\u51b3\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"MIME")," \u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"404")," \u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"app.UseStaticFiles(new StaticFileOptions {\n  ContentTypeProvider = FS.GetFileExtensionContentTypeProvider()\n})\n")))}u.isMDXComponent=!0}}]);