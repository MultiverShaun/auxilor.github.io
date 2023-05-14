"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2741],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2864:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={},c="minecraft:nearest_healable_raider",s={unversionedId:"all-plugins/custom-entity-ai/all-target-goals/nearest_healable_raider",id:"all-plugins/custom-entity-ai/all-target-goals/nearest_healable_raider",title:"minecraft:nearest_healable_raider",description:"Target nearest healable raider. Can only be applied to raiders",source:"@site/docs/all-plugins/custom-entity-ai/all-target-goals/nearest_healable_raider.md",sourceDirName:"all-plugins/custom-entity-ai/all-target-goals",slug:"/all-plugins/custom-entity-ai/all-target-goals/nearest_healable_raider",permalink:"/all-plugins/custom-entity-ai/all-target-goals/nearest_healable_raider",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/all-plugins/custom-entity-ai/all-target-goals/nearest_healable_raider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"minecraft:nearest_attackable_witch",permalink:"/all-plugins/custom-entity-ai/all-target-goals/nearest_attackable_witch"},next:{title:"minecraft:non_tame_random",permalink:"/all-plugins/custom-entity-ai/all-target-goals/non_tame_random"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"minecraftnearest_healable_raider"},(0,l.kt)("inlineCode",{parentName:"h1"},"minecraft:nearest_healable_raider")),(0,l.kt)("p",null,"Target nearest healable raider. Can only be applied to raiders"),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- key: minecraft:nearest_healable_raider\n  priority: 0\n  args:\n    target: # The types of entities to attack\n      - illusioner\n    checkVisibility: false # If visibility should be checked\n    targetFilter: illusioner health:2 # The filter for targets to match (entity lookup string)\n")))}m.isMDXComponent=!0}}]);