(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1077,2039],{99437:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(20144),i=n(88026),s=n(51726),a=n.n(s),r=n(34952),c=n(7838),d=n(81452);let l={};const u={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),l[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",l[e.dataset.mobileClickHandlerId]),delete l[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};var h=n(28692);o.ZP.use(i.Z,{name:"unreactive"}),o.ZP.use(a()),o.ZP.use(r.InlineSvgPlugin),o.ZP.use(h.og),o.ZP.prototype.$xhr=d.Z,o.ZP.prototype.$e=c.Z,o.ZP.directive("mobile-click",u),new o.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),o.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const f=o.ZP},42223:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={data:()=>({componentsMounted:{}}),unreactive:()=>({uid:m.utils.shortId()}),beforeCreate(){const e=this.$options.components;Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n&&(e[t]=function(){this.$set(this.componentsMounted,t,!1);const e=`${t}:${this.uid}:mounted`,o=()=>this.componentsMounted[t]=!0;return this.$e.$once(e,o),n(arguments).then((n=>{const i=n.default;return i&&i.doNotWaitForMount&&(this.$delete(this.componentsMounted,t),this.$e.$off(e,o)),n}))}.bind(this))}))},mounted(){if(Object.keys(this.componentsMounted).length){const e=this.$watch("componentsMounted",(t=>{Object.values(t).every((e=>e))&&(this.onAllComponentsMounted(),e())}),{deep:!0,immediate:!0})}else this.onAllComponentsMounted()},methods:{getContextUid(){return this.$vnode&&this.$vnode.context&&this.$vnode.context.uid||""},onAllComponentsMounted(){this.widgetId?m.widgetManager.appReady(this.widgetId):this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`)}}}},40531:(e,t,n)=>{"use strict";n.d(t,{Fl:()=>s,Jr:()=>c,ax:()=>r});var o=n(99437);const i=new o.Z.observable({}),s=new Proxy(i,{get:(e,t)=>(e.hasOwnProperty(t)||o.Z.set(e,t,m.models.customization.getComputedSetting(t)),e[t]),set:()=>(console.warn('Computed settings cannot be set by reactiveCustomization. Instead set persistent settings with "persistent"'),!1)}),a=new o.Z.observable({}),r=new Proxy(a,{get:(e,t)=>(e.hasOwnProperty(t)||o.Z.set(e,t,m.models.customization.get(t)),e[t]),set:(e,t,n)=>(m.models.customization.save(t,n),o.Z.set(e,t,n),!0)});function c(e={}){Object.entries(e).forEach((([e,t])=>o.Z.set(a,e,t))),m.models.customization.save(e)}m.models.customization.on("change",(e=>{e&&("balanceModeStr"in e.changed&&Object.entries(m.models.customization.attributes).forEach((([e,t])=>o.Z.set(i,e,t))),Object.entries(e.changed).forEach((([e,t])=>{i[e]=m.models.customization.getComputedSetting(e),o.Z.set(a,e,t)})))})),m.on("customization:update",(e=>{e.forEach((e=>{const t=m.models.customization.getComputedSetting(e);o.Z.set(i,e,t),o.Z.set(a,e,t)}))}))},2039:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o={focus:{name:"Focus",icon:n(29459)},search:{name:"Search",feature:"search in center",icon:n(58646)}}},51077:(e,t,n)=>{"use strict";n.r(t);var o=n(99437),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"region center-below",attrs:{"data-test":"region-center-below"}},[t("transition",{attrs:{name:"fade-deep",mode:"out-in",duration:"500"},on:{"after-enter":e.afterEnter}},[e.centerBelowVisible?t("div",{key:e.searchVisible,staticClass:"center-below-app-wrapper"},[e.activeApp?t(e.searchVisible?"BigSearch":"Focus",{tag:"component",scopedSlots:e._u([{key:"nav",fn:function(){return[e.navVisible?t("quick-nav",{attrs:{options:e.centerBelowMetadata,region:"center-below",active:e.activeApp},on:{"switch-to":e.switchTo}}):e._e()]},proxy:!0}],null,!1,3773440395)}):e._e()],1):e._e()])],1)};i._withStripped=!0;var s=n(42223),a=n(40531),r=n(60083),c=n(2039);const d={name:"CenterBelow",components:{QuickNav:()=>n.e(9030).then(n.bind(n,9030)),Focus:()=>Promise.all([n.e(3064),n.e(9273),n.e(9475)]).then(n.bind(n,9273)),BigSearch:()=>Promise.all([n.e(9102),n.e(1781)]).then(n.bind(n,91781))},mixins:[s.Z],unreactive:()=>({widgetId:"region-center-below",centerBelowMetadata:c.Z}),data:()=>({centerBelowVisible:!localStorage.getItem("pomodoro-showing")||"false"===localStorage.getItem("pomodoro-showing")}),computed:{activeApp(){return this.searchVisible?"search":this.focusVisible?"focus":""},searchVisible:()=>a.ax.centerBelowNavVisible&&a.ax.searchVisible,focusVisible:()=>a.Fl.focusVisible,navVisible(){return a.ax.centerBelowNavVisible&&!this.$touch},enrolledInSearchExperiment:()=>r.Z.experiments.some((e=>"search_in_center"===e.variantName))},watch:{enrolledInSearchExperiment:{handler(){if(this.enrolledInSearchExperiment){const e={centerBelowNavVisible:!0,searchVisible:!0,focusVisible:!1};Object.assign(m.models.customization.persistentSettings.defaultIfNotSet,e),m.trigger("customization:update",Object.keys(e))}},immediate:!0}},created(){this.$e.listenTo(m,"centerBelow:show",this.setCenterBelowVisible)},destroyed(){this.$e.stopListening(m,"centerBelow:show",this.setCenterBelowVisible)},methods:{afterEnter(){m.trigger("centerBelow:afterEnter")},setCenterBelowVisible(e){this.centerBelowVisible=e},switchTo(e){(0,a.Jr)({focusVisible:"focus"===e,searchVisible:"search"===e})}}};n(11339);const l=(0,n(51900).Z)(d,i,[],!1,null,"d2f4c058",null).exports;new o.Z({render:e=>e(l)}).$mount(".region.center-below")},69682:(e,t,n)=>{(e.exports=n(23645)(!1)).push([e.id,"\n.center-below-app-wrapper[data-v-d2f4c058] { width: 100%;\n}\n/*\n\tfade transition needs to occur on the same element as the backdrop-filter element (.search) or else the backdrop filter will not transition\n\tAny ancestor elements to .search with less than 1 opacity should be avoided else the transition will appear broken.\n\tOnly the .search element itself can receive less than 1 opacity for the backdrop filter to render with reduced opacity.\n\n\tSo in order to fade in/out elements in this region, we need to fade them all independently\n */\n.fade-deep-enter-active .focuses[data-v-d2f4c058],\n.fade-deep-leave-active .focuses[data-v-d2f4c058],\n.fade-deep-enter-active[data-v-d2f4c058] .side-col.left,\n.fade-deep-leave-active[data-v-d2f4c058] .side-col.left,\n.fade-deep-enter-active[data-v-d2f4c058] .search .search-form,\n.fade-deep-leave-active[data-v-d2f4c058] .search .search-form ,\n.fade-deep-enter-active[data-v-d2f4c058] .search .backdrop-filter,\n.fade-deep-leave-active[data-v-d2f4c058] .search .backdrop-filter { transition: opacity 0.5s ease;\n}\n.fade-deep-enter .focuses[data-v-d2f4c058],\n.fade-deep-leave-to .focuses[data-v-d2f4c058],\n.fade-deep-enter[data-v-d2f4c058] .side-col.left,\n.fade-deep-leave-to[data-v-d2f4c058] .side-col.left,\n.fade-deep-enter[data-v-d2f4c058] .search .search-form,\n.fade-deep-leave-to[data-v-d2f4c058] .search .search-form,\n.fade-deep-enter[data-v-d2f4c058] .search .backdrop-filter,\n.fade-deep-leave-to[data-v-d2f4c058] .search .backdrop-filter { opacity: 0;\n}\n\n",""])},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var s=(n=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}));return[o].concat(a).concat([s]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},29459:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTY0IDYxYTMgMyAwIDAxLTMgM2gtOWEzIDMgMCAxMTAtNmg5YTMgMyAwIDAxMyAzek02MSAwYTMgMyAwIDAxMyAzdjlhMyAzIDAgMTEtNiAwVjNhMyAzIDAgMDEzLTN6TTMgNjRhMyAzIDAgMDEtMy0zdi05YTMgMyAwIDExNiAwdjlhMyAzIDAgMDEtMyAzek0zIDBhMyAzIDAgMDAtMyAzdjlhMyAzIDAgMTA2IDBWNmg2YTMgMyAwIDEwMC02SDN6Ii8+PHBhdGggZD0iTTY0IDYxYTMgMyAwIDExLTYgMHYtOWEzIDMgMCAwMTYgMHY5ek02MSAwYTMgMyAwIDExMCA2aC05YTMgMyAwIDExMC02aDl6TTMgNjRhMyAzIDAgMTEwLTZoOWEzIDMgMCAxMTAgNkgzeiIvPjxwYXRoIGQ9Ik0zMiAyMmMtNS41MjMgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3NyAxMCAxMCAxMCAxMC00LjQ3NyAxMC0xMC00LjQ3Ny0xMC0xMC0xMHpNMTYgMzJjMC04LjgzNyA3LjE2My0xNiAxNi0xNnMxNiA3LjE2MyAxNiAxNi03LjE2MyAxNi0xNiAxNi0xNi03LjE2My0xNi0xNnoiLz48L3N2Zz4="},58646:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTI1IDBDMTEuMTkzIDAgMCAxMS4xOTMgMCAyNXMxMS4xOTMgMjUgMjUgMjVjNS44MzMgMCAxMS4yLTEuOTk4IDE1LjQ1My01LjM0N2wxNS40MzkgMTUuNDM5YTMgMyAwIDEwNC4yNDItNC4yNDNMNDQuNjkyIDQwLjQwNkEyNC44OTMgMjQuODkzIDAgMDA1MCAyNUM1MCAxMS4xOTMgMzguODA3IDAgMjUgMHpNNiAyNUM2IDE0LjUwNyAxNC41MDcgNiAyNSA2czE5IDguNTA3IDE5IDE5LTguNTA3IDE5LTE5IDE5UzYgMzUuNDkzIDYgMjV6Ii8+PC9zdmc+"},51900:(e,t,n)=>{"use strict";function o(e,t,n,o,i,s,a,r){var c,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),o&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=c):i&&(c=r?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(e,t){return c.call(t),l(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:d}}n.d(t,{Z:()=>o})},11339:(e,t,n)=>{var o=n(69682);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),(0,n(45346).Z)("0317fec2",o,!1,{ssrId:!0})},45346:(e,t,n)=>{"use strict";function o(e,t){for(var n=[],o={},i=0;i<t.length;i++){var s=t[i],a=s[0],r={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};o[a]?o[a].parts.push(r):n.push(o[a]={id:a,parts:[r]})}return n}n.d(t,{Z:()=>f});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,d=!1,l=function(){},u=null,m="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,i){d=n,u=i||{};var a=o(e,t);return p(a),function(t){for(var n=[],i=0;i<a.length;i++){var r=a[i];(c=s[r.id]).refs--,n.push(c)}for(t?p(a=o(e,t)):a=[],i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete s[c.id]}}}}function p(e){for(var t=0;t<e.length;t++){var n=e[t],o=s[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(g(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(g(n.parts[i]));s[n.id]={id:n.id,refs:1,parts:a}}}}function M(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function g(e){var t,n,o=document.querySelector("style["+m+'~="'+e.id+'"]');if(o){if(d)return l;o.parentNode.removeChild(o)}if(h){var i=c++;o=r||(r=M()),t=y.bind(null,o,i,!1),n=y.bind(null,o,i,!0)}else o=M(),t=A.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var v,b=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function A(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(m,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);