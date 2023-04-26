"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[9514,6473],{1780:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(9496),o=n(5924),l=n(977),r=n(2183),c=n(1125),i=n(7990),s=n(1418),d=n(6508),m=n(45),u=n(2634),b=n(7012),p=n(359);const h={backToTopButton:"backToTopButton_G7b5",backToTopButtonShow:"backToTopButtonShow_IigB"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(3442),g=n(7587),k=n(9591),v=n(6306),_=n(1163);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_J5AL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_HDNw"};function I(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(C,{className:S.collapseSidebarButtonIcon}))}var N=n(7882),T=n(2873);const Z=Symbol("EmptyContext"),x=a.createContext(Z);function B(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(x.Provider,{value:l},t)}var w=n(8605),y=n(7115),L=n(6623),A=n(5766);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,l),v=(0,y.Mg)(h,l),{collapsed:C,setCollapsed:S}=(0,w.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(x);if(e===Z)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!C),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:C,updateCollapsed:B}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&E&&S(!0)}),[b,I,s,S,E]),a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(L.Z,(0,_.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?B(!1):(e.preventDefault(),B())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),B()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(J,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:c+1})))}var F=n(2945),M=n(3001);const W={menuExternalLink:"menuExternalLink_ksGx"};function R(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,l),E=(0,F.Z)(m);return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(L.Z,(0,_.Z)({className:(0,o.Z)("menu__link",!E&&W.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(M.Z,null)))}const D={menuHtmlItem:"menuHtmlItem_RURb"};function V(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(n),i&&[D.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,_.Z)({item:t},n));case"html":return a.createElement(V,(0,_.Z)({item:t},n));default:return a.createElement(R,(0,_.Z)({item:t},n))}}function U(e){let{items:t,...n}=e;return a.createElement(B,null,t.map(((e,t)=>a.createElement(z,(0,_.Z)({key:t,item:e,index:t},n)))))}const J=(0,a.memo)(U),q={menu:"menu_ULaH",menuWithAnnouncementBar:"menuWithAnnouncementBar_Ey1m"};function G(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",q.menu,c&&q.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:n,activePath:t,level:1})))}const Y="sidebar_nqTL",K="sidebarWithHideableNavbar_daES",Q="sidebarHidden_mhac",j="sidebarLogo_FbJh";function O(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,k.L)();return a.createElement("div",{className:(0,o.Z)(Y,c&&K,r&&Q)},c&&a.createElement(v.Z,{tabIndex:-1,className:j}),a.createElement(G,{path:t,sidebar:n}),i&&a.createElement(I,{onClick:l}))}const X=a.memo(O);var $=n(5265),ee=n(9389);const te=e=>{let{sidebar:t,path:n}=e;const l=(0,ee.e)();return a.createElement("ul",{className:(0,o.Z)(r.k.docs.docSidebarMenu,"menu__list")},a.createElement(J,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ne(e){return a.createElement($.Zo,{component:te,props:e})}const ae=a.memo(ne);function oe(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(X,e),o&&a.createElement(ae,e))}const le={expandButton:"expandButton_PZ8Z",expandButtonIcon:"expandButtonIcon_BvSj"};function re(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:le.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:le.expandButtonIcon}))}const ce={docSidebarContainer:"docSidebarContainer_KQDf",docSidebarContainerHidden:"docSidebarContainerHidden_E6Ru",sidebarViewport:"sidebarViewport_s4Ud"};function ie(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function se(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.Z)(r.k.docs.docSidebarContainer,ce.docSidebarContainer,n&&ce.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ce.docSidebarContainer)&&n&&s(!0)}},a.createElement(ie,null,a.createElement("div",{className:(0,o.Z)(ce.sidebarViewport,i&&ce.sidebarViewportHidden)},a.createElement(oe,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(re,{toggleSidebar:d}))))}const de={docMainContainer:"docMainContainer_lpic",docMainContainerEnhanced:"docMainContainerEnhanced_tz7z",docItemWrapperEnhanced:"docItemWrapperEnhanced_WVQi"};function me(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.V)();return a.createElement("main",{className:(0,o.Z)(de.docMainContainer,(t||!l)&&de.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced)},n))}const ue={docPage:"docPage_J82R",docsWrapper:"docsWrapper_JbLi"};function be(e){let{children:t}=e;const n=(0,d.V)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ue.docsWrapper},a.createElement(E,null),a.createElement("div",{className:ue.docPage},n&&a.createElement(se,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(me,{hiddenSidebarContainer:o},t)))}var pe=n(6473),he=n(7889);function Ee(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(he.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function fe(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(pe.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ee,e),a.createElement(l.FG,{className:(0,o.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(be,null,c)))))}},6473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9496),o=n(2634),l=n(977),r=n(45);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},1418:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(9496),o=n(2873);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);