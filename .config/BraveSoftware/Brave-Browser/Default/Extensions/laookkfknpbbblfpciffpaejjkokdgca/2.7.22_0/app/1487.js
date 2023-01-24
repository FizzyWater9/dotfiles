"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[1487],{91487:(e,t,a)=>{a.r(t),a.d(t,{makeNotesStore:()=>g,useNotesStore:()=>p});var s=a(28692);class r{constructor(e){this.id=e.id,this.body=e.body,this.updatedDate=e.updatedDate,this.deleted=e.deleted,e.draft&&(this.draft=e.draft)}}class d{constructor(e){this.dataService=e}get({success:e,failure:t,queryParams:a={},mode:s}){this.dataService.get({success:e,failure:t,mode:s,queryParams:a})}create(e){return this.dataService.create(e.id,e)}update(e,t){return this.dataService.update(e,t)}}var i=a(42935);const n=m.workers.serviceWorker.bus;class o{constructor(e,{queryParams:t={},path:a="",mode:s="sync"}={}){this.queryParams={get:{},update:{}},this.type=e,Object.assign(this.queryParams,t),this.path=a,this.mode=s}get({path:e=this.path||this.type,mode:t=this.mode,success:a,failure:s,queryParams:r={}}){e+=this.buildQueryString(this.queryParams.get,r);const d=[this.type,{path:e,env:this.getEnv(),mode:t}],i=this.type+":refreshed";"server"===t?n.sendMessage({handler:"get",args:d}).then(a).catch(s):n.sendRecurringCrossTabMessage({msgId:i,handler:"get",args:d,success:a,failure:s})}create(e,t,{path:a=this.path||this.type,mode:s=this.mode}={}){return n.sendMessage({handler:"create",args:[this.type,e,t,{path:a,mode:s,env:this.getEnv()}]})}update(e,t,{path:a=this.path||this.type,mode:s=this.mode,queryParams:r={}}={}){return n.sendMessage({handler:"update",args:[this.type,e,t,{path:a,mode:s,env:this.getEnv(),queryString:this.buildQueryString(this.queryParams.update,r)}]})}delete(e,{path:t=this.path||this.type,mode:a=this.mode}={}){return n.sendMessage({handler:"delete",args:[this.type,e,{path:t,mode:a,env:this.getEnv()}]})}getEnv(){return{token:localStorage.getItem("token"),clientUuid:localStorage.getItem("client_uuid"),apiUrl:m.globals.urlRootApi,version:m.globals.version,tabId:i.Z}}buildQueryString(...e){const t=new URLSearchParams(Object.assign({},...e)).toString();return t?"?"+t:""}}var u=a(20144),h=a(84315),c=function(e,t,a,s){return new(a||(a=Promise))((function(r,d){function i(e){try{o(s.next(e))}catch(e){d(e)}}function n(e){try{o(s.throw(e))}catch(e){d(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,n)}o((s=s.apply(e,t||[])).next())}))};function l(e,t){const a={};return Object.values(e).filter((e=>e.deleted===t)).sort(((e,t)=>t.updatedDate-e.updatedDate)).forEach((e=>a[e.id]=new r(e))),a}const g=(e=(()=>({noteService:new d(new o("notes"))}))().noteService)=>(0,s.Q_)("notes",{state:()=>({data:{},loading:!1,loaded:!1}),getters:{getItems:e=>l(e.data,!1),getDeletedItems:e=>l(e.data,!0),getItemById:e=>t=>{const a=e.data[t];return a?new r(a):null}},actions:{refresh(t=!1){this.loading=!0,e.get({success:e=>{e.forEach((e=>u.ZP.set(this.data,e.id,e))),this.loaded=!0,this.loading=!1},queryParams:{loadDeleted:t}})},create(){var e;const t=null===(e=Object.values(this.data).find((e=>e.draft&&!e.body.length)))||void 0===e?void 0:e.id,a={id:t||(0,h.uuidv4)(),body:"",draft:!0,updatedDate:Date.now(),deleted:!1};return u.ZP.set(this.data,a.id,a),a},update(t,a){return c(this,void 0,void 0,(function*(){const s={body:a,updatedDate:Date.now()},r=Object.assign(Object.assign({},this.data[t]),s),{draft:d}=r;return delete r.draft,u.ZP.set(this.data,t,r),d&&r.body?yield e.create(r):d||(yield e.update(t,s)),r}))},delete(t){const a={deleted:!0,updatedDate:Date.now()},s=Object.assign({},this.data[t],a);return s.draft?(u.ZP.delete(this.data,t),Promise.resolve()):(u.ZP.set(this.data,t,s),e.update(t,a))},restore(t){return c(this,void 0,void 0,(function*(){if(!this.data[t])throw new Error("No note found to restore with id: "+t);const a={deleted:!1,updatedDate:Date.now()},s=Object.assign(Object.assign({},this.data[t]),a);return u.ZP.set(this.data,t,s),yield e.update(t,a),s}))}}}),p=g()}}]);