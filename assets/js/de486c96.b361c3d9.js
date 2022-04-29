"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[1303],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(g,a(a({ref:r},s),{},{components:t})):n.createElement(g,a({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3864:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],u={title:"API",sidebar_position:4},c=void 0,l={unversionedId:"reforges/api",id:"reforges/api",title:"API",description:"Source Code",source:"@site/docs/reforges/api.md",sourceDirName:"reforges",slug:"/reforges/api",permalink:"/reforges/api",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/reforges/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"API",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to make a custom reforge",permalink:"/reforges/how-to-make-a-custom-reforge"},next:{title:"EcoSkills",permalink:"/ecoskills/"}},s={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Using Reforges in your plugin",id:"using-reforges-in-your-plugin",level:3}],f={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"Like all my plugins, Reforges is open-source and available on JitPack."),(0,i.kt)("p",null,"The source code can be found here:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/Reforges"},"GitHub")),(0,i.kt)("h3",{id:"using-reforges-in-your-plugin"},"Using Reforges in your plugin"),(0,i.kt)("p",null,"Add Reforges to your build.gradle like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n\ndependencies {\n    compileOnly 'com.willfp:Reforges:VERSION'\n}\n")),(0,i.kt)("p",null,"The latest version available on JitPack can be found here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/Reforges/releases"},"https://github.com/Auxilor/Reforges/releases")))}d.isMDXComponent=!0}}]);