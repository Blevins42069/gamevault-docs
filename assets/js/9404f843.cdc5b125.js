"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[4811],{1668:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var a=i(11527),l=i(25847);const t={sidebar_position:4,title:"Client APIs"},s=void 0,r={id:"gamevault-plus/client-apis",title:"Client APIs",description:"The GameVault Client APIs offer interfaces for external use of the GameVault client application for subscribers of GameVault+. Whether you're interacting via the command line, URI, or NamedPipe, you have access to various functionalities provided by the GameVault Client Application. This can be useful for third-party developers who want to integrate with the GameVault ecosystem. (e.g. Playnite Extension)",source:"@site/docs/gamevault-plus/client-apis.md",sourceDirName:"gamevault-plus",slug:"/gamevault-plus/client-apis",permalink:"/docs/gamevault-plus/client-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/gamevault-plus/client-apis.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Client APIs"},sidebar:"docs",previous:{title:"Themes",permalink:"/docs/gamevault-plus/themes"},next:{title:"Licensing and Contributions",permalink:"/docs/license-contribute"}},d={},c=[{value:"Available APIs",id:"available-apis",level:2},{value:"CLI",id:"cli",level:3},{value:"URI",id:"uri",level:3},{value:"NamedPipe",id:"namedpipe",level:3},{value:"Usage",id:"usage",level:2},{value:"Available Actions &amp; Parameters",id:"available-actions--parameters",level:2},{value:"URI &quot;Query&quot; Action",id:"uri-query-action",level:2},{value:"Command-line Examples",id:"command-line-examples",level:2},{value:"URI Examples",id:"uri-examples",level:2},{value:"Query Examples",id:"query-examples",level:2},{value:"C# Code Example",id:"c-code-example",level:2}];function o(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The GameVault Client APIs offer interfaces for external use of the GameVault client application for subscribers of GameVault+. Whether you're interacting via the command line, URI, or NamedPipe, you have access to various functionalities provided by the GameVault Client Application. This can be useful for third-party developers who want to integrate with the GameVault ecosystem. (e.g. Playnite Extension)"}),"\n",(0,a.jsx)(n.p,{children:"This guide provides comprehensive information on utilizing various interfaces offered by the GameVault client application for third-party developers. Whether you're building extensions or integrating with the GameVault ecosystem, this documentation will guide you through the available APIs and their specifications."}),"\n",(0,a.jsx)(n.h2,{id:"available-apis",children:"Available APIs"}),"\n",(0,a.jsx)(n.h3,{id:"cli",children:"CLI"}),"\n",(0,a.jsx)(n.p,{children:"The Command Line Interface (CLI) provides a straightforward way to interact with the GameVault client application directly from the command line. It supports various actions and parameters for seamless integration into your workflows."}),"\n",(0,a.jsx)(n.h3,{id:"uri",children:"URI"}),"\n",(0,a.jsx)(n.p,{children:"The Uniform Resource Identifier (URI) handler allows for communication with the GameVault client application through custom URI schemes. By leveraging URI endpoints, you can trigger actions and pass parameters conveniently."}),"\n",(0,a.jsx)(n.h3,{id:"namedpipe",children:"NamedPipe"}),"\n",(0,a.jsx)(n.p,{children:"The NamedPipe interface facilitates communication between processes on the same machine. Through NamedPipe, you can send messages to and receive responses from the GameVault client application, enabling real-time interaction."}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:"The following sections detail how to use each API provided by the GameVault client application."}),"\n",(0,a.jsx)(n.h2,{id:"available-actions--parameters",children:"Available Actions & Parameters"}),"\n",(0,a.jsx)(n.p,{children:"Explore the list of actions and parameters supported by the GameVault client APIs. (Bold parameters are required, Asterisks indicate default values )"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<none>"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Supported for direct command-line usage only."}),"\n",(0,a.jsxs)(n.li,{children:["Alias for ",(0,a.jsx)(n.code,{children:"show"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"show"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Starts and if the main application or a specific game."}),"\n",(0,a.jsxs)(n.li,{children:["Parameters:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gameid=[id]"}),": Target a specific game to show."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"minimized=[true/false*]"}),": Run the application minimized to the tray."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"install"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Installs a specific game defined by ",(0,a.jsx)(n.code,{children:"gameid"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Additional parameters:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"gameid=[id]"})}),": Target a specific game to install."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"minimized=[true/false*]"}),": Run the application minimized to the tray."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"uninstall"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Uninstalls a specific game defined by ",(0,a.jsx)(n.code,{children:"gameid"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Additional parameters:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"gameid=[id]"})}),": Target a specific game to uninstall."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"minimized=[true/false*]"}),": Run the application minimized to the tray."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"start"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Starts a specific game defined by ",(0,a.jsx)(n.code,{children:"gameid"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Additional parameters:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"gameid=[id]"})}),": Target a specific game to start."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"minimized=[true/false*]"}),": Run the application minimized to the tray."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"autoinstall=[true/false*]"}),": Whether to automatically install the game if not already installed."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"help <action>"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Displays help for the command line interface or a specific action."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"version"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Displays the version of the GameVault client application."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"uri-query-action",children:'URI "Query" Action'}),"\n",(0,a.jsx)(n.p,{children:'The URI "query" action allows you to retrieve information from the client-side app. It is not a replacement for server-side backend interaction but serves as a means to obtain simple information.'}),"\n",(0,a.jsxs)(n.p,{children:["When sending a request via URI, an additional action called ",(0,a.jsx)(n.code,{children:"query"})," is available, which lets you get information from the client-side app. This is ",(0,a.jsx)(n.strong,{children:"not"})," a replacement for the server-side backend and is just a way to get simple information. The specific value to query is provided in the ",(0,a.jsx)(n.code,{children:"query"})," parameter, with the following options available:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"exists"}),": Check if the provided ",(0,a.jsx)(n.code,{children:"gameid"}),"-parameter exists locally or on the configured server (True/False)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"installed"}),": Check if the provided ",(0,a.jsx)(n.code,{children:"gameid"}),"-parameter is installed (True/False)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"downloaded"}),": Check if the provided ",(0,a.jsx)(n.code,{children:"gameid"}),"-parameter is downloaded (True/False)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"getname"}),": Get the name of the game defined by ",(0,a.jsx)(n.code,{children:"gameid"}),"-parameter."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"getinstalldirectory"}),": Get the install directory of the game defined by ",(0,a.jsx)(n.code,{children:"gameid"}),"-parameter."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"getappversion"}),": Get the version of the application."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"getserverurl"}),": Get the URL that we're currently configured to point to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"isloggedin"}),": Returns if the user is currently logged in (True/False)."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"command-line-examples",children:"Command-line Examples"}),"\n",(0,a.jsx)(n.p,{children:"Explore examples of using the GameVault client APIs via the command line:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ps1",children:"# Launch GameVault\ngamevault.exe\n\n# Open GameVault in the background\ngamevault.exe --minimized=true\n\n# Show a specific game (ID 3)\ngamevault.exe show --gameid=3\n\n# Install a game (ID 3)\ngamevault.exe install --gameid=3\n\n# Uninstall a game (ID 3)\ngamevault.exe uninstall --gameid=3\n\n# Start a game (ID 3)\ngamevault.exe start --gameid=3\n\n# Start a game (ID 3) and bring GameVault into view\ngamevault.exe start --gameid=3 --minimized=false\n\n# Same as above without '='\ngamevault.exe start --gameid 3 --minimized false\n\n# Display help screen\ngamevault.exe help\n\n# Display help for 'start'\ngamevault.exe help start\n"})}),"\n",(0,a.jsx)(n.h2,{id:"uri-examples",children:"URI Examples"}),"\n",(0,a.jsx)(n.p,{children:"Discover examples of using the GameVault client APIs via URI:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-uri",children:"gamevault://show\ngamevault://show?minimized=true\ngamevault://install?gameid=3\ngamevault://uninstall?gameid=3\ngamevault://start?gameid=3\ngamevault://start?gameid=3&minimized=false\n"})}),"\n",(0,a.jsx)(n.h2,{id:"query-examples",children:"Query Examples"}),"\n",(0,a.jsx)(n.p,{children:"Explore examples of querying the GameVault client application through URI:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-uri",children:"gamevault://query?query=exists&gameid=3\ngamevault://query?query=installed&gameid=3\ngamevault://query?query=downloaded&gameid=3\ngamevault://query?query=getname&gameid=3\ngamevault://query?query=getinstalldirectory&gameid=3\ngamevault://query?query=getappversion\ngamevault://query?query=getserverurl\ngamevault://query?query=isloggedin\n"})}),"\n",(0,a.jsx)(n.h2,{id:"c-code-example",children:"C# Code Example"}),"\n",(0,a.jsx)(n.p,{children:"For developers working with C#, here's an example of interacting with the GameVault app through the NamedPipe:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'using System;\nusing System.IO;\nusing System.IO.Pipes;\nusing System.Text;\nusing System.Threading;\nusing System.Threading.Tasks;\n\npublic static class GameVaultInteraction\n{\n    public static async Task<string> SendPipeMessage(string message, CancellationToken cancellationToken, bool expectsResult = false, int timeout = 500)\n    {\n        string result = null;\n        using var client = new NamedPipeClientStream("GameVault");\n        StreamWriter writer = null;\n        StreamReader reader = null;\n\n        try\n        {\n            await client.ConnectAsync(timeout, cancellationToken);\n\n            writer = new StreamWriter(client, Encoding.UTF8, 1024, leaveOpen: true) { AutoFlush = true };\n            await writer.WriteLineAsync(message);\n\n            if (expectsResult)\n            {\n                reader = new StreamReader(client, Encoding.UTF8, false, 1024, leaveOpen: true);\n                result = await reader.ReadLineAsync();\n            }\n        }\n        finally\n        {\n            SafeDispose(writer);\n            SafeDispose(reader);\n            SafeDispose(client);\n        }\n\n        return result;\n    }\n\n    private static void SafeDispose(IDisposable disposable)\n    {\n        if (disposable == null)\n            return;\n\n        try\n        {\n            disposable.Dispose();\n        }\n        catch (Exception) { }\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},25847:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var a=i(50959);const l={},t=a.createContext(l);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);