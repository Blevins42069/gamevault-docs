"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[8495],{4342:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=t(2676),a=t(9246);const n={sidebar_position:3,sidebar_title:"Adding Games"},r="Adding Games to GameVault",o={id:"server-docs/adding-games",title:"Adding Games to GameVault",description:"If you wish to add games to your server but are struggling with unorganized files, varying file formats, and compressed files, you have come to the right place. In this chapter, you will learn the correct process to add games to your GameVault server.",source:"@site/docs/server-docs/adding-games.md",sourceDirName:"server-docs",slug:"/server-docs/adding-games",permalink:"/docs/server-docs/adding-games",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/adding-games.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_title:"Adding Games"},sidebar:"docs",previous:{title:"Game Types",permalink:"/docs/server-docs/game-types"},next:{title:"Updating Games",permalink:"/docs/server-docs/updating-games"}},l={},d=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Step 1: Preparing",id:"step-1-preparing",level:2},{value:"Step 2: Compression",id:"step-2-compression",level:2},{value:"Method 1: The Fast Way",id:"method-1-the-fast-way",level:3},{value:"Method 2: The Hardcore Way",id:"method-2-the-hardcore-way",level:3},{value:"Method 3: The Balanced Way",id:"method-3-the-balanced-way",level:3},{value:"Step 3: Naming the Archive",id:"step-3-naming-the-archive",level:2},{value:"Adding the same game multiple times",id:"adding-the-same-game-multiple-times",level:3},{value:"Step 4: Deploy \ud83e\udd73",id:"step-4-deploy-",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"adding-games-to-gamevault",children:"Adding Games to GameVault"}),"\n",(0,i.jsx)(s.p,{children:"If you wish to add games to your server but are struggling with unorganized files, varying file formats, and compressed files, you have come to the right place. In this chapter, you will learn the correct process to add games to your GameVault server."}),"\n",(0,i.jsx)(s.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,i.jsxs)(s.p,{children:["Please read the ",(0,i.jsx)(s.a,{href:"/docs/server-docs/structure",children:"File and Folder Structure"})," chapter first."]}),"\n",(0,i.jsx)(s.p,{children:"Adding games to your server is a manual process that demands effort and expertise. However, it is worth the effort. To execute the task accurately, follow the steps outlined below for each game. With practice, you will become more proficient and adept at performing these steps with ease."}),"\n",(0,i.jsx)(s.h2,{id:"step-1-preparing",children:"Step 1: Preparing"}),"\n",(0,i.jsx)(s.p,{children:'Suppose you have obtained a DRM-free copy of "Crawl," and it is located in your file system as follows:'}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Crawl/","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"setup.bin"}),"\n",(0,i.jsx)(s.li,{children:"setup.exe"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"This is not a real-world example."})}),"\n",(0,i.jsx)(s.p,{children:'If the game files are already compressed in a format that GameVault can understand, such as "Crawl.zip", you can skip the next step. However, if you want to maximize disk space and repack the files, you can do that. Datahoarders, for example, rely on every bit and byte on their disks and tend to repack everything to the maximum compression available.'}),"\n",(0,i.jsx)(s.h2,{id:"step-2-compression",children:"Step 2: Compression"}),"\n",(0,i.jsxs)(s.p,{children:["To make your game files compatible with GameVault, you need to archive them. We recommend using ",(0,i.jsx)(s.a,{href:"https://www.7-zip.org/",children:"7Zip"})," for this. There are different approaches to this."]}),"\n",(0,i.jsx)(s.admonition,{title:"single-file executables",type:"tip",children:(0,i.jsxs)(s.p,{children:["If the game you're about to add only consists of a single executable file such as ",(0,i.jsx)(s.code,{children:"setup_game.exe"})," or ",(0,i.jsx)(s.code,{children:"setup_game.sh"}),", you can choose to skip this stage and proceed with ",(0,i.jsx)(s.a,{href:"#step-3-naming-the-archive",children:"naming it"}),". See ",(0,i.jsx)(s.a,{href:"structure#single-file-executable",children:"here"})," for more details."]})}),"\n",(0,i.jsx)(s.h3,{id:"method-1-the-fast-way",children:"Method 1: The Fast Way"}),"\n",(0,i.jsx)(s.p,{children:"The fastest way to compress your game files into a .7z archive is by copying them without compression, which takes little to no time or effort. However, the resulting archive will be as large as the original folder."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"7z a -mx=0 -ms=off game.7z /path/to/game/folder/Crawl/*\n"})}),"\n",(0,i.jsx)(s.p,{children:"This command uses the following options:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"a"}),": Add files to the archive"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-mx=0"}),": Sets the compression level to 0"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-ms=off"}),": Turns off solid block compression"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"method-2-the-hardcore-way",children:"Method 2: The Hardcore Way"}),"\n",(0,i.jsx)(s.p,{children:"To achieve the smallest possible archive size, use the maximum settings of 7zip. The resulting archive may or may not be much smaller than before, but it will definitely be as small as possible. However, this process could take a long time, depending on your hardware, and is very resource-intensive."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"7z a -mx=9 -mfb=64 -md=32m -ms=on game.7z /path/to/game/folder/Crawl/*\n"})}),"\n",(0,i.jsx)(s.p,{children:"This command uses the following options:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"a"}),": Add files to the archive"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-mx=9"}),": Use the maximum compression level"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-mfb=64"}),": Set the number of fast bytes to 64"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-md=32m"}),": Set the dictionary size to 32MB"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"-ms=on"}),": Enable solid block compression"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"method-3-the-balanced-way",children:"Method 3: The Balanced Way"}),"\n",(0,i.jsx)(s.p,{children:"If you are not happy with either method, you can use the preselected options of 7zip to compress the files as effectively and balanced as possible:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"7z a game.7z /path/to/game/folder/Crawl/*\n"})}),"\n",(0,i.jsx)(s.h2,{id:"step-3-naming-the-archive",children:"Step 3: Naming the Archive"}),"\n",(0,i.jsx)(s.p,{children:"Before naming the archive, take a moment to research the game you're about to add. Ask yourself questions or use a search engine to answer  the following questions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'"What version is the game?"'}),"\n",(0,i.jsx)(s.li,{children:'"What year was the game released?"'}),"\n",(0,i.jsx)(s.li,{children:'"Is the game still in early access?"'}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Once you have gathered all the necessary information, you can name the archive using the ",(0,i.jsx)(s.a,{href:"/docs/server-docs/structure",children:"GameVault Naming Structure"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"In our fictitious example we have a copy of Crawl Version 1.0.1 released in 2014, so we named the archive:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"Crawl (v1.0.1) (2014).7z\n"})}),"\n",(0,i.jsx)(s.h3,{id:"adding-the-same-game-multiple-times",children:"Adding the same game multiple times"}),"\n",(0,i.jsxs)(s.p,{children:["If you wish to add the same game multiple times to your GameVault server for any specific reason, it is important to ensure that you rename it slightly differently. This is to prevent the indexer from detecting it as a duplicate entry. We recommend using square brackets ",(0,i.jsx)(s.code,{children:"[]"})," as your personal discriminator for these games. Avoid using regular parentheses ",(0,i.jsx)(s.code,{children:"()"})," as they will be removed by the title extraction regex. It also does not matter if the files are in the same sub-folder or in different ones."]}),"\n",(0,i.jsx)(s.p,{children:"By using this approach, the indexer will treat these two games as separate entities."}),"\n",(0,i.jsx)(s.p,{children:"In case the RAWG Matching feature does not work accurately for these games, you have the option to manually remap them in the client if you have the Role Editor or higher privileges."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Here's a good example:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Game 1: ",(0,i.jsx)(s.code,{children:"Minecraft [Tekkit Modpack] (v1.7.10) (2011).zip"})]}),"\n",(0,i.jsxs)(s.li,{children:["Game 2: ",(0,i.jsx)(s.code,{children:"Minecraft [Hexxit Modpack] (v1.13.2) (2011).zip"})]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Will result in two seperate games"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"And here's a bad example:"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Game 1: ",(0,i.jsx)(s.code,{children:"Minecraft (v1.7.10) (2011).zip"})]}),"\n",(0,i.jsxs)(s.li,{children:["Game 2: ",(0,i.jsx)(s.code,{children:"Minecraft (v1.13.2) (2011).zip"})]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"danger",children:(0,i.jsx)(s.p,{children:"Will result in a single game that gets overwritten!"})}),"\n",(0,i.jsx)(s.h2,{id:"step-4-deploy-",children:"Step 4: Deploy \ud83e\udd73"}),"\n",(0,i.jsxs)(s.p,{children:["Once you have named the archive, place it into the folder on your host system that is mounted to GameVault's files folder (by default ",(0,i.jsx)(s.code,{children:"/files"}),"). Once the archive is in place, GameVault will automatically index the game, enrich it with metadata, and save it in your database."]}),"\n",(0,i.jsx)(s.p,{children:"Congratulations! You have successfully added a game to your GameVault server. Repeat the process for any additional games you want to add."})]})}function c(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9246:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var i=t(5271);const a={},n=i.createContext(a);function r(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);