"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7555],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),c=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=c(t.components);return o.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||a;return n?o.createElement(m,p(p({ref:e},s),{},{components:n})):o.createElement(m,p({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,p=new Array(a);p[0]=h;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8150:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));n(4996);const a={slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["TouchSocket","furos",".net",".netcore",".net5","httpcontext"]},p=void 0,l={permalink:"/touchsocket/blog/httpcontext",editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/blog/2021-02-01-httpcontext.mdx",source:"@site/blog/2021-02-01-httpcontext.mdx",title:"1. HttpContext \u5e94\u7528",description:"",date:"2021-02-01T00:00:00.000Z",formattedDate:"February 1, 2021",tags:[{label:"TouchSocket",permalink:"/touchsocket/blog/tags/touch-socket"},{label:"furos",permalink:"/touchsocket/blog/tags/furos"},{label:".net",permalink:"/touchsocket/blog/tags/net"},{label:".netcore",permalink:"/touchsocket/blog/tags/netcore"},{label:".net5",permalink:"/touchsocket/blog/tags/net-5"},{label:"httpcontext",permalink:"/touchsocket/blog/tags/httpcontext"}],readingTime:1.545,hasTruncateMarker:!0,authors:[{name:"dotNET China",title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",url:"https://www.chinadot.net",imageURL:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png"}],frontMatter:{slug:"httpcontext",title:"1. HttpContext \u5e94\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["TouchSocket","furos",".net",".netcore",".net5","httpcontext"]},prevItem:{title:"2. \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",permalink:"/touchsocket/blog/fileupload-download"}},i={authorsImageUrls:[void 0]},c=[{value:"HttpContext \u91cd\u5927\u8c03\u6574",id:"httpcontext-\u91cd\u5927\u8c03\u6574",level:2},{value:"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f",level:2},{value:"\u5728 <code>ControllerBase</code> \u6d3e\u751f\u7c7b\u4e2d",id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d",level:3},{value:"\u901a\u8fc7\u6ce8\u5165 <code>IHttpContextAccessor</code>",id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor",level:3},{value:"\u901a\u8fc7 <code>App.HttpContext</code>",id:"\u901a\u8fc7-apphttpcontext",level:3},{value:"<code>HttpContext</code> \u62d3\u5c55\u65b9\u6cd5",id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027",level:3},{value:"\u8bbe\u7f6e <code>Swagger</code> \u81ea\u52a8\u6388\u6743",id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743",level:3},{value:"\u9000\u51fa <code>Swagger</code> \u6388\u6743",id:"\u9000\u51fa-swagger-\u6388\u6743",level:3},{value:"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740",id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740",level:3},{value:"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740",id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740",level:3}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"httpcontext-\u91cd\u5927\u8c03\u6574"},"HttpContext \u91cd\u5927\u8c03\u6574"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET")," \u7684\u65f6\u4ee3\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5168\u5c40\u9759\u6001\u7c7b\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u4f46\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u662f\u4e00\u4e2a\u975e\u9759\u6001\u7684\u62bd\u8c61\u7c7b\uff0c\u65e0\u6cd5\u624b\u52a8\u521b\u5efa\uff0c\u4e5f\u65e0\u6cd5\u901a\u8fc7\u9759\u6001\u83b7\u53d6\u3002"),(0,r.kt)("p",null,"\u867d\u7136\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u4e2d\u65e0\u6cd5\u76f4\u63a5\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002\u4f46\u662f\u5fae\u8f6f\u4e5f\u63d0\u4f9b\u4e86\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u65b9\u5f0f\u83b7\u53d6\u3002"),(0,r.kt)("h2",{id:"httpcontext-\u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"},"HttpContext \u591a\u79cd\u83b7\u53d6\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u5728-controllerbase-\u6d3e\u751f\u7c7b\u4e2d"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"h3"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ControllerBase")," \u6d3e\u751f\u7c7b\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5c5e\u6027\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u6ce8\u5165-ihttpcontextaccessor"},"\u901a\u8fc7\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"h3"},"IHttpContextAccessor")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u6ce8\u518c\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u670d\u52a1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u8be5\u5bf9\u8c61\u83b7\u53d6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,5}",showLineNumbers:!0,"":!0,"{3,5}":!0},"public class AppService\n{\n    public AppService(IHttpContextAccessor httpContextAccessor)\n    {\n        var httpContext = httpContextAccessor.HttpContext;\n    }\n}\n")),(0,r.kt)("h3",{id:"\u901a\u8fc7-apphttpcontext"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"h3"},"App.HttpContext")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App")," \u9759\u6001\u7c7b\u4e5f\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"App.HttpContext")," \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u3002"),(0,r.kt)("h2",{id:"httpcontext-\u62d3\u5c55\u65b9\u6cd5"},(0,r.kt)("inlineCode",{parentName:"h2"},"HttpContext")," \u62d3\u5c55\u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u62d3\u5c55\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027"},"\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u7684\u7279\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var attribute = httpContext.GetMetadata<SomeAttribute>();\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e-swagger-\u81ea\u52a8\u6388\u6743"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"h3"},"Swagger")," \u81ea\u52a8\u6388\u6743"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'httpContext.SigninToSwagger("\u4f60\u7684token");\n')),(0,r.kt)("h3",{id:"\u9000\u51fa-swagger-\u6388\u6743"},"\u9000\u51fa ",(0,r.kt)("inlineCode",{parentName:"h3"},"Swagger")," \u6388\u6743"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"httpContext.SignoutToSwagger();\n")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u672c\u5730-ip-\u5730\u5740"},"\u83b7\u53d6\u672c\u5730 IP \u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var ipv4 = httpContext.GetLocalIpAddressToIPv4();\nvar ipv6 = httpContext.GetLocalIpAddressToIPv6();\n")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u5ba2\u6237\u7aef-ip-\u5730\u5740"},"\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var ipv4 = httpContext.GetRemoteIpAddressToIPv4();\nvar ipv6 = httpContext.GetRemoteIpAddressToIPv6();\n")))}u.isMDXComponent=!0}}]);