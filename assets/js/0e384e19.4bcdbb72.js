"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[9671],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(1163),a=(r(9496),r(9613));const o={sidebar_position:1},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Let's discover Crackpipe!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Setting up a Crackpipe Server",permalink:"/docs/server-docs/setup"}},s={},c=[{value:"What is Crackpipe",id:"what-is-crackpipe",level:2},{value:"Features",id:"features",level:2},{value:"Client Features",id:"client-features",level:3},{value:"Server Features",id:"server-features",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let's discover Crackpipe!")),(0,a.kt)("h2",{id:"what-is-crackpipe"},"What is Crackpipe"),(0,a.kt)("p",null,"Crackpipe is an open-source, decentralized, selfhosted and liberal alternative to Game Platforms and Launchers like Steam, Origin, Epic Games, GoG, etc. which allows you and your friends to play and track games that are ",(0,a.kt)("strong",{parentName:"p"},"on a fileserver"),"."),(0,a.kt)("p",null,"Think of Jellyfin, but for Videogames. You must provide the games. You can not buy games on Crackpipe."),(0,a.kt)("p",null,"The Crackpipe ecosystem consists of a selfhostable NestJS Backend Application and one or more Windows Store App Clients."),(0,a.kt)("p",null,'It was designed to work with "alternatively obtained" games such as DRM-free games. While Crackpipe can be used to install cracked games, it does not encourage or condone piracy.'),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"Here is an overview of all core functions of Crackpipe"),(0,a.kt)("h3",{id:"client-features"},"Client Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0e Browse through your servers game collection"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udce5 Download games from your server securely"),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfae Launch the games and play them"),(0,a.kt)("li",{parentName:"ul"},"\u23f1\ufe0f Track your playtimes and progress (even if the server is offline)"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc65 Compare your stat and play states with other users on the server")),(0,a.kt)("h3",{id:"server-features"},"Server Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u267b\ufe0f Automatically indexes games on the file system into a database"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udcda Enriches the games with metadata like tags & genres and much more using RAWG API"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc65 Multi User Authentication"),(0,a.kt)("li",{parentName:"ul"},"\u23f1\ufe0f Keeps track of your users game progresses and state"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udea8 Health Monitoring and configurable Logging"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0e Full-Text-Search, Filters, Sorting, Pagination"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0c Fully Documented API"),(0,a.kt)("li",{parentName:"ul"},"\u2699\ufe0f Highly Configurable")))}d.isMDXComponent=!0}}]);