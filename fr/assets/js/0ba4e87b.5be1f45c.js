"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={},o="Version 6.12.2 2023-06-29",l={unversionedId:"unraid-os/release-notes/6.12.2",id:"unraid-os/release-notes/6.12.2",title:"Version 6.12.2 2023-06-29",description:"Changes vs. 6.12.1",source:"@site/docs/unraid-os/release-notes/6.12.2.md",sourceDirName:"unraid-os/release-notes",slug:"/unraid-os/release-notes/6.12.2",permalink:"/fr/unraid-os/release-notes/6.12.2",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/release-notes/6.12.2.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Version 6.12.1 2023-06-20",permalink:"/fr/unraid-os/release-notes/6.12.1"},next:{title:"Version 6.12.3 2023-07-14",permalink:"/fr/unraid-os/release-notes/6.12.3"}},s={},u=[{value:"Bug fixes and improvements",id:"bug-fixes-and-improvements",level:2},{value:"Linux kernel",id:"linux-kernel",level:2},{value:"Base Distro",id:"base-distro",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-6122-2023-06-29"},"Version 6.12.2 2023-06-29"),(0,a.kt)("p",null,"Changes vs. ",(0,a.kt)("a",{parentName:"p",href:"/fr/unraid-os/release-notes/6.12.1"},"6.12.1")),(0,a.kt)("p",null,"This is mainly a bug fix release, including also a minor security update.  Other highlights:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We reverted ",(0,a.kt)("strong",{parentName:"li"},"docker")," from v23.0.6, introduced during Unraid OS 6.12 development, to v20.10.24, which is the latest patch\nrelease of ",(0,a.kt)("strong",{parentName:"li"},"docker")," used in Unraid OS 6.11.  This to address increased memory usage and other issues\ndiscovered with ",(0,a.kt)("strong",{parentName:"li"},"docker"),"."),(0,a.kt)("li",{parentName:"ul"},"A small necessary change to invoke our 'update_services' script whenever a WireGuard tunnel starts or stops\nis automatically applied to all 'config/wireguard/*.conf' files when you update via Update OS page.  For\nmanual update or if you downgrade, it is necessary to make a \"dummy change\" in a setting on the Settings/VPN Manager page and\nthen click Apply.")),(0,a.kt)("h2",{id:"bug-fixes-and-improvements"},"Bug fixes and improvements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"email notifications: add line in /etc/php.ini: 'mail.mixed_lf_and_crlf=On' to workaround change in PHP8 CRLF handling"),(0,a.kt)("li",{parentName:"ul"},"emhttpd: Fix regression: emulated ZFS volumes not recognized"),(0,a.kt)("li",{parentName:"ul"},"emhttpd: Fix regression: format fails if diskFsType==auto and defaultFsType specifies encryption"),(0,a.kt)("li",{parentName:"ul"},"emhtptd: Fix regression: mount fails if diskFsType==auto"),(0,a.kt)("li",{parentName:"ul"},"htop: remove predefined /root/.config/htop/htoprc file"),(0,a.kt)("li",{parentName:"ul"},"network: RC services update:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NFS - fix service reload"),(0,a.kt)("li",{parentName:"ul"},"RPC - fix service reload"),(0,a.kt)("li",{parentName:"ul"},"NGINX - remove HTTPS port in FQDN redirect when default 443"),(0,a.kt)("li",{parentName:"ul"},"All services - register IPv4 Link local assignment (169.254.xxx.xxx)"),(0,a.kt)("li",{parentName:"ul"},"All services - make lock file programmable"),(0,a.kt)("li",{parentName:"ul"},"WireGuard: delayed service update to avoid race condition"),(0,a.kt)("li",{parentName:"ul"},"rc.library: do not allow duplicates in bind list"))),(0,a.kt)("li",{parentName:"ul"},"webgui: Dashboard updates:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Re-introduce show/hide tile content"),(0,a.kt)("li",{parentName:"ul"},"Add new icon function to show/hide all content at once"),(0,a.kt)("li",{parentName:"ul"},"Reduce gap between columns"),(0,a.kt)("li",{parentName:"ul"},"description -> model"),(0,a.kt)("li",{parentName:"ul"},"ZFS: fix percentage value to max 100%"),(0,a.kt)("li",{parentName:"ul"},"Use prototype function: This makes it easier for 3rd party developers to automatically hide dynamic content"),(0,a.kt)("li",{parentName:"ul"},"Handle duplicate IP assignments and give warning"),(0,a.kt)("li",{parentName:"ul"},"change header MEMORY to SYSTEM"))),(0,a.kt)("li",{parentName:"ul"},"webgui: OS Update: add checkbox to confirm reading release notes before upgrading"),(0,a.kt)("li",{parentName:"ul"},"webgui: diagnostics: include list of duplicate assignments"),(0,a.kt)("li",{parentName:"ul"},"webgui: NFS: for Security/Private increase Rule field from 256 to 512 characters.")),(0,a.kt)("h2",{id:"linux-kernel"},"Linux kernel"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"version 6.1.36")),(0,a.kt)("h2",{id:"base-distro"},"Base Distro"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bind: version -9.16.42 (CVE-2023-2911)"),(0,a.kt)("li",{parentName:"ul"},"docker: 20.10.24 (revert from v23.0.6)")))}c.isMDXComponent=!0}}]);