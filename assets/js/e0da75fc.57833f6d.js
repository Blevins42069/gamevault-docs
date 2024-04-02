"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[2656],{7730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var i=t(11527),a=t(25847);const s={},o="Running the Client on Steamdeck",d={id:"advanced-usage/steamdeck",title:"Running the Client on Steamdeck",description:"This page serves as a community-driven guide to assist you in setting up the GameVault client on SteamOS.",source:"@site/docs/advanced-usage/steamdeck.md",sourceDirName:"advanced-usage",slug:"/advanced-usage/steamdeck",permalink:"/docs/advanced-usage/steamdeck",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/advanced-usage/steamdeck.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Running the Client on Linux",permalink:"/docs/advanced-usage/linux-client"},next:{title:"Introduction",permalink:"/docs/gamevault-plus/introduction"}},l={},r=[{value:"GameVault App Setup Guide",id:"gamevault-app-setup-guide",level:2},{value:"Updating the Client",id:"updating-the-client",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"running-the-client-on-steamdeck",children:"Running the Client on Steamdeck"}),"\n",(0,i.jsx)(n.p,{children:"This page serves as a community-driven guide to assist you in setting up the GameVault client on SteamOS."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Please note that running GameVault on Linux using this method is considered ",(0,i.jsx)(n.strong,{children:"unsupported"})," and ",(0,i.jsx)(n.strong,{children:"unrecommended"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"gamevault-app-setup-guide",children:"GameVault App Setup Guide"}),"\n",(0,i.jsxs)(n.p,{children:["To start, you need the Application files. The simplest way to get them is explained ",(0,i.jsx)(n.a,{href:"/docs/client-docs/setup#option-1-obtain-pre-built-artifacts-from-github",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download the latest version of the GameVault app ",(0,i.jsx)(n.a,{href:"https://github.com/Phalcode/gamevault-app/releases",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download .NET from ",(0,i.jsx)(n.a,{href:"https://download.visualstudio.microsoft.com/download/pr/3136e217-e5b7-4899-9b7e-aa52ecb8b108/d74134edaa75e3300f8692660b9fb7b5/windowsdesktop-runtime-6.0.26-win-x64.exe",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download fonts from ",(0,i.jsx)(n.a,{href:"https://archive.org/details/windows-11-21h2-complete-font-collection",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unzip the GameVault application where you want the application to live."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Where you place the app is where it will install windows portable apps. Make sure you have enough space."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"gamevault.exe"})," to Steam library as a non-steam game (This is important for the proton compdata appid... or so I've been told)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change game compatibility properties to use your preferred version of proton."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Change the target of the Non-steam game to the .NET installer."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the game via Steam."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install .NET."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Change the target of the Non-steam game to the ",(0,i.jsx)(n.code,{children:"gamevault.exe"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Find the Compdata folder ",(0,i.jsx)(n.code,{children:"/home/deck/.local/share/steam/steamapps/compatdata/GAMEAPPIDNUMBER/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Easiest way to find this is to install and run protontricks in the discover store. Mine is 3860686742"})}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsxs)(n.li,{children:["Unzip fonts downloaded from archive.org and install to ",(0,i.jsx)(n.code,{children:"/home/deck/.local/share/steam/steamapps/compatdata/GAMEAPPIDNUMBER/pfx/drive_c/windows/Fonts"}),". (specifically Segoe UI)"]}),"\n",(0,i.jsx)(n.li,{children:"Run GameVault via Steam"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updating-the-client",children:"Updating the Client"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Since there is currently no auto-update functionality available (as mentioned in ",(0,i.jsx)(n.a,{href:"/docs/client-docs/updating-client#other-sources",children:"this link"}),"), it is your responsibility to manually update your GameVault client. To update your client, you will need to repeat the procedure in this documentation."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},25847:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>o});var i=t(50959);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);