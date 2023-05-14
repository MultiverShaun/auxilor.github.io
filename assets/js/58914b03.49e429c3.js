"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[5874],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,u=f(e,["components","mdxType","originalType","parentName"]),p=l(t),m=c,d=p["".concat(i,".").concat(m)]||p[m]||s[m]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=p;var f={};for(var i in n)hasOwnProperty.call(n,i)&&(f[i]=n[i]);f.originalType=e,f.mdxType="string"==typeof e?e:c,a[1]=f;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2719:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return f},metadata:function(){return l},toc:function(){return s}});var r=t(7462),c=t(3366),o=(t(7294),t(3905)),a=["components"],f={},i="dont_consume_xp_chance",l={unversionedId:"effects/all-effects/dont_consume_xp_chance",id:"effects/all-effects/dont_consume_xp_chance",title:"dont_consume_xp_chance",description:"Permanent Effect",source:"@site/docs/effects/all-effects/dont_consume_xp_chance.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/dont_consume_xp_chance",permalink:"/effects/all-effects/dont_consume_xp_chance",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/effects/all-effects/dont_consume_xp_chance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dont_consume_lapis_chance",permalink:"/effects/all-effects/dont_consume_lapis_chance"},next:{title:"drill",permalink:"/effects/all-effects/drill"}},u={},s=[{value:"Permanent Effect",id:"permanent-effect",level:4}],p={toc:s};function m(e){var n=e.components,t=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dont_consume_xp_chance"},(0,o.kt)("inlineCode",{parentName:"h1"},"dont_consume_xp_chance")),(0,o.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,o.kt)("p",null,"Prevents consuming xp when enchanting items"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: dont_consume_xp_chance\n  args:\n    chance: 20 # The chance to not consume xp \n")))}m.isMDXComponent=!0}}]);