(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[9987],{40063:(t,e,o)=>{"use strict";o.d(e,{Z:()=>d});let s={};const d={bind:function(t,e){let o,d;t.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{t.dataset.justBoundClickOutsideHandler=!1}),100);const i=t=>{d=!1,(t=>t&&t.clientX>window.innerWidth)(t)?d=!0:o=t.target},n=s=>{d||(e.modifiers.bubble||!t.contains(o)&&!t.contains(s.target)&&t!==o&&t!==s.target&&"true"!==t.dataset.justBoundClickOutsideHandler)&&e.value(s)};t.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),t.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),s[t.dataset.clickOutsideMouseupHandlerId]=n,s[t.dataset.clickOutsideMousedownHandlerId]=i,document.addEventListener("mouseup",n),document.addEventListener("mousedown",i)},unbind:function(t){document.removeEventListener("mouseup",s[t.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",s[t.dataset.clickOutsideMousedownHandlerId]),delete s[t.dataset.clickOutsideMouseupHandlerId],delete s[t.dataset.clickOutsideMousedownHandlerId],delete t.dataset.clickOutsideMouseupHandlerId,delete t.dataset.clickOutsideMousedownHandlerId,delete t.dataset.justBoundClickOutsideHandler}}},84919:(t,e,o)=>{(t.exports=o(23645)(!1)).push([t.id,"\n.dropdown[data-v-5546f4b6] { display: block;\n} /* Override general stylesheet dropdown styling for display: block, but move to this when refactor complete; */\n.dropdown-hide[data-v-5546f4b6] { opacity: 0;\n}\n.dropdown-visible .icon[data-v-5546f4b6] { opacity: 0.8;\n}\n.open-enter-active[data-v-5546f4b6], .open-leave-active[data-v-5546f4b6] { transition: opacity 0.1s ease;\n} /* Consolidate this with center nav and other animations? */\n.open-enter[data-v-5546f4b6], .open-leave-to[data-v-5546f4b6] { opacity: 0;\n}\n\n",""])},15430:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTggMjJjLTQuNDExIDAtOCAzLjU4OS04IDhzMy41ODkgOCA4IDggOC0zLjU4OSA4LTgtMy41ODktOC04LTh6TTUyIDIyYy00LjQxMSAwLTggMy41ODktOCA4czMuNTg5IDggOCA4IDgtMy41ODkgOC04LTMuNTg5LTgtOC04ek0zMCAyMmMtNC40MTEgMC04IDMuNTg5LTggOHMzLjU4OSA4IDggOCA4LTMuNTg5IDgtOC0zLjU4OS04LTgtOHoiPjwvcGF0aD48L3N2Zz4K"},69987:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>i});var s=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideDropdown,expression:"hideDropdown"}],staticClass:"more",class:{"shift-to-left":t.shiftToLeft,"dropdown-visible":t.active,"more-dash":t.onDash},attrs:{"data-test":"more-container"}},[t._t("moreToggle",(function(){return[e("div",{staticClass:"icon-wrapper more-toggle",class:{"dash-icon-wrapper":t.onDash,"u--touch-hide":t.onDash},attrs:{"data-test":"more-toggle","data-ob":t.dataOb},on:{click:function(e){return t.$emit("toggle",!t.active)}}},[e("inline-svg",{staticClass:"icon icon-ellipsis more-icon",class:{"dash-icon":t.onDash},attrs:{src:o(15430)}})],1)]})),t._v(" "),e("transition",{attrs:{name:"open"}},[t.active?e("div",{ref:"dropdown",staticClass:"dropdown more-dropdown",class:{"app dash-dropdown nipple nipple-top-left":t.onDash},attrs:{"data-test":"dropdown"}},[t._t("header"),t._v(" "),t._t("upsell"),t._v(" "),e("ul",{staticClass:"dropdown-list",class:{"dropdown-hide":t.$slots.upsell},attrs:{"data-test":"dropdown-options"}},[t._t("default")],2)],2):t._e()])],2)};s._withStripped=!0;const d={doNotWaitForMount:!0,name:"Dropdown",directives:{ClickOutside:o(40063).Z},props:{dataOb:{type:String,default:""},active:{type:Boolean,default:!1},onDash:{type:Boolean,default:!1}},data:()=>({shiftToLeft:!1}),watch:{active(t){t?(this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded),window.addEventListener("resize",this.debouncedDropdownShift)):window.removeEventListener("resize",this.debouncedDropdownShift)}},created(){this.$e.listenTo(m,"globalEvent:esc",this.hideDropdown),this.$e.listenTo(m,"globalEvent:toggle:bottom-right",this.hideDropdown)},destroyed(){this.$e.stopListening(m,"globalEvent:esc",this.hideDropdown),this.$e.stopListening(m,"globalEvent:toggle:bottom-right",this.hideDropdown),window.removeEventListener("resize",this.shouldDropdownShiftToLeft)},methods:{hideDropdown(t){this.active&&(this.$touch&&t.stopPropagation(),this.$emit("toggle",!1))},shiftDropdownLeftIfNeeded(){const t=this.$refs.dropdown&&this.$refs.dropdown.getBoundingClientRect();if(!t)return;const e=window.innerWidth-t.right;this.shiftToLeft=!(e>=135)},debouncedDropdownShift(){clearTimeout(this.debounce),this.debounce=setTimeout((()=>{this.shiftToLeft=!1,this.$nextTick(this.shiftDropdownLeftIfNeeded)}),200)}}};o(74101);const i=(0,o(51900).Z)(d,s,[],!1,null,"5546f4b6",null).exports},74101:(t,e,o)=>{var s=o(84919);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,o(45346).Z)("7278b9a8",s,!1,{ssrId:!0})}}]);