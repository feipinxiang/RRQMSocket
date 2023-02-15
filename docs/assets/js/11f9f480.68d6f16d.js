"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={id:"wscommandlineplugin",title:"WSCommandLinePlugin"},i=void 0,s={unversionedId:"wscommandlineplugin",id:"wscommandlineplugin",title:"WSCommandLinePlugin",description:"\u547d\u4ee4\u884c\u6267\u884c\u63d2\u4ef6\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u5668\u5747\u652f\u6301",source:"@site/docs/wscommandlineplugin.mdx",sourceDirName:".",slug:"/wscommandlineplugin",permalink:"/touchsocket/docs/wscommandlineplugin",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/wscommandlineplugin.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"wscommandlineplugin",title:"WSCommandLinePlugin"},sidebar:"docs",previous:{title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",permalink:"/touchsocket/docs/createwebsocketclient"},next:{title:"\u57fa\u4e8eWS\u7684JsonRpc",permalink:"/touchsocket/docs/wsjsonrpc"}},c={},l=[{value:"\u547d\u4ee4\u884c\u6267\u884c\u63d2\u4ef6\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u5668\u5747\u652f\u6301",id:"\u547d\u4ee4\u884c\u6267\u884c\u63d2\u4ef6\u5ba2\u6237\u7aef\u670d\u52a1\u5668\u5747\u652f\u6301",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u547d\u4ee4\u884c\u6267\u884c\u63d2\u4ef6\u5ba2\u6237\u7aef\u670d\u52a1\u5668\u5747\u652f\u6301"},"\u547d\u4ee4\u884c\u6267\u884c\u63d2\u4ef6\u5ba2\u6237\u7aef\u3001\u670d\u52a1\u5668\u5747\u652f\u6301"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WSCommandLinePlugin"),"\u547d\u4ee4\u884c\u6267\u884c\u63d2\u4ef6\uff0c\u662f\u7528\u4e8e",(0,o.kt)("strong",{parentName:"p"},"WebSocket"),"\u7684\u5feb\u6377\u4e8b\u52a1\u5b9e\u73b0\uff0c\u8ba9WS\u5728",(0,o.kt)("strong",{parentName:"p"},"Text"),"\u6587\u672c\u4e2d\uff0c\u7528\u6700\u7b80\u5355\u7684\u6587\u5b57\u6d88\u606f\u5373\u53ef\u5b8c\u6210\u76f8\u5173\u4e8b\u52a1\u7684\u6267\u884c\u3002\u8be5\u7c7b\u662f\u62bd\u8c61\u7c7b\uff0c\u5fc5\u987b\u901a\u8fc7\u7ee7\u627f\uff0c\u5728\u7ee7\u627f\u7c7b\u4e2d\uff0c\u58f0\u660e\u7684\u5177\u7684",(0,o.kt)("strong",{parentName:"p"},"\u516c\u5171\u7684"),"\u4e14\u540d\u79f0\u4ee5",(0,o.kt)("strong",{parentName:"p"},"Command"),"\u7ed3\u5c3e\u7684\u65b9\u6cd5\uff0c\u5747\u53ef\u88ab\u5feb\u6377\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a\u4e0b\u5217\u63d2\u4ef6\uff0c\u5373\u53ef\u88ab\u666e\u901aWS\u5ba2\u6237\u7aef\uff0c\u6216\u670d\u52a1\u5668\u4fbf\u6377\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u8c03\u7528\u6570\u636e\u683c\u5f0f\uff1a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Add 10 20"),"\u652f\u6301Json\u6570\u636e\u683c\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var service = new HttpService();\n\nvar config = new TouchSocketConfig();\nconfig.UsePlugin()\n    .SetReceiveType(ReceiveType.Auto)\n    .SetListenIPHosts(new IPHost[] { new IPHost(7789) })\n    .ConfigureContainer(a=> \n    {\n        a.SetSingletonLogger<ConsoleLogger>();\n    })\n    .ConfigurePlugins(a=> \n    {\n        a.Add<WebSocketServerPlugin>();//\u6dfb\u52a0WebSocket\u529f\u80fd\n        a.Add<MyWSCommandLinePlugin>();//\u6dfb\u52a0WS\u547d\u4ee4\u884c\u4e8b\u52a1\u3002\n    });\n\nservice.Setup(config)\n    .Start();\nservice.Logger.Message("Http\u670d\u52a1\u5668\u5df2\u542f\u52a8");\nservice.Logger.Message("WS\u8bbf\u95ee\uff1aws://127.0.0.1:7789/ws");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'/// <summary>\n/// \u547d\u4ee4\u884c\u63d2\u4ef6\u3002\n/// \u58f0\u660e\u7684\u65b9\u6cd5\u5fc5\u987b\u4ee5"Command"\u7ed3\u5c3e\uff0c\u652f\u6301json\u5b57\u7b26\u4e32\uff0c\u53c2\u6570\u4e4b\u95f4\u7a7a\u683c\u9694\u5f00\u3002\n/// </summary>\nclass MyWSCommandLinePlugin : WSCommandLinePlugin\n{\n    public int AddCommand(int a, int b)\n    {\n        return a + b;\n    }\n\n    public SumClass SumCommand(SumClass sumClass)\n    {\n        sumClass.Sum = sumClass.A + sumClass.B;\n        return sumClass;\n    }\n}\nclass SumClass\n{\n    public int A { get; set; }\n    public int B { get; set; }\n    public int Sum { get; set; }\n\n}\n')))}p.isMDXComponent=!0}}]);