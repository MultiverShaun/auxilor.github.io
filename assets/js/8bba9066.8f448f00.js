"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[3246],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var f=n.createContext({}),p=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,f=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=c,y=s["".concat(f,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,i=new Array(a);i[0]=s;var o={};for(var f in t)hasOwnProperty.call(t,f)&&(o[f]=t[f]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9573:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return f},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=r(7462),c=r(3366),a=(r(7294),r(3905)),i=["components"],o={},f="pay_price",p={unversionedId:"effects/all-effects/pay_price",id:"effects/all-effects/pay_price",title:"pay_price",description:"Triggered Effect",source:"@site/docs/effects/all-effects/pay_price.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/pay_price",permalink:"/effects/all-effects/pay_price",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/pay_price.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"particle_line",permalink:"/effects/all-effects/particle_line"},next:{title:"permanent_potion_effect",permalink:"/effects/all-effects/permanent_potion_effect"}},l={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],s={toc:u};function m(e){var t=e.components,r=(0,c.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pay_price"},(0,a.kt)("inlineCode",{parentName:"h1"},"pay_price")),(0,a.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,a.kt)("p",null,"Pay a ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/prices"},"price")),(0,a.kt)("h1",{id:"example-config"},"Example Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: pay_price\n  args:\n    value: 1000 # The value of the price\n    type: coins # The price type\n  ...other config (eg triggers, filters, mutators, etc)\n")))}m.isMDXComponent=!0}}]);