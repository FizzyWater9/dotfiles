(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[676],{13117:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n.app[data-v-0c77ae53] { --top: auto; --bottom: auto; --right: auto; --left: auto; height: auto; min-height: auto; width: var(--width); position: absolute; top: var(--top); bottom: var(--bottom); right: var(--right); left: var(--left); display: flex; flex-direction: column; align-items: stretch; background-color: var(--color-bg); border-radius: var(--border-radius); transition: top 0.2s ease, right 0.2s ease;\n}\n.nipple-top-left[data-v-0c77ae53]:after, .nipple-bottom-left[data-v-0c77ae53]:after { left: var(--nipple-displacement);\n}\n.nipple-top-right[data-v-0c77ae53]:after, .nipple-bottom-right[data-v-0c77ae53]:after { right: var(--nipple-displacement);\n}\n\t/* This needs to be in this component (or general stylesheet) or else the transition won't work when the component is async. I don't know why. */\n.slide-down-fade-enter-active[data-v-0c77ae53], .slide-down-fade-leave-active[data-v-0c77ae53] { transition: transform 0.2s ease, opacity, 0.2s ease, right 0s, top 0s;\n} /* right 0s, top 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.slide-down-fade-enter[data-v-0c77ae53], .slide-down-fade-leave-to[data-v-0c77ae53] { opacity: 0; transform: translateY(-3px);\n}\n@media screen and (max-width: 450px) {\n.app.slide-down-fade-enter-active[data-v-0c77ae53], .app.slide-down-fade-leave-active[data-v-0c77ae53] { transition: transform 0.2s ease, opacity, 0.2s ease, right 0s, top 0s;\n} /* right 0s, top 0s is to fix a case where the app transitions right when opening if it is flipping horizontal direction */\n.app.slide-down-fade-enter[data-v-0c77ae53], .app.slide-down-fade-leave-to[data-v-0c77ae53] { opacity: 0; transform: translateY(calc(var(--app-translate-amount) * -1));\n}\n}\n\n",""])},45759:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>p});var s=function(){var t=this;return(0,t._self._c)("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],ref:"app",staticClass:"app popup nipple",class:["display-"+t.positionArray[0],"display-"+t.positionArray[1],t.nippleClass],style:[{"--width":t.width+"px","--nipple-displacement":t.shiftedNippleDisplacement+"px"},t.positionCss],attrs:{"data-test":"app-popup"}},[t._t("default")],2)};s._withStripped=!0;var a=i(40063),o=i(65550);const n={name:"AppPopup",doNotWaitForMount:!0,directives:{clickOutside:a.Z},unreactive:()=>({halfNippleWidth:m.constants.nippleWidthPx/2}),props:{nippleDisplacement:{type:Number,default:m.constants.nippleDisplacementPx},width:{type:Number,default:300},viewManager:{type:Object,default:null},position:{type:String,required:!0},detailedPosition:{type:Object,default:null},region:{type:[String,Array],required:!0}},data:()=>({flipHorizontalPosition:!1,shiftByPx:0}),computed:{positionArray(){const t=this.position.split("-");return this.flipHorizontalPosition&&(t[1]=m.utils.getOppositePosition(t[1])),t},nippleClass(){return["nipple"].concat(this.positionArray.map(m.utils.getOppositePosition)).join("-")},positionCss(){const t=this.detailedPosition||{[m.utils.getOppositePosition(this.positionArray[0])]:"100%",[m.utils.getOppositePosition(this.positionArray[1])]:"50%"};return Object.entries(t).reduce(((t,[e,i])=>(["left","right"].includes(e)&&("number"==typeof i?i=i-(this.flipHorizontalPosition?this.width-2*this.nippleDisplacement:0)-this.shiftByPx:"string"==typeof i&&(i=`calc(${i} - ${this.nippleDisplacement-this.shiftByPx}px)`)),t["--"+e]="number"==typeof i?i+"px":i,t)),{})},shiftedNippleDisplacement(){return this.nippleDisplacement-this.halfNippleWidth-this.shiftByPx}},mounted(){this.flipHorizontalPosition=this.shouldFlipHorizontalPosition(),this.$nextTick((()=>this.shiftByPx=this.getShiftPx())),this.hideOverlappingWidgets()},created(){o.Z.registerEventListener("closeApp","keyup",27,this.close),window.addEventListener("resize",this.onWindowResize)},destroyed(){o.Z.removeEventListener("closeApp","keyup",27),window.removeEventListener("resize",this.onWindowResize),m.widgetManager.refocusOverlap(this.region)},methods:{onClickOutside(t){this.viewManager?this.viewManager.awaitCloseConfirmationIfNeeded().then((()=>this.$emit("clickOutside",t))):this.$emit("close")},onWindowResize(){this.disableSmoothReflow=!0,clearTimeout(this.debouceResize),this.debouceResize=setTimeout((()=>{this.disableSmoothReflow=!1}),500)},shouldFlipHorizontalPosition(){const t=this.$refs.app&&this.$refs.app.getBoundingClientRect();return!!t&&t.left<0},getShiftPx(){const t=this.$refs.app&&this.$refs.app.getBoundingClientRect();return t?"left"===this.positionArray[1]?Math.max(t.right-(window.innerWidth-m.constants.dashboardSidePaddingPx),0):Math.max(-1*(t.left-m.constants.dashboardSidePaddingPx),0):0},close(){this.$emit("close")},hideOverlappingWidgets(){var t,e;let i=(null===(t=this.$refs.view)||void 0===t?void 0:t.scrollHeight)||(null===(e=this.$refs.loading)||void 0===e?void 0:e.scrollHeight);i&&m.widgetManager.unfocusOverlap(this.region,i)}}};i(82165);const p=(0,i(51900).Z)(n,s,[],!1,null,"0c77ae53",null).exports},82165:(t,e,i)=>{var s=i(13117);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,i(45346).Z)("dd595c4e",s,!1,{ssrId:!0})}}]);