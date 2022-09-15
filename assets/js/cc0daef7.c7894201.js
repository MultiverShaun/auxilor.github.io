"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[1928],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),f=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=f(r),p=o,m=d["".concat(a,".").concat(p)]||d[p]||u[p]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var f=2;f<l;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2411:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),i=["components"],c={},a="drill",f={unversionedId:"effects/all-effects/drill",id:"effects/all-effects/drill",title:"drill",description:"Triggered Effect",source:"@site/docs/effects/all-effects/drill.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/drill",permalink:"/effects/all-effects/drill",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/drill.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"damage_victim",permalink:"/effects/all-effects/damage_victim"},next:{title:"elytra_boost_save_chance",permalink:"/effects/all-effects/elytra_boost_save_chance"}},s={},u=[{value:"Triggered Effect",id:"triggered-effect",level:4}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"drill"},(0,l.kt)("inlineCode",{parentName:"h1"},"drill")),(0,l.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,l.kt)("p",null,"Mine blocks behind the initial mined block"),(0,l.kt)("h1",{id:"example-config"},"Example Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: drill\n  args:\n    amount: 4 # The amount of blocks to mine\n    blacklisted_blocks: # The blocks to not mine\n      - obsidian\n    check_hardness: true # If only blocks with the same (or lower) hardness than the mined block can be broken\n    disable_on_sneak: true # If the effect shouldn't activate while sneaking\n    whitelist: [] # The only blocks allowed to mine - Remove if you don't want this\n  ...other config (eg triggers, filters, mutators, etc)\n")))}p.isMDXComponent=!0}}]);