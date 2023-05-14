"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[4492],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=n.createContext({}),l=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=i,d=s["".concat(f,".").concat(m)]||s[m]||p[m]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6656:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={},f="repair_item",l={unversionedId:"effects/all-effects/repair_item",id:"effects/all-effects/repair_item",title:"repair_item",description:"Triggered Effect",source:"@site/docs/effects/all-effects/repair_item.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/repair_item",permalink:"/effects/all-effects/repair_item",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/repair_item.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"remove_potion_effect",permalink:"/effects/all-effects/remove_potion_effect"},next:{title:"rotate",permalink:"/effects/all-effects/rotate"}},u={},p=[{value:"Triggered Effect",id:"triggered-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"repair_item"},(0,o.kt)("inlineCode",{parentName:"h1"},"repair_item")),(0,o.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,o.kt)("p",null,"Repairs the item"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: repair_item\n  args:\n    damage: 2 # The durability to repair\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);