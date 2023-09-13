"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[9847],{9613:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(9496);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(o),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:a,l[1]=r;for(var u=2;u<i;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},579:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=o(1163),a=(o(9496),o(9613));const i={sidebar_position:1},l="Setting up a GameVault Client",r={unversionedId:"client-docs/setup",id:"client-docs/setup",title:"Setting up a GameVault Client",description:"If you want to use GameVault to download and install games on your computer, you need to follow these steps.",source:"@site/docs/client-docs/setup.md",sourceDirName:"client-docs",slug:"/client-docs/setup",permalink:"/docs/client-docs/setup",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/client-docs/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Images",permalink:"/docs/server-docs/images"},next:{title:"How to Use",permalink:"/docs/client-docs/how-to-use"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Recommended Installation Option",id:"recommended-installation-option",level:3},{value:"Alternative Installation Options",id:"alternative-installation-options",level:3},{value:"Option 1: Obtain Pre-Built Artifacts from Github",id:"option-1-obtain-pre-built-artifacts-from-github",level:4},{value:"Option 2: Linux Installation",id:"option-2-linux-installation",level:4},{value:"Option 3: Self-Compiling on Windows",id:"option-3-self-compiling-on-windows",level:4},{value:"Option 4: Extracting from the .appxbundle",id:"option-4-extracting-from-the-appxbundle",level:4},{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"Step 1: Select the Root Folder",id:"step-1-select-the-root-folder",level:3},{value:"Step 2: Entering the Selfhosted Backend Server URL",id:"step-2-entering-the-selfhosted-backend-server-url",level:3},{value:"Option 1: Self-hosted GameVault Server",id:"option-1-self-hosted-gamevault-server",level:4},{value:"Option 2: Using the Demo Server",id:"option-2-using-the-demo-server",level:4},{value:"Step 3: Login or Register",id:"step-3-login-or-register",level:3},{value:"Option 1: Login",id:"option-1-login",level:4},{value:"Option 2: Register",id:"option-2-register",level:4},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-gamevault-client"},"Setting up a GameVault Client"),(0,a.kt)("p",null,"If you want to use GameVault to download and install games on your computer, you need to follow these steps."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"recommended-installation-option"},"Recommended Installation Option"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Requirement:")," Windows 10/11 Operating System with Microsoft Store installed"),(0,a.kt)("p",null,"To begin, install the GameVault application from ",(0,a.kt)("a",{parentName:"p",href:"https://www.microsoft.com/store/apps/9PCKDV76GL75"},"the official Microsoft Store"),". This process should be straightforward and will only consume a few minutes of your time. After installing, feel free to continue at ",(0,a.kt)("a",{parentName:"p",href:"#initial-configuration"},"Initial Configuration"),"."),(0,a.kt)("h3",{id:"alternative-installation-options"},"Alternative Installation Options"),(0,a.kt)("p",null,"If you for some reason prefer not to use the Microsoft Store or if you are operating on a different platform, there are multiple other methods available for installing the GameVault Client Application."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please not that any other method than installing it from the Microsoft Store is ",(0,a.kt)("strong",{parentName:"p"},"unsupported")," and ",(0,a.kt)("strong",{parentName:"p"},"unrecommended")," and should only be used as a last resort. Also be aware ",(0,a.kt)("a",{parentName:"p",href:"updating-client#other-sources"},"that you will be responsible for managing updates manually!"))),(0,a.kt)("h4",{id:"option-1-obtain-pre-built-artifacts-from-github"},"Option 1: Obtain Pre-Built Artifacts from Github"),(0,a.kt)("p",null,"Access the most recent Pre-Built Artifact ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Phalcode/gamevault-app/releases/latest"},"here.")),(0,a.kt)("admonition",{title:"Antivirus/Smartscreen Warning",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Your Antivirus or Windows Smartscreen may attempt to prevent you from running our pre-built application, because it is a suspicious-looking binary compiled by an unfamiliar source. This is because we lack a Code Signing Certificate due to budget constraints. You can safely disregard this warning and proceed to run the App by selecting ",(0,a.kt)("inlineCode",{parentName:"p"},"More Details")," and then choosing ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Anyway"),".")),(0,a.kt)("h4",{id:"option-2-linux-installation"},"Option 2: Linux Installation"),(0,a.kt)("p",null,"To run GameVault on Linux utilizing Wine, follow this community-driven method. Visit ",(0,a.kt)("a",{parentName:"p",href:"../advanced-usage/linux-client"},"this")," page for more details."),(0,a.kt)("h4",{id:"option-3-self-compiling-on-windows"},"Option 3: Self-Compiling on Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Visual Studio IDE"),(0,a.kt)("li",{parentName:"ol"},"Include the 2017 build system"),(0,a.kt)("li",{parentName:"ol"},"Clone the gamevault-app source code"),(0,a.kt)("li",{parentName:"ol"},"Open Visual Studio and choose the ",(0,a.kt)("inlineCode",{parentName:"li"},".sln")," file"),(0,a.kt)("li",{parentName:"ol"},"Pick ",(0,a.kt)("inlineCode",{parentName:"li"},"Release")," from the Dropdown menu."),(0,a.kt)("li",{parentName:"ol"},"Build > Build gamevault"),(0,a.kt)("li",{parentName:"ol"},"Utilize the output files.")),(0,a.kt)("h4",{id:"option-4-extracting-from-the-appxbundle"},"Option 4: Extracting from the .appxbundle"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://store.rg-adguard.net"},"https://store.rg-adguard.net")),(0,a.kt)("li",{parentName:"ol"},"Paste ",(0,a.kt)("inlineCode",{parentName:"li"},"https://www.microsoft.com/store/apps/9PCKDV76GL75")," in the search box"),(0,a.kt)("li",{parentName:"ol"},"Download the current .appxbundle"),(0,a.kt)("li",{parentName:"ol"},"Extract the .appxbundle, followed by the ",(0,a.kt)("inlineCode",{parentName:"li"},"ReleasePackage_[VERSION]_x64.appx")," file.")),(0,a.kt)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,a.kt)("p",null,"Once you have installed and launched GameVault, you need to do some initial configuration to get it up and running properly."),(0,a.kt)("h3",{id:"step-1-select-the-root-folder"},"Step 1: Select the Root Folder"),(0,a.kt)("p",null,"In this step, you will choose the location where all your downloaded and installed games will be stored. This folder will act as the central location for your game library. We recommend you to have a read on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/client-docs/how-to-use"},'"How to Use" Chapter')," to understand how the root folder works."),(0,a.kt)("p",null,"To select the root folder, follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Click the "Select Root Path" button.'),(0,a.kt)("li",{parentName:"ol"},"Navigate to the desired location on your computer."),(0,a.kt)("li",{parentName:"ol"},"Choose a folder with sufficient storage space to store your game collection."),(0,a.kt)("li",{parentName:"ol"},'Once you have selected the folder, click "Next" to proceed.'),(0,a.kt)("li",{parentName:"ol"},"GameVault will automatically generate a Subfolder called ",(0,a.kt)("inlineCode",{parentName:"li"},"GameVault")," in your selected Folder with some initial data.")),(0,a.kt)("h3",{id:"step-2-entering-the-selfhosted-backend-server-url"},"Step 2: Entering the Selfhosted Backend Server URL"),(0,a.kt)("p",null,"To connect your GameVault application to the backend server, you need to provide the URL of the server. Depending on your setup, follow one of the two options below:"),(0,a.kt)("h4",{id:"option-1-self-hosted-gamevault-server"},"Option 1: Self-hosted GameVault Server"),(0,a.kt)("p",null,"If you have your own self-hosted GameVault server, please enter its URL in the provided field. Follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter the URL of your self-hosted GameVault server in the provided field."),(0,a.kt)("li",{parentName:"ol"},"Make sure you have the correct URL and it is accessible."),(0,a.kt)("li",{parentName:"ol"},'Click "Next" to proceed.')),(0,a.kt)("h4",{id:"option-2-using-the-demo-server"},"Option 2: Using the Demo Server"),(0,a.kt)("p",null,"If you only want to try out GameVault, without setting up your own server, you can use the demo server. There are no real games on the demo server and the functionality is very limited. ToFollow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Enter "demo.gamevau.lt" as the URL in the provided field.'),(0,a.kt)("li",{parentName:"ol"},"This will allow you to explore the features and functionality of GameVault."),(0,a.kt)("li",{parentName:"ol"},'Click "Next" to proceed')),(0,a.kt)("admonition",{title:"Demo Server Credentials",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Username: ",(0,a.kt)("strong",{parentName:"p"},"demo"),(0,a.kt)("br",{parentName:"p"}),"\n","Password: ",(0,a.kt)("strong",{parentName:"p"},"demodemo"),"  ")),(0,a.kt)("h3",{id:"step-3-login-or-register"},"Step 3: Login or Register"),(0,a.kt)("p",null,"In this step, you will need to log in to your GameVault account on the selected backend server. Choose one of the following options based on your situation:"),(0,a.kt)("h4",{id:"option-1-login"},"Option 1: Login"),(0,a.kt)("p",null,"If you already have a GameVault account on the selected server, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Select "Login" from the options.'),(0,a.kt)("li",{parentName:"ol"},"Enter your login credentials (username and password) in the provided fields."),(0,a.kt)("li",{parentName:"ol"},"Ensure that the credentials are specific to the GameVault backend server you have chosen."),(0,a.kt)("li",{parentName:"ol"},'Click "Login" to proceed.')),(0,a.kt)("h4",{id:"option-2-register"},"Option 2: Register"),(0,a.kt)("p",null,"If you don't have an account on the selected GameVault backend server, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Click the "Register" button.'),(0,a.kt)("li",{parentName:"ol"},"Follow the instructions provided to create your GameVault account on the backend server."),(0,a.kt)("li",{parentName:"ol"},"The server administrators may have to activate your account before you can use it to log in. Contact them if necessary.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Congratulations! You have successfully installed and completed the initial configuration of GameVault. You are now ready to explore and enjoy the features and functionality of the app. If you have any further questions or need assistance, refer to the remaining chapters of this documentation or reach out to our support team for help."),(0,a.kt)("p",null,"We specifically recommend to read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/client-docs/how-to-use"},'"How to Use" Chapter')," to understand how GameVault works."))}c.isMDXComponent=!0}}]);