"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[4011],{9613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var n=t(9496);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(h,a(a({ref:r},c),{},{components:t})):n.createElement(h,a({ref:r},c))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5776:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(1163),i=(t(9496),t(9613));const o={sidebar_position:6},a="Admin User Configuration",s={unversionedId:"server-docs/admin-user",id:"server-docs/admin-user",title:"Admin User Configuration",description:"This documentation provides instructions on how to configure the initial admin user for the Crackpipe server using Docker environment variables. The initial admin user has permissions to administrate the server including all privileges.",source:"@site/docs/server-docs/admin-user.md",sourceDirName:"server-docs",slug:"/server-docs/admin-user",permalink:"/docs/server-docs/admin-user",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/server-docs/admin-user.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Roles",permalink:"/docs/server-docs/roles"},next:{title:"Autoindexer and Metadata Retrieval",permalink:"/docs/server-docs/autoindexer"}},u={},l=[{value:"Initial Admin User Configuration",id:"initial-admin-user-configuration",level:2},{value:"Automatic Admin Permissions",id:"automatic-admin-permissions",level:2},{value:"Recovering Access to Admin User",id:"recovering-access-to-admin-user",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"admin-user-configuration"},"Admin User Configuration"),(0,i.kt)("p",null,"This documentation provides instructions on how to configure the initial admin user for the Crackpipe server using Docker environment variables. The initial admin user has permissions to administrate the server including all privileges."),(0,i.kt)("h2",{id:"initial-admin-user-configuration"},"Initial Admin User Configuration"),(0,i.kt)("p",null,"To configure the admin user for the Crackpipe you need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_ADMIN_USERNAME")," environment variable to the desired username for the admin user."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"SERVER_ADMIN_USERNAME=adminuser\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"adminuser")," with your preferred username.")),(0,i.kt)("p",null,"Now you can register your User."),(0,i.kt)("h2",{id:"automatic-admin-permissions"},"Automatic Admin Permissions"),(0,i.kt)("p",null,"Upon registration of the initial admin user, the Crackpipe Server will automatically grant administrative permissions to the user. This ensures that the admin user has the necessary privileges to administrate the server."),(0,i.kt)("p",null,"If the admin user was misconfigured to not have admin permissions or if the user already exists, the server will automatically grant admin permissions to that user upon startup. This ensures that the admin user has the correct permissions even if there are configuration errors or existing users."),(0,i.kt)("h2",{id:"recovering-access-to-admin-user"},"Recovering Access to Admin User"),(0,i.kt)("p",null,"In the event that the server owner gets locked out of the admin user account due to password loss or other reasons, the Crackpipe Server provides a way to recover access."),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_ADMIN_PASSWORD")," environment variable to the desired password for the admin user. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"SERVER_ADMIN_PASSWORD=mynewpassword\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"mynewpassword")," with your preferred password.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Warning: We do not enforce the minimum password length when using this environment variable, but we recommend a password with more than 8 characters")),(0,i.kt)("p",null,"Upon the next startup of the Crackpipe Server, the User with ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_ADMIN_USERNAME")," as Username will be set to the specified password, allowing the server owner to regain access to the admin user account."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Configuring the admin user for the Crackpipe Server grants the necessary permissions to administrate the server. By setting the Docker environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_ADMIN_USERNAME")," to the desired username, the admin user will have admin privileges upon registration. "),(0,i.kt)("p",null,"Additionally, if the admin user was misconfigured or already exists, the server will grant admin permissions upon startup. In case of a lockout situation, the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_ADMIN_PASSWORD")," environment variable can be used to regain access to the admin user account."),(0,i.kt)("p",null,"Feel free to reach out to our support team if you encounter any issues or have further questions."))}d.isMDXComponent=!0}}]);