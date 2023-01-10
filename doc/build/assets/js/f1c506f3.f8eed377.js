"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(k,o(o({ref:t},s),{},{components:n})):i.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={id:"dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",sidebar_label:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e"},o=void 0,c={unversionedId:"settings/dependencyinjectionsettings",id:"settings/dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/dependencyinjectionsettings.mdx",sourceDirName:"settings",slug:"/settings/dependencyinjectionsettings",permalink:"/touchsocket/docs/settings/dependencyinjectionsettings",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/settings/dependencyinjectionsettings.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"dependencyinjectionsettings",title:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e",sidebar_label:"4. \u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e"},sidebar:"settings",previous:{title:"3. \u9a8c\u8bc1\u6d88\u606f\u914d\u7f6e",permalink:"/touchsocket/docs/settings/validationTypemessagesettings"},next:{title:"5. \u52a8\u6001API\u914d\u7f6e",permalink:"/touchsocket/docs/settings/dynamicapicontrollersettings"}},l={},p=[{value:"4.1 \u5173\u4e8e\u914d\u7f6e",id:"41-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"4.2 \u914d\u7f6e\u4fe1\u606f",id:"42-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"4.3 \u914d\u7f6e\u793a\u4f8b",id:"43-\u914d\u7f6e\u793a\u4f8b",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,r.kt)("a",{parentName:"p",href:"../jsonschema"},"2.7 JSON Schema \u4f7f\u7528"),"\u3011"),(0,r.kt)("p",{parentName:"admonition"},"\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'{\n  "$schema": "https://gitee.com/rrqm_home/TouchSocket/raw/v4/schemas/v4/TouchSocket-schema.json"\n}\n'))),(0,r.kt)("h2",{id:"41-\u5173\u4e8e\u914d\u7f6e"},"4.1 \u5173\u4e8e\u914d\u7f6e"),(0,r.kt)("p",null,"\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u6307\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u9009\u9879\u3002"),(0,r.kt)("h2",{id:"42-\u914d\u7f6e\u4fe1\u606f"},"4.2 \u914d\u7f6e\u4fe1\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DependencyInjectionSettings"),"\uff1a\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u6839\u8282\u70b9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Definitions"),"\uff1a\u52a8\u6001\u4f9d\u8d56\u6ce8\u5165\u914d\u7f6e\u8282\u70b9\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"ExternalService")," \u6570\u7ec4\u7c7b\u578b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExternalService"),"\uff1a\u914d\u7f6e\u5355\u4e2a\u4f9d\u8d56\u6ce8\u5165\u4fe1\u606f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Interface"),"\uff1a\u914d\u7f6e\u4f9d\u8d56\u63a5\u53e3\u4fe1\u606f\uff0c\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"\u7a0b\u5e8f\u96c6\u540d\u79f0;\u63a5\u53e3\u5b8c\u6574\u540d\u79f0"),"\uff0c\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"TouchSocket.Application;TouchSocket.Application.ITestService")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Service"),"\uff1a\u914d\u7f6e\u63a5\u53e3\u5b9e\u73b0\u4fe1\u606f\uff0c\u683c\u5f0f\u540c\u4e0a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RegisterType"),"\uff1a\u914d\u7f6e\u4f9d\u8d56\u6ce8\u5165\u7684\u5bf9\u8c61\u751f\u5b58\u671f\uff0c\u53d6\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Transient"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Scoped"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"Singleton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Action"),"\uff1a\u6ce8\u518c\u884c\u4e3a\uff0c\u53ef\u9009\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Add"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"TryAdd"),"\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Pattern"),"\uff1a\u6ce8\u518c\u9009\u9879\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Named"),"\uff1a\u6ce8\u518c\u522b\u540d\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Order"),"\uff1a\u6ce8\u518c\u6392\u5e8f\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Proxy"),"\uff1a\u914d\u7f6e\u4ee3\u7406\u62e6\u622a\uff0c\u683c\u5f0f\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"\u7a0b\u5e8f\u96c6\u540d\u79f0;\u4ee3\u7406\u7c7b\u5b8c\u6574\u540d\u79f0"),"\uff0c\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"../dependency-injection#128-injection-%E7%89%B9%E6%80%A7%E9%85%8D%E7%BD%AE"},"\u4f9d\u8d56\u6ce8\u5165-\u7279\u6027\u914d\u7f6e"))))))))),(0,r.kt)("h2",{id:"43-\u914d\u7f6e\u793a\u4f8b"},"4.3 \u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "DependencyInjectionSettings": {\n    "Definitions": [\n      {\n        "Interface": "TouchSocket.Application;TouchSocket.Application.ITestService",\n        "Service": "TouchSocket.Application;TouchSocket.Application.TestService",\n        "RegisterType": "Transient",\n        "Action": "Add",\n        "Pattern": "SelfWithFirstInterface",\n        "Named": "TestService",\n        "Order": 1,\n        "Proxy": "TouchSocket.Application;TouchSocket.Application.LogDispathProxy"\n      }\n    ]\n  }\n}\n')))}d.isMDXComponent=!0}}]);