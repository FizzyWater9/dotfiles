var linkding=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}function v(t,e,n){t.classList[n?"add":"remove"](e)}let b;function k(t){b=t}const y=[],x=[],$=[],w=[],C=Promise.resolve();let T=!1;function _(t){$.push(t)}let j=!1;const L=new Set;function U(){if(!j){j=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];k(e),B(e.$$)}for(k(null),y.length=0;x.length;)x.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];L.has(e)||(L.add(e),e())}$.length=0}while(y.length);for(;w.length;)w.pop()();T=!1,j=!1,L.clear()}}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const A=new Set;let E;function P(t,e){t&&t.i&&(A.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),E.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function O(t){t&&t.c()}function M(t,n,i){const{fragment:a,on_mount:r,on_destroy:l,after_update:c}=t.$$;a&&a.m(n,i),_((()=>{const n=r.map(e).filter(s);l?l.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(_)}function H(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(y.push(t),T||(T=!0,C.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,s,i,a,r,c,u=[-1]){const f=b;k(e);const d=s.props||{},m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(m.ctx=i?i(e,d,((t,n,...o)=>{const s=o.length?o[0]:n;return m.ctx&&r(m.ctx[t],m.ctx[t]=s)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](s),p&&I(e,t)),n})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();s.intro&&P(e.$$.fragment),M(e,s.target,s.anchor),U()}k(f)}class D{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(t){const e=t.value,n=t.selectionStart;let o=n,s=e.charAt(o-1);for(;s&&" "!==s&&o>0;)o--,s=e.charAt(o-1);return{start:o,end:n}}function z(t,e,n){const o=t.slice();return o[19]=e[n],o[21]=n,o}function q(t){let e,n,o,s,i,g,b,k,y=t[19]+"";function x(){return t[14](t[19])}return{c(){e=c("li"),n=c("a"),o=c("div"),s=c("div"),i=u(y),g=f(),p(s,"class","tile-content"),p(o,"class","tile tile-centered"),p(n,"href","#"),p(n,"class","svelte-1xblcwv"),p(e,"class","menu-item svelte-1xblcwv"),v(e,"selected",t[6]===t[21])},m(t,l){r(t,e,l),a(e,n),a(n,o),a(o,s),a(s,i),a(e,g),b||(k=d(n,"mousedown",m(x)),b=!0)},p(n,o){t=n,32&o&&y!==(y=t[19]+"")&&h(i,y),64&o&&v(e,"selected",t[6]===t[21])},d(t){t&&l(e),b=!1,k()}}}function J(e){let n,s,i,u,m,h,b,k=e[5],y=[];for(let t=0;t<k.length;t+=1)y[t]=q(z(e,k,t));return{c(){n=c("div"),s=c("div"),i=c("input"),u=f(),m=c("ul");for(let t=0;t<y.length;t+=1)y[t].c();p(i,"id",e[1]),p(i,"name",e[2]),i.autofocus=!0,p(i,"class","form-input input-sm"),p(i,"type","text"),p(i,"autocomplete","off"),p(s,"class","form-autocomplete-input form-input"),v(s,"is-focused",e[3]),p(m,"class","menu svelte-1xblcwv"),v(m,"open",e[4]&&e[5].length>0),p(n,"class","form-autocomplete")},m(t,o){r(t,n,o),a(n,s),a(s,i),g(i,e[0]),a(n,u),a(n,m);for(let t=0;t<y.length;t+=1)y[t].m(m,null);i.focus(),h||(b=[d(i,"input",e[13]),d(i,"input",e[9]),d(i,"keydown",e[10]),d(i,"focus",e[7]),d(i,"blur",e[8])],h=!0)},p(t,[e]){if(2&e&&p(i,"id",t[1]),4&e&&p(i,"name",t[2]),1&e&&i.value!==t[0]&&g(i,t[0]),8&e&&v(s,"is-focused",t[3]),2144&e){let n;for(k=t[5],n=0;n<k.length;n+=1){const o=z(t,k,n);y[n]?y[n].p(o,e):(y[n]=q(o),y[n].c(),y[n].m(m,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=k.length}48&e&&v(m,"open",t[4]&&t[5].length>0)},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(y,t),h=!1,o(b)}}}function W(t,e,n){let{id:o}=e,{name:s}=e,{value:i}=e,{tags:a}=e,r=!1,l=!1,c=null,u=[],f=0;function d(){n(4,l=!1),n(5,u=[]),n(6,f=0)}function m(t){const e=R(c),o=c.value;n(0,i=o.substring(0,e.start)+t+o.substring(e.end)),d()}function p(t){const e=u.length;let o=f+t;o<0&&(o=Math.max(e-1,0)),o>=e&&(o=0),n(6,f=o)}return t.$$set=t=>{"id"in t&&n(1,o=t.id),"name"in t&&n(2,s=t.name),"value"in t&&n(0,i=t.value),"tags"in t&&n(12,a=t.tags)},[i,o,s,r,l,u,f,function(){n(3,r=!0)},function(){n(3,r=!1),d()},function(t){c=t.target;const e=function(t){const e=R(t);return t.value.substring(e.start,e.end)}(c);n(5,u=e?a.filter((t=>0===t.indexOf(e))):[]),e&&u.length>0?(n(4,l=!0),n(6,f=0)):d()},function(t){if(l&&(13===t.keyCode||9===t.keyCode)){m(u[f]),t.preventDefault()}27===t.keyCode&&(d(),t.preventDefault()),38===t.keyCode&&(p(-1),t.preventDefault()),40===t.keyCode&&(p(1),t.preventDefault())},m,a,function(){i=this.value,n(0,i)},t=>m(t)]}class G extends D{constructor(t){var e;super(),document.getElementById("svelte-1xblcwv-style")||((e=c("style")).id="svelte-1xblcwv-style",e.textContent=".menu.svelte-1xblcwv.svelte-1xblcwv{display:none;max-height:200px;overflow:auto;font-size:.7rem}.menu.open.svelte-1xblcwv.svelte-1xblcwv{display:block}.menu-item.selected.svelte-1xblcwv>a.svelte-1xblcwv{background:#f1f1fc;color:#5755d9}",a(document.head,e)),N(this,t,W,J,i,{id:1,name:2,value:0,tags:12})}}function V(){return"undefined"!=typeof browser?browser:chrome}function Y(){return"undefined"!=typeof chrome&&!!chrome.storage}function F(){V().runtime.openOptionsPage(),window.close()}function K(t){let e;return{c(){e=c("div"),e.textContent="This URL is already bookmarked. The form has been prefilled from the existing bookmark, and saving the form will\n        update the existing bookmark.",p(e,"class","form-input-hint bookmark-exists svelte-af5t2e")},m(t,n){r(t,e,n)},d(t){t&&l(e)}}}function Q(t){let e;return{c(){e=c("div"),e.innerHTML='<div class="form-input-hint"><i class="icon icon-check"></i> Bookmark saved</div>',p(e,"class","form-group has-success result-row svelte-af5t2e")},m(t,n){r(t,e,n)},d(t){t&&l(e)}}}function X(t){let e,n,o,s;return{c(){e=c("div"),n=c("div"),o=u("Error saving bookmark: "),s=u(t[7]),p(n,"class","form-input-hint"),p(e,"class","form-group has-error result-row svelte-af5t2e")},m(t,i){r(t,e,i),a(e,n),a(n,o),a(n,s)},p(t,e){128&e&&h(s,t[7])},d(t){t&&l(e)}}}function Z(t){let e,n;return{c(){e=c("div"),n=c("button"),n.textContent="Save",p(n,"type","submit"),p(n,"class","btn btn-primary svelte-af5t2e"),v(n,"loading","loading"===t[6]),p(e,"class","button-row svelte-af5t2e")},m(t,o){r(t,e,o),a(e,n)},p(t,e){64&e&&v(n,"loading","loading"===t[6])},d(t){t&&l(e)}}}function tt(t){let e,n,s,i,v,b,k,y,$,C,T,_,j,L,U,B,A,E,I,N,D,R,z,q,J,W,V,Y,F,tt,et,nt,ot,st,it,at,rt,lt,ct,ut,ft,dt,mt,pt,ht,gt,vt=t[9]?"Edit Bookmark":"Add bookmark",bt=t[9]&&K();function kt(e){t[15].call(null,e)}let yt={id:"input-tags",name:"tags",tags:t[8]};void 0!==t[4]&&(yt.value=t[4]),I=new G({props:yt}),x.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(I,"value",kt)));let xt="success"===t[6]&&Q(),$t="error"===t[6]&&X(t),wt="success"!==t[6]&&Z(t);return{c(){e=c("div"),n=c("h6"),s=u(vt),i=f(),v=c("a"),v.textContent="Options",b=f(),k=c("div"),y=f(),$=c("form"),C=c("div"),T=c("label"),T.textContent="URL",_=f(),j=c("input"),L=f(),bt&&bt.c(),U=f(),B=c("div"),A=c("label"),A.textContent="Tags",E=f(),O(I.$$.fragment),D=f(),R=c("div"),z=c("label"),z.textContent="Title",q=f(),J=c("input"),W=f(),V=c("div"),Y=c("label"),Y.textContent="Description",F=f(),tt=c("textarea"),et=f(),nt=c("div"),ot=c("label"),st=c("input"),it=f(),at=c("i"),rt=f(),lt=c("span"),lt.textContent="Mark as unread",ct=f(),ut=c("div"),ft=f(),xt&&xt.c(),dt=f(),$t&&$t.c(),mt=f(),wt&&wt.c(),p(v,"href","#"),p(e,"class","title-row svelte-af5t2e"),p(k,"class","divider"),p(T,"class","form-label label-sm"),p(T,"for","input-url"),p(j,"class","form-input input-sm"),p(j,"type","text"),p(j,"id","input-url"),p(j,"placeholder","URL"),p(C,"class","form-group"),p(A,"class","form-label label-sm"),p(A,"for","input-tags"),p(B,"class","form-group"),p(z,"class","form-label label-sm"),p(z,"for","input-title"),p(J,"class","form-input input-sm"),p(J,"type","text"),p(J,"id","input-title"),p(J,"placeholder",t[2]),p(R,"class","form-group"),p(Y,"class","form-label label-sm"),p(Y,"for","input-description"),p(tt,"class","form-input input-sm"),p(tt,"id","input-description"),p(tt,"placeholder","Leave empty to use description from website"),p(V,"class","form-group"),p(st,"type","checkbox"),p(at,"class","form-icon"),p(lt,"class","text-small"),p(ot,"class","form-checkbox"),p(nt,"class","form-group"),p(ut,"class","divider"),p($,"class","form svelte-af5t2e")},m(o,l){r(o,e,l),a(e,n),a(n,s),a(e,i),a(e,v),r(o,b,l),r(o,k,l),r(o,y,l),r(o,$,l),a($,C),a(C,T),a(C,_),a(C,j),g(j,t[0]),a(C,L),bt&&bt.m(C,null),a($,U),a($,B),a(B,A),a(B,E),M(I,B,null),a($,D),a($,R),a(R,z),a(R,q),a(R,J),g(J,t[1]),a($,W),a($,V),a(V,Y),a(V,F),a(V,tt),g(tt,t[3]),a($,et),a($,nt),a(nt,ot),a(ot,st),st.checked=t[5],a(ot,it),a(ot,at),a(ot,rt),a(ot,lt),a($,ct),a($,ut),a($,ft),xt&&xt.m($,null),a($,dt),$t&&$t.m($,null),a($,mt),wt&&wt.m($,null),pt=!0,ht||(gt=[d(v,"click",m(t[11])),d(j,"input",t[14]),d(J,"input",t[16]),d(tt,"input",t[17]),d(st,"change",t[18]),d($,"submit",m(t[10]))],ht=!0)},p(t,[e]){(!pt||512&e)&&vt!==(vt=t[9]?"Edit Bookmark":"Add bookmark")&&h(s,vt),1&e&&j.value!==t[0]&&g(j,t[0]),t[9]?bt||(bt=K(),bt.c(),bt.m(C,null)):bt&&(bt.d(1),bt=null);const n={};var o;256&e&&(n.tags=t[8]),!N&&16&e&&(N=!0,n.value=t[4],o=()=>N=!1,w.push(o)),I.$set(n),(!pt||4&e)&&p(J,"placeholder",t[2]),2&e&&J.value!==t[1]&&g(J,t[1]),8&e&&g(tt,t[3]),32&e&&(st.checked=t[5]),"success"===t[6]?xt||(xt=Q(),xt.c(),xt.m($,dt)):xt&&(xt.d(1),xt=null),"error"===t[6]?$t?$t.p(t,e):($t=X(t),$t.c(),$t.m($,mt)):$t&&($t.d(1),$t=null),"success"!==t[6]?wt?wt.p(t,e):(wt=Z(t),wt.c(),wt.m($,null)):wt&&(wt.d(1),wt=null)},i(t){pt||(P(I.$$.fragment,t),pt=!0)},o(t){S(I.$$.fragment,t),pt=!1},d(t){t&&l(e),t&&l(b),t&&l(k),t&&l(y),t&&l($),bt&&bt.d(),H(I),xt&&xt.d(),$t&&$t.d(),wt&&wt.d(),ht=!1,o(gt)}}}function et(t,e,n){let{api:o}=e,{configuration:s}=e,i="",a="",r="",l="",c="",u=!1,f="",d="",m=[],p=!1;async function h(){const t=await async function(){const t=await V().tabs.query({active:!0,currentWindow:!0}),e=t&&t[0];return{url:e?e.url:"",title:e?e.title:""}}();n(0,i=t.url),n(2,r=t.title),n(4,c=s.default_tags);const e=await o.getTags().catch((()=>[]));n(8,m=e.map((t=>t.name))),async function(){const t=await o.findBookmarkByUrl(i).catch((()=>null));t&&(n(9,p=!0),n(1,a=t.title),n(4,c=t.tag_names?t.tag_names.join(" "):""),n(3,l=t.description),n(5,u=t.unread))}()}return t.$$set=t=>{"api"in t&&n(12,o=t.api),"configuration"in t&&n(13,s=t.configuration)},t.$$.update=()=>{12288&t.$$.dirty&&o&&s&&h()},[i,a,r,l,c,u,f,d,m,p,async function(){const t=c.split(" ").map((t=>t.trim())).filter((t=>!!t)),e={url:i,title:a,description:l,tag_names:t,unread:u};try{n(6,f="loading"),await o.saveBookmark(e),n(6,f="success")}catch(t){n(6,f="error"),n(7,d=t.toString()),console.error(d)}},function(){F()},o,s,function(){i=this.value,n(0,i)},function(t){c=t,n(4,c)},function(){a=this.value,n(1,a)},function(){l=this.value,n(3,l)},function(){u=this.checked,n(5,u)}]}class nt extends D{constructor(t){var e;super(),document.getElementById("svelte-af5t2e-style")||((e=c("style")).id="svelte-af5t2e-style",e.textContent="form.svelte-af5t2e.svelte-af5t2e{max-width:400px}.title-row.svelte-af5t2e.svelte-af5t2e{display:flex;justify-content:space-between;align-items:baseline}.button-row.svelte-af5t2e.svelte-af5t2e{display:flex;justify-content:flex-end}.button-row.svelte-af5t2e button.svelte-af5t2e{padding-left:32px;padding-right:32px}.result-row.svelte-af5t2e.svelte-af5t2e{display:flex;justify-content:center}.bookmark-exists.svelte-af5t2e.svelte-af5t2e{color:#ffb700}",a(document.head,e)),N(this,t,et,tt,i,{api:12,configuration:13})}}function ot(e){let n,o,s,i,u,m,h,g,v,b;return{c(){var t,e,a;n=c("h6"),n.textContent="Welcome",o=f(),s=c("div"),i=f(),u=c("p"),u.innerHTML='This is a companion extension for the <a href="https://github.com/sissbruecker/linkding">linkding</a> bookmark\n  service. Before you can start using it you have to configure some basic settings, so that the extension can\n  communicate with your linkding installation.',m=f(),h=c("div"),g=c("button"),g.textContent="Get started",p(s,"class","divider"),p(g,"type","submit"),p(g,"class","btn btn-primary"),t="text-align",e="center",h.style.setProperty(t,e,a?"important":"")},m(t,l){r(t,n,l),r(t,o,l),r(t,s,l),r(t,i,l),r(t,u,l),r(t,m,l),r(t,h,l),a(h,g),v||(b=d(g,"click",e[0]),v=!0)},p:t,i:t,o:t,d(t){t&&l(n),t&&l(o),t&&l(s),t&&l(i),t&&l(u),t&&l(m),t&&l(h),v=!1,b()}}}function st(t){return[function(){F()}]}class it extends D{constructor(t){super(),N(this,t,st,ot,i,{})}}const at="ld_ext_config",rt={baseUrl:"",token:"",default_tags:""};async function lt(){const t=await function(t){if(Y())return chrome.storage.local.get([t]).then((e=>e[t]));return Promise.resolve(localStorage.getItem(t))}(at),e=t?JSON.parse(t):{};return{...rt,...e}}async function ct(t){const e=JSON.stringify(t);var n,o;await(n=at,o=e,Y()?chrome.storage.local.set({[n]:o}):(localStorage.setItem(n,o),Promise.resolve()))}class ut{constructor(t){this.configuration=t}async saveBookmark(t){const e=this.configuration;return fetch(`${e.baseUrl}/api/bookmarks/`,{method:"POST",headers:{Authorization:`Token ${e.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>201===t.status?t.json():400===t.status?t.json().then((t=>Promise.reject(`Validation error: ${JSON.stringify(t)}`))):Promise.reject(`Request error: ${t.statusText}`)))}async getTags(){const t=this.configuration;return fetch(`${t.baseUrl}/api/tags/?limit=1000`,{headers:{Authorization:`Token ${t.token}`}}).then((t=>200===t.status?t.json().then((t=>t.results)):Promise.reject(`Error loading tags: ${t.statusText}`)))}async search(t,e){const n=this.configuration,o=encodeURIComponent(t),s=e.limit||100;return fetch(`${n.baseUrl}/api/bookmarks/?q=${o}&limit=${s}`,{headers:{Authorization:`Token ${n.token}`}}).then((t=>200===t.status?t.json().then((t=>t.results)):Promise.reject(`Error searching bookmarks: ${t.statusText}`)))}async testConnection(){const t=this.configuration;return fetch(`${t.baseUrl}/api/bookmarks/?limit=1`,{headers:{Authorization:`Token ${t.token}`}}).then((t=>200===t.status?t.json():Promise.reject(t))).then((t=>!!t.results)).catch((()=>!1))}async findBookmarkByUrl(t){return this.search(t,{limit:1}).then((t=>t&&t.length>0?t[0]:void 0))}}function ft(t){let e,n,o,s,i,u,d,m;return d=new it({}),{c(){e=c("div"),n=c("div"),o=f(),s=c("div"),i=c("div"),u=c("div"),O(d.$$.fragment),p(n,"class","modal-overlay"),p(u,"class","content"),p(i,"class","modal-body"),p(s,"class","modal-container"),p(e,"class","modal active"),p(e,"id","modal-id")},m(t,l){r(t,e,l),a(e,n),a(e,o),a(e,s),a(s,i),a(i,u),M(d,u,null),m=!0},i(t){m||(P(d.$$.fragment,t),m=!0)},o(t){S(d.$$.fragment,t),m=!1},d(t){t&&l(e),H(d)}}}function dt(t){let e,n,s,i;e=new nt({props:{configuration:t[1],api:t[2]}});let a=!t[0]&&ft();return{c(){O(e.$$.fragment),n=f(),a&&a.c(),s=u("")},m(t,o){M(e,t,o),r(t,n,o),a&&a.m(t,o),r(t,s,o),i=!0},p(t,[n]){const i={};2&n&&(i.configuration=t[1]),4&n&&(i.api=t[2]),e.$set(i),t[0]?a&&(E={r:0,c:[],p:E},S(a,1,1,(()=>{a=null})),E.r||o(E.c),E=E.p):a?1&n&&P(a,1):(a=ft(),a.c(),P(a,1),a.m(s.parentNode,s))},i(t){i||(P(e.$$.fragment,t),P(a),i=!0)},o(t){S(e.$$.fragment,t),S(a),i=!1},d(t){H(e,t),t&&l(n),a&&a.d(t),t&&l(s)}}}function mt(t,e,n){let o,s,i=!0;return async function(){var t;n(1,o=await lt()),n(0,i=(t=o).baseUrl&&t.token),i&&n(2,s=new ut(o))}(),[i,o,s]}function pt(t){let e;return{c(){e=c("div"),e.innerHTML='<span class="form-input-hint"><i class="icon icon-check"></i> Connection successful</span>',p(e,"class","form-group has-success mr-2")},m(t,n){r(t,e,n)},d(t){t&&l(e)}}}function ht(t){let e;return{c(){e=c("div"),e.innerHTML='<span class="form-input-hint"><i class="icon icon-cross"></i> Connection failed</span>',p(e,"class","form-group has-error mr-2")},m(t,n){r(t,e,n)},d(t){t&&l(e)}}}function gt(e){let n,s,i,h,v,b,k,y,x,$,w,C,T,_,j,L,U,B,A,E,P,S,O,M,H,I,N,D,R,z,q,J,W,G,V,Y,F,K,Q=e[3]&&pt(),X=e[4]&&ht();return{c(){n=c("h6"),n.textContent="Configuration",s=f(),i=c("div"),h=f(),v=c("p"),v.innerHTML='This is a companion extension for the <a href="https://github.com/sissbruecker/linkding">linkding</a> bookmark\n  service. Before you can start using it you have to configure some basic settings, so that the extension can\n  communicate with your linkding installation.',b=f(),k=c("form"),y=c("div"),x=c("label"),x.innerHTML='Base URL <span class="text-error">*</span>',$=f(),w=c("input"),C=f(),T=c("div"),T.innerHTML="The base URL of your linkding installation, <b>without</b> the <samp>/bookmark</samp>\n      path or a trailing slash",_=f(),j=c("div"),L=c("label"),L.innerHTML='API Authentication Token <span class="text-error">*</span>',U=f(),B=c("input"),A=f(),E=c("div"),E.textContent="Used to authenticate against the linkding API. You can find this on your linkding\n      settings page.",P=f(),S=c("div"),O=c("label"),O.textContent="Default Tags",M=f(),H=c("input"),I=f(),N=c("div"),N.textContent="Set of tags that should be added to new bookmarks by default.",D=f(),R=c("div"),z=f(),q=c("div"),Q&&Q.c(),J=f(),X&&X.c(),W=f(),G=c("button"),V=u("Save"),p(i,"class","divider"),p(x,"class","form-label"),p(x,"for","input-base-url"),p(w,"class","form-input"),p(w,"type","text"),p(w,"id","input-base-url"),p(w,"placeholder","https://linkding.mydomain.com"),p(T,"class","form-input-hint"),p(y,"class","form-group"),p(L,"class","form-label"),p(L,"for","input-token"),p(B,"class","form-input"),p(B,"type","password"),p(B,"id","input-token"),p(B,"placeholder","Token"),p(E,"class","form-input-hint"),p(j,"class","form-group"),p(O,"class","form-label"),p(O,"for","input-default-tags"),p(H,"class","form-input"),p(H,"type","text"),p(H,"id","input-default-tags"),p(H,"placeholder",""),p(N,"class","form-input-hint"),p(S,"class","form-group"),p(R,"class","divider"),p(G,"type","submit"),p(G,"class","btn btn-primary ml-2 svelte-n84dha"),G.disabled=Y=!(e[0]&&e[1]),p(q,"class","button-row svelte-n84dha"),p(k,"class","form")},m(t,o){r(t,n,o),r(t,s,o),r(t,i,o),r(t,h,o),r(t,v,o),r(t,b,o),r(t,k,o),a(k,y),a(y,x),a(y,$),a(y,w),g(w,e[0]),a(y,C),a(y,T),a(k,_),a(k,j),a(j,L),a(j,U),a(j,B),g(B,e[1]),a(j,A),a(j,E),a(k,P),a(k,S),a(S,O),a(S,M),a(S,H),g(H,e[2]),a(S,I),a(S,N),a(k,D),a(k,R),a(k,z),a(k,q),Q&&Q.m(q,null),a(q,J),X&&X.m(q,null),a(q,W),a(q,G),a(G,V),F||(K=[d(w,"input",e[6]),d(B,"input",e[7]),d(H,"input",e[8]),d(k,"submit",m(e[5]))],F=!0)},p(t,[e]){1&e&&w.value!==t[0]&&g(w,t[0]),2&e&&B.value!==t[1]&&g(B,t[1]),4&e&&H.value!==t[2]&&g(H,t[2]),t[3]?Q||(Q=pt(),Q.c(),Q.m(q,J)):Q&&(Q.d(1),Q=null),t[4]?X||(X=ht(),X.c(),X.m(q,W)):X&&(X.d(1),X=null),3&e&&Y!==(Y=!(t[0]&&t[1]))&&(G.disabled=Y)},i:t,o:t,d(t){t&&l(n),t&&l(s),t&&l(i),t&&l(h),t&&l(v),t&&l(b),t&&l(k),Q&&Q.d(),X&&X.d(),F=!1,o(K)}}}function vt(t,e,n){let o="",s="",i="",a=!1,r=!1;return async function(){const t=await lt();n(0,o=t.baseUrl),n(1,s=t.token),n(2,i=t.default_tags)}(),[o,s,i,a,r,async function(){const t={baseUrl:o,token:s,default_tags:i};await new ut(t).testConnection(t)?(await ct(t),n(4,r=!1),n(3,a=!0)):(n(3,a=!1),n(4,r=!0))},function(){o=this.value,n(0,o)},function(){s=this.value,n(1,s)},function(){i=this.value,n(2,i)}]}return{Popup:class extends D{constructor(t){super(),N(this,t,mt,dt,i,{})}},Options:class extends D{constructor(t){var e;super(),document.getElementById("svelte-n84dha-style")||((e=c("style")).id="svelte-n84dha-style",e.textContent=".button-row.svelte-n84dha.svelte-n84dha{display:flex;justify-content:flex-end;align-items:baseline}.button-row.svelte-n84dha button.svelte-n84dha{padding-left:32px;padding-right:32px}",a(document.head,e)),N(this,t,vt,gt,i,{})}}}}();
//# sourceMappingURL=bundle.js.map