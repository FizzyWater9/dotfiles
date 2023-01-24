"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[5711],{85711:(t,e,o)=>{o.r(e),o.d(e,{default:()=>g});var c=o(99437),a=o(31624);const i=new(c.Z.extend({name:"FocusDataService",mixins:[a.X],unreactive:()=>({type:"focus",mode:localStorage.getItem("token")?"sync":"cache"}),defaultPath:"focus"}));var s=o(2770);const d=c.Z.extend({name:"FocusModel",mixins:[s.Z],data:()=>({id:null,archived:!1,completed:!1,createdDate:m.now(),focus:null,forDate:null,todoId:null,props:["focus","completed","archived","forDate","createdDate","todoId"]}),methods:{updateData(t){s.Z.methods.updateData.call(this,t),this.completed=!!t.completed}}});var n=o(94234),u=o(20144),l=o(40531);const r=new(u.ZP.extend({name:"AutoFocusManager",data:()=>({activeFocus:null}),computed:{autoFocusEnabled:()=>l.ax.autoFocus&&m.conditionalFeatures.featureEnabled("pinfocus")},watch:{autoFocusEnabled:{handler(t){t?this.getTopTodo().then((t=>this.activeFocus=this.createFocusFromTodo(t))):this.activeFocus=null},immediate:!0},"activeFocus.focus"(t){this.activeFocus&&m.trigger("todo:set:title",this.activeFocus.todoId,t)},"activeFocus.completed"(t){this.activeFocus&&m.trigger("todo:set:done",this.activeFocus.todoId,t)}},created(){m.on("todo:globalChange",this.onTodoChange)},destroyed(){m.off("todo:globalChange",this.onTodoChange)},methods:{getTopTodo:()=>m.widgetManager.getWidgetAsync("todo").then((t=>t.getTopTodo())),onTodoChange(...t){var e,o,c;const a=t[0];if(t.find((t=>t&&(t.ignoreRender||t.silent)))||!this.autoFocusEnabled||null==a||!a.changed||!Object.keys(a.changed).length||!1===(null===(e=a.changed)||void 0===e?void 0:e.isLoading))return;const i=(null===(o=a.changed)||void 0===o?void 0:o.completedDate)||(null===(c=a.changed)||void 0===c?void 0:c.modifiedServer);this.getTopTodo().then((t=>{var e,o;t?this.activeFocus=this.createFocusFromTodo(t):null!==(e=this.activeFocus)&&void 0!==e&&e.todoId&&(a.get("id")||a.id).includes(null===(o=this.activeFocus)||void 0===o?void 0:o.todoId)&&(this.activeFocus.completed=a.get("done"),i||(this.activeFocus=null))}))},createFocusFromTodo(t){if(!t)return null;let e=new d;return e.updateData({focus:t.get("title"),archived:!1,completed:t.get("done"),createdDate:m.now(),id:m.utils.uuidv4(),todoId:t.get("id")||t.id,forDate:m.utils.getDateString()}),e}}}));var h=o(81405);const v=new(o(97835).Z)("tab.focus.emptySave",.01),g=new(c.Z.extend({name:"FocusCollection",mixins:[n.FZ,n.mX],unreactive:()=>({type:"focus",Model:d,dataService:i,newModel:null,analytics:new h.ZP({feature:"focus"})}),computed:{emptyFocus(){return!this.activeFocus.focus},activeFocusInCollection(){const t=m.utils.getDateString(),e=Object.values(this.data.items).filter((e=>!e.archived&&e.forDate===t)).sort(((t,e)=>e.createdDate-t.createdDate));return e.length?e[0]:null},activeFocus(){return r.activeFocus||this.activeFocusInCollection||this.newModel},loaded(){return this.data.loaded}},created(){this.instantiateNewModel(),m.on("focus:pin",this.onFocusPin),m.on("todo:globalChange",this.onTodoChange),m.on("newDay",this.archiveAll)},destroyed(){m.off("focus:pin",this.onFocusPin),m.off("todo:globalChange",this.onTodoChange),m.off("newDay",this.archiveAll)},methods:{instantiateNewModel(){this.newModel=new this.Model,this.newModel.copyProperties()},async save(){const t=this.emptyFocus;var e;r.activeFocus||(this.activeFocus.focus||this.activeFocus.editProps.focus?await this[this.emptyFocus?"add":"update"](this.activeFocus):v.warn("Focus create attempted with no focus",{userId:localStorage.getItem("userId"),focus:this.activeFocus.focus,editPropsFocus:null===(e=this.activeFocus.editProps)||void 0===e?void 0:e.focus,stackTrace:m.utils.getStackTrace()})),t&&this.instantiateNewModel(),this.analytics.capture("focus "+(t?"add":"edit"),{position:localStorage.getItem("pomodoro-showing")?"pomodoro":"default"}),this.activeFocus.commitChanges(),this.activeFocus.todoId&&m.trigger("todo:set:title",this.activeFocus.todoId,this.activeFocus.focus)},archive(){this.analytics.capture("focus clear",{completed:this.activeFocus.completed}),r.activeFocus?l.ax.autoFocus=!1:n.FZ.methods.archive.call(this,this.activeFocus)},archiveAll(){Object.values(this.data.items).forEach((t=>this.archive(t)))},toggleComplete(){const t=this.activeFocus.completed;this.analytics.capture("focus "+(t?"uncomplete":"complete"),Object.assign({position:localStorage.getItem("pomodoro-showing")?"pomodoro":"default"},t?{}:{autofocus:r.autoFocusEnabled})),this.activeFocus.completed=!t,r.activeFocus||this.dataService.update(this.activeFocus.id,{completed:!t}).then((()=>{this.activeFocus.todoId&&m.trigger("todo:set:done",this.activeFocus.todoId,!t)})).catch((e=>{throw this.activeFocus.completed=t,e}))},onFocusPin(t){l.ax.autoFocus=!1;let e=r.createFocusFromTodo(t);e&&e.focus?(e.copyProperties(),this.add(e)):v.warn("Focus pin attempted with no focus",{userId:localStorage.getItem("userId"),stackTrace:m.utils.getStackTrace()})},onTodoChange(...t){var e,o;const c=t[0];if(t.find((t=>t&&(t.ignoreRender||t.silent)))||!this.activeFocus||!Object.keys(this.data.items).length||null==c||!c.changed)return;let a=Object.values(this.data.items).find((t=>{var e;return t.todoId&&t.todoId===((null===(e=c.get)||void 0===e?void 0:e.call(c,"id"))||(null==c?void 0:c.id))}));if(!a)return;if(null!==(e=t[0])&&void 0!==e&&null!==(o=e.changed)&&void 0!==o&&o.deleted)return void this.archive();const i=c.get("done"),s=c.get("title");a.completed===i&&a.focus===s||(a.completed=i,a.focus=s,this.dataService.update(a.id,{completed:i,focus:s}))}}}))}}]);