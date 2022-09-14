"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[7913],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6050:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return f}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={title:"Configuring an Effect",sidebar_position:1},c=void 0,s={unversionedId:"effects/configuring-an-effect",id:"effects/configuring-an-effect",title:"Configuring an Effect",description:"Example Effect Config",source:"@site/docs/effects/configuring-an-effect.md",sourceDirName:"effects",slug:"/effects/configuring-an-effect",permalink:"/effects/configuring-an-effect",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/configuring-an-effect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Configuring an Effect",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"minecraft:reset_universal_anger",permalink:"/all-plugins/custom-entity-ai/all-target-goals/reset_universal_anger"},next:{title:"Configuring a Condition",permalink:"/effects/configuring-a-condition"}},u={},f=[{value:"Example Effect Config",id:"example-effect-config",level:2},{value:"Placeholders",id:"placeholders",level:2},{value:"The Sections",id:"the-sections",level:2},{value:"Optional Arguments",id:"optional-arguments",level:2},{value:"<code>chance</code>",id:"chance",level:4},{value:"<code>cooldown</code>",id:"cooldown",level:4},{value:"<code>cost</code>",id:"cost",level:4},{value:"<code>every</code>",id:"every",level:4},{value:"<code>mana_cost</code>",id:"mana_cost",level:4},{value:"<code>delay</code>",id:"delay",level:4},{value:"<code>filters_before_mutation</code>",id:"filters_before_mutation",level:4},{value:"<code>disable_antigrief_check</code>",id:"disable_antigrief_check",level:4},{value:"<code>point_cost</code>",id:"point_cost",level:4},{value:"Effect Chains",id:"effect-chains",level:2},{value:"Shorthand inline chains",id:"shorthand-inline-chains",level:2}],p={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-effect-config"},"Example Effect Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: spawn_particle\nargs:\n  amount: 10\n  chance: 25\n  particle: soul\ntriggers:\n  - mine_block\nfilters:\n  blocks:\n    - diamond_ore\n    - ancient_debris\nconditions: []\nmutators:\n  - id: translate_location\n    args:\n      add_x: 0.5\n      add_y: 0.5\n      add_z: 0.5\n")),(0,r.kt)("p",null,"This is an effect that gives you a 10% chance to spawn 10 soul particles in the middle of a block of diamond ore or ancient debris when it's mined"),(0,r.kt)("h2",{id:"placeholders"},"Placeholders"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Any numeric value (integer, decimal) can be a mathematical expression involving placeholders!")),(0,r.kt)("p",null,"For example, you can specify the chance to be dependent on your y level: as in ",(0,r.kt)("inlineCode",{parentName:"p"},"chance: 100 - %player_y%")," - permanent effects will evaluate the expression on activation, and triggered effects will evaluate it on each trigger. Make sure you only use placeholders with numeric values, as you will get weird behaviour otherwise."),(0,r.kt)("p",null,"There are also extra placeholders passed in that you can use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%trigger_value%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%triggervalue%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%trigger%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%value%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%tv%"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"%v%"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"%t%"),": The value passed by the trigger (e.g. the amount of damage dealt; see ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/all-triggers"},"here"),")."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%victim_health%"),": The victim's health"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%victim_max_health%"),": The victim's max health"),(0,r.kt)("p",null,"If the victim is a player, you can supply any placeholder prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"victim_")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"%victim_player_y%"),") as well."),(0,r.kt)("h2",{id:"the-sections"},"The Sections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"id"),": The effect ID. A list of ID's and their corresponding arguments can be found ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/all-effects"},"here")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"args"),": The arguments. All (triggerable) effects have optional arguments (see below)\ngit add\n",(0,r.kt)("strong",{parentName:"p"},"triggers"),": The list of triggers that activate this effect. If the effect is permanent (see next page) then this section is not applicable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"filters"),": The list of filters against arguments created by the trigger, ie mine_block will provide blocks to be filtered, melee_attack will provide entities to be filtered."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"conditions"),": As well as each effect holder (eg Talisman, Reforge, Enchant) having its own conditions, you can specify a list of effect-specific conditions that work in exactly the same way"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mutators"),": Mutate the data sent to the effect: you can change parameters such as the victim, the location, et cetera. A mutator, like an effect or condition, consists of an ID and arguments."),(0,r.kt)("h2",{id:"optional-arguments"},"Optional Arguments"),(0,r.kt)("h4",{id:"chance"},(0,r.kt)("inlineCode",{parentName:"h4"},"chance")),(0,r.kt)("p",null,"The chance of this effect activating, as a percentage. (defaults to 100)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  chance: 50\n")),(0,r.kt)("h4",{id:"cooldown"},(0,r.kt)("inlineCode",{parentName:"h4"},"cooldown")),(0,r.kt)("p",null,"The cooldown between effect activations, in seconds. (defaults to 0)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  cooldown: 10\n  send_cooldown_message: true # If the cooldown message should be sent\n")),(0,r.kt)("h4",{id:"cost"},(0,r.kt)("inlineCode",{parentName:"h4"},"cost")),(0,r.kt)("p",null,"The cost required to use or activate this effect. ",(0,r.kt)("strong",{parentName:"p"},"Requires Vault.")," (defaults to 0)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  cost: 200\n")),(0,r.kt)("h4",{id:"every"},(0,r.kt)("inlineCode",{parentName:"h4"},"every")),(0,r.kt)("p",null,"Specify the effect to activate every x times. (defaults to always)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  every: 3\n")),(0,r.kt)("h4",{id:"mana_cost"},(0,r.kt)("inlineCode",{parentName:"h4"},"mana_cost")),(0,r.kt)("p",null,"The mana cost required to use or activate this effect. ",(0,r.kt)("strong",{parentName:"p"},"Requires Aurelium Skills.")," (defaults to 0)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  mana_cost: 10\n")),(0,r.kt)("h4",{id:"delay"},(0,r.kt)("inlineCode",{parentName:"h4"},"delay")),(0,r.kt)("p",null,"The amount of ticks to wait before executing the effect. (defaults to 0)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  delay: 20\n")),(0,r.kt)("h4",{id:"filters_before_mutation"},(0,r.kt)("inlineCode",{parentName:"h4"},"filters_before_mutation")),(0,r.kt)("p",null,"By default, filters are ran after mutation - set this to true if filters should be ran on the un-mutated data. (defaults to false)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  filters_before_mutation: true\n")),(0,r.kt)("h4",{id:"disable_antigrief_check"},(0,r.kt)("inlineCode",{parentName:"h4"},"disable_antigrief_check")),(0,r.kt)("p",null,"By default, the antigrief plugins on your server are checked. Set this to true to disable that. (defaults to false)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  disable_antigrief_check: true\n")),(0,r.kt)("h4",{id:"point_cost"},(0,r.kt)("inlineCode",{parentName:"h4"},"point_cost")),(0,r.kt)("p",null,"-The point cost required to use or activate this effect, looks like this in config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  point_cost:\n    cost: 100 * %player_y%\n    type: g_souls\n")),(0,r.kt)("h2",{id:"effect-chains"},"Effect Chains"),(0,r.kt)("p",null,"Effect chains are groups of effects that can be executed together. This is very useful if you want to create a chance-based effect with several components: chance is calculated independently on each trigger, so without chains, particles and messages could send when the effects don't activate, and vice-versa."),(0,r.kt)("p",null,"Effect chains are also useful to re-use more complex logic, via custom arguments that you can specify.\nThese work like regular placeholders, and you reference them in your chains with ",(0,r.kt)("inlineCode",{parentName:"p"},"%<id>%"),", for example ",(0,r.kt)("inlineCode",{parentName:"p"},"%size%")," if you had a size argument."),(0,r.kt)("p",null,"You can create a chain in config, under the 'chains' section - which should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"chains:\n  - id: <chain id>\n    effects:\n      - <effect 1>\n      - <effect 2>\n      - <effect 3>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Effects in chains do not need to specify triggers as they are triggered by the run_chain effect")),(0,r.kt)("p",null,"You can add or remove as many chains as you want. Then, if you want to call a chain, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"run_chain")," effect, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: run_chain\nargs:\n  chance: 50 * (%player_health% / 20) # Example to demonstrate placeholders in config\n  cooldown: 2\n  chain: <chain id>\ntriggers:\n  - melee_attack\n  - bow_attack\n  - trident_attack\nfilters:\n  entities:\n    - zombie\n    - creeper charged\n    - skeleton\n")),(0,r.kt)("p",null,"Custom arguments can be specified like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: run_chain\nargs:\n  chain: <chain id>\n  chain_args:\n    strength: %player_y% * 100 # You can put anything you want, doesn't only have to be numbers - you can use strings too!\n    ... add whichever arguments you use in your chain\n")),(0,r.kt)("p",null,"If you don't want to re-use chains, or if you prefer having them specified directly under the effect, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"run_chain_inline")," effect instead, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"id: run_chain_inline\nargs:\n  every: 3\n  chain:\n    - effects:\n        - <effect 1>\n        - <effect 2>\n        - <effect 3>\ntriggers:\n  - mine_block\n")),(0,r.kt)("p",null,"Inline chains also support custom arguments, just like regular chains."),(0,r.kt)("p",null,"Effects in chains run isolated, so applying a mutator to one effect in the chain will apply it only to that effect - however, you can specify a mutator to the parent effect (",(0,r.kt)("inlineCode",{parentName:"p"},"run_chain")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"run_chain_inline"),") which will be applied to all effects in the chain. The same works for delays, e.g. if an effect in a chain has a delay of 2, it won't hold up other effects down the chain."),(0,r.kt)("p",null,"Effect chains also support several run types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"normal"),": All effects in the chain will be ran, one after another"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cycle"),": Only one effect will be ran, and it cycles through each effect each time the chain is ran"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"random"),": Only one effect will be ran, chosen at random on each execution")),(0,r.kt)("p",null,"To specify the run type, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"run-type")," argument into config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id: run_chain_inline\nargs:\n  run-type: cycle\n  chain:\n    - effects:\n        - <effect 1>\n        - <effect 2>\n        - <effect 3>\ntriggers:\n  - alt_click\n")),(0,r.kt)("p",null,"So in this example, effect 1 will be ran the first time, next time effect 2, then effect 3, then back to effect 1 (and so on)."),(0,r.kt)("h2",{id:"shorthand-inline-chains"},"Shorthand inline chains"),(0,r.kt)("p",null,"It can be feel quite cumbersome to have a lot of inline chains filling up your configs. To fix this, there's a shorthand syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"triggers:\n  - alt_click\neffects:\n  - <effect 1>\n  - <effect 2>\n  - <effect 3>\nargs:\n  run-type: random\n  chance: 30\n... filters, mutators, etc\n")),(0,r.kt)("p",null,"This is an alternative way of configuring your effects; you don't specify a top-level effect ID, instead you specify a list of effects to be called. This can be thought of as being more trigger-centric; multiple triggers to multiple effects straight away, no worrying about the underlying inline chain."),(0,r.kt)("p",null,"These work exactly like inline chains (they are inline chains), so everything is still supported; run-type, custom arguments, et cetera."))}d.isMDXComponent=!0}}]);