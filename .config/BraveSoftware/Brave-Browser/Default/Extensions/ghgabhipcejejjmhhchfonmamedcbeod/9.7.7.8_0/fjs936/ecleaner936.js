// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2021 Vlad & Serge Strukoff. All Rights Reserved.
// Minified by Google Closure Compiler 20210406
'use strict';(function(){var N;const I=window,F=document,P=function(){},q=Function.prototype.call,z=Event,Eb=Audio,Fb=Blob,L=Date,Da="CustomElementRegistry"in I,{runtime:{sendMessage:Xa,connect:Gb},tabs:{update:Hb,query:Ib,getCurrent:Ya,remove:Za,reload:Jb},browserAction:{setTitle:Kb,setBadgeBackgroundColor:Lb,setBadgeText:Mb},browsingData:{removeHistory:Nb,removeDownloads:$a,removeCache:Ob,removePasswords:Pb,removeFormData:Qb,removeLocalStorage:Ea,removeWebSQL:Fa,removeIndexedDB:Ga,removeFileSystems:Ha,
removeAppcache:Ia,removePluginData:Rb},history:{search:Sb},i18n:{getMessage:G}}=chrome,ua=Document.prototype,O=Element.prototype,ia=String.prototype,va=Array.prototype,Ja=Node.prototype,v=F.createElement.bind(F),Tb=F.createElementNS.bind(F),ab=F.createDocumentFragment.bind(F),Ub=F.createTextNode.bind(F),bb=F.querySelector.bind(F),Vb=F.querySelectorAll.bind(F),r=q.bind(EventTarget.prototype.addEventListener),cb=q.bind(EventTarget.prototype.removeEventListener),aa=q.bind(z.prototype.preventDefault);
q.bind(z.prototype.stopPropagation);const Ka=q.bind(O.hasAttribute),wa=q.bind(O.getAttribute),E=q.bind(O.setAttribute),ja=q.bind(O.removeAttribute),xa=O.attachShadow?q.bind(O.attachShadow):null,Wb=q.bind(DocumentFragment.prototype.querySelector),Xb=q.bind(DocumentFragment.prototype.querySelectorAll),db=q.bind(O.scrollTo||P),La=q.bind(HTMLElement.prototype.focus),eb=q.bind(HTMLElement.prototype.click),t=q.bind(Ja.appendChild),fb=q.bind(Ja.removeChild),Yb=I.crypto.getRandomValues.bind(I.crypto),Zb=
q.bind(HTMLMediaElement.prototype.play),Ma=q.bind(Number.prototype.toString),ba=q.bind(ia.slice),Na=q.bind(ia.indexOf),$b=q.bind(ia.startsWith),Oa=q.bind(ia.match),Q=q.bind(ia.split),ac=q.bind(va.push),Pa=q.bind(va.join),bc=q.bind(va.indexOf),Qa=q.bind(va.slice),cc=q.bind(Array.prototype.forEach),B=q.bind(Object.getOwnPropertyDescriptor(Ja,"textContent").set),gb=JSON.stringify,dc=JSON.parse,hb=String.fromCharCode,ca=parseInt,H=setTimeout,ib=L.now,ec=Object.getOwnPropertyNames,fc=URL.createObjectURL,
gc=URL.revokeObjectURL,ka=Math.random,jb=161991354E4>ib()?!0:!1,kb=navigator.appVersion||navigator.userAgent||"",hc=/Win/.test(navigator.platform),la=/Edg/.test(kb),lb=/OPR/.test(kb),ic=lb?"opera://":la?"edge://":"chrome://",ya=chrome.runtime.getURL(""),R=function(b,g){b=gb(b);g?Xa(b,g):Xa(b)},ma=function(b){R({id:20,i:b},null)},y=function(b){R({id:9,v:b},null)},C=function(){return"https://www.hotcleaner.com/"},Ra=function(b){var g={},f=C();if(1==b)if(jb){b="clear remove delete erase manage obliterate sweep".split(" ");
var l="browsing private your my my-private chrome".split(" ");var W=["history","data","records"];g.u=f+b[7*ka()|0]+"-"+l[6*ka()|0]+"-"+W[3*ka()|0]+".html";g.q=f+"*";g.t="Clear Browsing History"}else g.u=f+"clear-browsing-history.html";else 2==b&&(jb?(b=["cookie","browser-cookie","chrome-cookie"],l=["wiper","delete","remove"],g.u=f+b[3*ka()|0]+"-"+l[3*ka()|0]+".html",g.q=f+"*",g.t="Cookie Wiper *"):g.u=f+"cookie-wiper.html");return g},p=function(b){return xa&&Da?Wb(N,b):bb(b)},za=function(b){return xa&&
Da?Xb(N,b):Vb(b)},zc=function(){var b,g,f,l,W,da,na,S,oa,D,X,ea;const K=[],Y={},pa=function(a){var d=0,c=0;if(a&&a.offsetParent){do d+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent)}return[d,c]},J=function(a,d,c){a&&(a.classList.remove(d),a.classList.add(c))},fa=function(){R({id:7,v:b},null)},jc=function(){hc&&R({id:15,v:"000E"},function(a){})},kc=function(a){a=this.parentElement.firstElementChild.id;"p5"!=a||b[a]?"p20"!=a||b[a]?Sa(a):Z("m20b",Sa,P,a,null,null,null):Z("m5b",Sa,P,a,null,null,
null)},Sa=function(a){T(null,null);U(!0,!0,null);const d=mb(),c=p("#"+a),e=ba(a,1);a=function(){c.className="ghk";U(!1,!1,null);nb();(28==e||b.p28)&&ob(null);T(0==e||25==e||28==e?"m8":"m7",500);H(function(){c.className="chk"},500)};27==e&&pb();c.className="wipe";28==e?a():qb(e,d,a)},lc=function(){ma(13);U(!0,!0,null);T(null,null);var a=mb(),d=-1;const c=function(w){for(var x,u=0,n=m.length;u<n;u++)x=p("#p"+m[u]),Ka(x,"ac")&&(x.className=w)},e=function(){b.p28&&ob(null);T("m7",1E3);nb();H(function(){c("chk");
U(!1,null,null);b.p27&&pb()},1E3)},k=function(){d++;if(d<m.length){var w=m[d];b["p"+w]?qb(w,a,h):k()}else e()},h=function(){H(function(){p("#p"+m[d]).className="ghk";k()},10)};var m=b.dev?[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]:[0,1,2,3,4,5,6,7,8,9,10,11,12,25];c("wipe");k()},qb=function(a,d,c){var e={since:d};13>a?(e.originTypes={unprotectedWeb:!0,protectedWeb:!1,extension:!1},0==a?rb(0,c):1==a?Nb(e,c):2==a?$a(e,function(){$a(e,c)}):3==a?Ob(e,c):4==a?(R({id:31,v:null},
null),H(c,1E3)):5==a?Pb(e,c):6==a?Qb(e,c):7==a?Ea(e,c):8==a?Fa(e,c):9==a?Ga(e,c):10==a?Ha(e,c):11==a?Ia(e,c):12==a&&Rb(e,c)):19>a?(e.originTypes={unprotectedWeb:!1,protectedWeb:!0,extension:!1},13==a?(R({id:31,v:null},null),H(c,300)):14==a?Ea(e,c):15==a?Fa(e,c):16==a?Ga(e,c):17==a?Ha(e,c):18==a&&Ia(e,c)):25>a?(e.originTypes={unprotectedWeb:!1,protectedWeb:!1,extension:!0},19==a?H(c,300):20==a?Ea(e,c):21==a?Fa(e,c):22==a?Ga(e,c):23==a?Ha(e,c):24==a&&Ia(e,c)):25==a?rb(1,c):c()},rb=function(a,d){Ya(function(c){Ib(a?
{active:!0}:{},function(e){var k=0;cc(e,function(h,m){c.id==h.id?0==m&&k++:a?Jb(h.id):m>k?Za(h.id):Hb(h.id,{url:"chrome-search://local-ntp/local-ntp.html"})});d&&H(d,500)})})},pb=function(){Ya(function(a){Za(a.id)})},nb=function(){Sb({text:""},function(a){a&&-1<a.length&&(a=a.length,Kb({title:0<a?"Visited Pages: "+a+"\nClick&Clean":"\nClick&Clean"}),Lb({color:50<a?[255,0,0,255]:[0,162,241,255]}),Mb({text:0<a?99<a?"99+":Ma(a):""}))})},mc=function(a){if(a instanceof z&&a.isTrusted){a=ca(ba(this.previousElementSibling.id,
1),10);var d=[7,8,9,10,13,14,15,16,17,19,20,21,22,23],c=ic;1==a?y(Ra(1)):(2==a?c+="downloads/":3==a?(a=0,y({u:C()+"cache-viewer.html"})):4==a?(a=0,y(Ra(2))):-1<bc(d,a)?c+="settings/siteData":5==a?c+="settings/passwords/":6==a?c+="settings/autofill/":11==a||18==a||24==a?c+="appcache-internals/":12==a?c+="components/":26==a?c+="version":29==a?(a=0,y({u:C()+"security-features-using-the-context-menu.html"})):31==a&&(a=0,y({u:C()+"clickclean-quick-access-menu.html"})),0<a&&y({u:c}))}},nc=function(a){b.time=
a;fa()},Ta=function(){var a=p("#timeType"),d=a.selectedIndex;b.timeType=d;9==d?J(a,"w255","w32"):J(a,"w32","w255");sb();fa()},sb=function(){var a=p("#time");9==b.timeType?(Ka(a.firstElementChild,"data-time")||oc(a.firstElementChild,b.time,1,nc),J(a,"nvw","dbk")):(J(a,"dbk","nvw"),(a=p("#cal"))&&J(a,"dbk","nvw"))},mb=function(){var a=b.timeType;return 10==a?1:0==a?g:9==a?b.time:ib()-36E5*[0,1,2,4,8,10,12,24,168][a]},qa=function(a){var d=p("#"+a),c={};Ka(d,"ac")?(ja(d,"ac"),c[a]=0):(E(d,"ac",!0),c[a]=
1);a in b&&(b[a]=c[a],fa())},pc=function(a){a instanceof z&&a.isTrusted&&(a=this.id,b[a]?qa(a):"p5"==a?Z("m5a",qa,P,a,null,null,null):"p4"==a||"p13"==a||"p19"==a?Z("m5c",qa,P,a,null,null,null):"p20"==a?Z("m20a",qa,P,a,null,null,null):qa(a))},U=function(a,d,c){var e=p("#shade"),k=p("#clr");k.disabled=p("#reset0").disabled=p("#reset1").disabled=p("#reset2").disabled=p("#dev").disabled=a;c?e.classList.add(c):(e.classList.remove("shade-bg-default"),e.classList.remove("shade-bg-white"));e.style.height=
a?p("#tab").scrollHeight+"px":"";d?E(k,"ac",!0):ja(k,"ac")},T=function(a,d){var c=p("#msg");a?(B(c,G(a)+"!"),c.classList.add("top48"),c.t&&(clearTimeout(c.t),c.t=null),c.t=H(T,d)):c.classList.remove("top48")},Z=function(a,d,c,e,k,h,m){U(!0,!1,m?m:"shade-bg-default");var w=p("#alert");m=w.firstElementChild.nextElementSibling;var x=m.nextElementSibling.firstElementChild,u=x.nextElementSibling;const n=function(A){A instanceof z&&A.isTrusted&&(ha(),d(e))},V=function(A){A instanceof z&&A.isTrusted&&(ha(),
c(e))},ha=function(){J(w,"dbk","nvw");d&&cb(u,"click",n,!1);c&&cb(x,"click",V,!1);U(!1,null,null)};B(m,G(a));B(u,G(k?k:"b0"));B(x,G(h?h:"b1"));c?J(x,"nvw","ibk"):J(x,"ibk","nvw");J(w,"nvw","dbk");c&&(r(x,"click",V,!1),La(x));d&&(r(u,"click",n,!1),La(u))},M=function(a){a instanceof z&&a.isTrusted&&(a=a.target.id||this.id,"suprt"==a?(a=C()+"security-and-privacy-software-feedback.html",y({u:a+"#chvjhhi",q:a})):"ytest"==a?(a=C()+"clickclean-app.html",y({u:a+"#chvjhhi",q:a})):"help"==a?y({u:C()+"clickclean-quick-start-guide.html"}):
"logo"==a?y({u:C()}):"ssl"==a?y({u:C()+"secure_search.html"}):"Crbs"==a?y({u:ya+"ectrb936.html"}):"ghsty"==a?y({u:la?"https://account.microsoft.com/privacy/activity-history?view=search":"https://myactivity.google.com/item"}):"skins"==a?y({u:C()+"clickclean-appearance.html"}):"gperms"==a?y({u:la?C()+"how-to-secure-your-microsoft-account.html":C()+"improve-your-google-account-security.html"}):"sync"==a?y({u:la?"edge://sync-internals/":lb?"opera://sync-internals":"https://www.google.com/settings/chrome/sync"}):
"news"==a?y({u:C()+"privacy-and-security-news.html"}):y({u:la?C()+"clickclean-for-microsoft-edge.html":C()+"clickclean_chrome.html"}))},sc=function(){var a=Q(G("cleaner1"),";"),d=Q(G("msg3"),";");Q(G("share"),";");var c=new Uint8Array(1);Yb(c);c=c[0]%7;c=function(e,k,h,m){e=p("#"+e);k&&("web"==e.className?B(e.firstElementChild,k):B(e,k));h&&(e.title=h);m&&r(e,"click",m,!0)};c("logo","v"+b.ver,0,M);c("ytest","Privacy Test",0,M);c("Crbs",a[0],a[2],M);c("clr",a[3],0,lc);c("HsTy",a[4],a[5],function(){y(Ra(1));
ma(14)});c("suprt",a[6],0,M);c("help",a[7],0,M);c("reset0",a[8],a[13],Ua);c("reset1",a[9],a[13],Ua);c("reset2",a[10],a[13],Ua);c("dev",a[11],a[12],function(){b.dev?(b.dev=0,fa(),Aa()):Z("m4",function(){b.dev=1;fa();Aa()},P,null,null,null,null)});c("export",a[14],0,qc);c("import",a[15],0,rc);c("ghsty",a[16],a[16],M);c("sync",a[17],a[17],M);c("gperms",d[3],d[1],M);c("skins",a[18],a[18],M);c("news",a[19],a[19],M)},Aa=function(){for(var a=p("#dev"),d=za(".dev"),c=b.dev?"nvw":"dbk",e=b.dev?"dbk":"nvw",
k=0;k<d.length;++k)J(d[k],c,e);b.dev?E(a,"ac",!0):ja(a,"ac")},Ua=function(a){a instanceof z&&a.isTrusted&&(db&&db(p("#tab"),0,0),a=ca(ba(a.target.id||this.id,5),10),2!=a||b.p5?tb(a):Z("m5a",function(){tb(2)},P,null,null,null,null))},tb=function(a){var d;0==a?d=[10,0,1,1,1,0,0,0,0,0,0,0,0,0,0]:1==a?d=[10,0,1,1,1,0,0,1,0,1,1,1,1,1,1]:2==a&&(d=[10,0,1,1,1,1,1,1,1,1,1,1,1,1,1]);b.timeType=d[0];b.time=d[1];b.p1=d[2];b.p2=d[3];b.p3=d[4];b.p4=d[5];b.p5=d[6];b.p6=d[7];b.p7=d[8];b.p8=d[9];b.p9=d[10];b.p10=
d[11];b.p11=d[12];b.p12=d[13];for(d=0;14>d;d++)a=p("#p"+d),b[a.id]?E(a,"ac",!0):ja(a,"ac");b.p31=1;b.p32=1;E(p("#p31"),"ac",!0);E(p("#p32"),"ac",!0);p("#timeType").selectedIndex=b.timeType;Ta()},ob=function(a){var d=new Eb("fimg936/erased.ogg");Zb(d);a&&H(a,400)},qc=function(){ma(15);R({id:34},function(a){var d=ec(b);if(d&&0<d.length){d=d[0];var c=b[d];delete b[d];b[d]=c}b.ver="9.7.7.6";a=gb({opt:b,wl:a});d="";c=[3,0,0,-3];for(var e,k=0,h=a.length;k<h;k++)e=c[k%4],d=k+e<h?d+Ma(a.charCodeAt(k+e),16):
d+Ma(a.charCodeAt(k),16);a=new Fb([d],{type:"text/plain;charset=UTF-8"});tc(a,"ClickClean-v9.7.7.6-Options")})},rc=function(){ma(16);uc(1E5,function(a){if("{"!=a.charAt(0)){a=Oa(a,/.{1,2}/g);for(var d=[3,0,0,-3],c,e="",k=0,h=a.length;k<h;k++)c=d[k%4],e=k+c<h?e+hb(ca(a[k+c],16)):e+hb(ca(a[k],16));a=e}try{a=dc(a)}catch(w){T("m12",1E3);return}a=a.opt;for(var m in a)void 0!=b[m]&&(b[m]=a[m]);b.ver="9.7.7.6";p("#timeType").selectedIndex=b.timeType;Ta();for(a=0;33>a;a++)m=p("#p"+a),b[m.id]?E(m,"ac",!0):
ja(m,"ac");b.wl&&400<b.wl.length&&(b.wl.length=400);fa();Aa();T("m8",1E3)})},uc=function(a,d){var c=p("#openAs");c&&fb(N,c);c=v("input");c.id="openAs";c.className="nvw";c.type="file";t(N,c);r(c,"change",function(e){if((e=e.target.files)&&1==e.length&&e[0].size<a){var k=new FileReader;k.onload=function(h){d(h.target.result)};k.readAsText(e[0])}else T("m12",1E3)},!1);eb(c)},tc=function(a,d){U(!0,null,null);var c=v("a");c.href=fc(a);E(c,"download",d);eb(c);H(function(){gc(c.href);U(!1,null,null)},2E3)},
oc=function(a,d,c,e){var k=Q(G("calendar"),";");f=Qa(k,0,12);l=Qa(k,12,19);W=Qa(k,19,26);da=0;na=k[26];S=k[27];oa=k[28];D=k[29];X=k[30];ea=k[31];ac(K,{t:"l",r:Pa(W,"|"),p:function(h,m){return h},g:function(h){return W[h.getDay()]}},{t:"Y",r:"19\\d{2}|20\\d{2}",p:function(h,m){h.setFullYear(Number(m));return h},g:function(h){return h.getFullYear()}},{t:"F",r:Pa(f,"|"),p:function(h,m){for(var w=0;12>w;w++)if(f[w]==m)return h.setMonth(w),h},g:function(h){return f[h.getMonth()]}},{t:"d",r:"0[1-9]|[12][0-9]|3[01]",
p:function(h,m){h.setDate(Number(m));h.getDate()!=m&&h.setDate(0);return h},g:function(h){h=h.getDate();return(10>h?"0":"")+h}},{t:"h",r:"[0-1][0-9]|2[0-3]",p:function(h,m){h.setHours(Number(m));h.getHours()!=m&&h.setHours(0);return h},g:function(h){h=h.getHours();return(10>h?"0":"")+h}},{t:"e",r:"[0-4][0-9]|5[0-9]",p:function(h,m){h.setMinutes(Number(m));h.getMinutes()!=m&&h.setMinutes(0);return h},g:function(h){h=h.getMinutes();return(10>h?"0":"")+h}},{t:"s",r:"[0-4][0-9]|5[0-9]",p:function(h,m){h.setSeconds(Number(m));
h.getSeconds()!=m&&h.setSeconds(0);return h},g:function(h){h=h.getSeconds();return(10>h?"0":"")+h}});for(k=0;k<K.length;k++)Y[K[k].t]=K[k];a.onDateChanged=e;a.showTime=c;ub(a,d?new L(d):new L);a.oncut=function(h){aa(h)};a.oncontextmenu=function(h){aa(h)};a.ondragstart=function(h){aa(h)};a.onkeydown=function(h){La(this.nextElementSibling);aa(h)};a.onclick=function(h){aa(h)};r(a,"mouseup",vc,!1);c&&(r(a.nextElementSibling,"mousedown",vb,!1),r(a.nextElementSibling,"mouseup",wb,!1),r(a.nextElementSibling.nextElementSibling,
"mousedown",vb,!1),r(a.nextElementSibling.nextElementSibling,"mouseup",wb,!1))},ub=function(a,d){a.showTime||(d=xb(d));var c=d.getTime();E(a,"data-time",c);a.value=yb(d,wa(a,"data-format"));a.onDateChanged(c)},zb=function(){p("#cal").style.display="none"},wc=function(a){ub(this.parentElement.e_input,new L);zb()},Ab=function(a,d){for(var c,e="^",k={},h=0,m=0;m<d.length;m++)c=d.charAt(m),Y[c]?(k[c]=++h,e+="("+Y[c].r+")"):e=" "==c?e+"\\s":e+((Oa(c,/[\w\d]/)?"":"\\")+c);if(!Oa(a,new RegExp(e+"$")))return 0;
a=new L;a.setDate(1);for(m=0;m<K.length;m++)c=K[m].t,k[c]&&(c=RegExp["$"+k[c]],a=K[m].p(a,c));return a},Cb=function(a){const d=function(Va,Ba,ra,xc){var Ca=v("button");Ba&&(Ca.className=Ba);B(Ca,ra);t(Va,Ca);r(Ca,"click",function(Wa){Wa instanceof z&&Wa.isTrusted&&xc(Wa)},!1)};var c=function(Va,Ba){var ra=v("div");ra.className="arrow"+(Ba?"Left":"Right");ra.style.display="inline-block";t(Va,ra)},e=p("#cal"),k=e.e_input,h=wa(k,"data-format"),m=new L;h=Ab(k.value,h);a||(a=h);k.showTime||(a=xb(a));var w=
new L(a);w.setDate(1);w.setDate(1-(7+w.getDay()-da)%7);k=ab();var x=v("table");x.id="calCtrls";var u=v("tr");t(x,u);var n=v("td");n.className="calCtrl";n.title=na;n.time=sa(a,-1,"FullYear");r(n,"click",ta,!1);t(u,n);c(n,1);c(n,1);n=v("td");n.className="calCtrl";n.title=oa;n.time=sa(a,-1,"Month");r(n,"click",ta,!1);t(u,n);c(n,1);n=v("th");B(n,f[a.getMonth()]+" "+a.getFullYear());t(u,n);n=v("td");n.className="calCtrl";n.title=D;n.time=sa(a,1,"Month");r(n,"click",ta,!1);t(u,n);c(n,0);n=v("td");n.className=
"calCtrl";n.title=S;n.time=sa(a,1,"FullYear");r(n,"click",ta,!1);t(u,n);c(n,0);c(n,0);t(k,x);x=v("table");x.id="calGrid";u=v("tr");t(x,u);for(c=0;7>c;c++)n=v("th"),B(n,l[(da+c)%7]),t(u,n);for(var V,ha,A=new L(w);A.getMonth()==a.getMonth()||A.getMonth()==w.getMonth();){u=v("tr");for(var Bb=0;7>Bb;Bb++){c=[];V=A.getDate();n=A.getMonth();ha=A.getYear();A.getMonth()!=a.getMonth()&&(c[c.length]="calOtherMonth");if(0==A.getDay()||6==A.getDay())c[c.length]="calWeekend";ha==m.getYear()&&n==m.getMonth()&&
V==m.getDate()&&(c[c.length]="calToday");ha==h.getYear()&&n==h.getMonth()&&V==h.getDate()&&(c[c.length]="calSelected");n=v("td");B(n,V);n.className=Pa(c," ");n.time=sa(A);t(u,n);r(n,"click",ta,!1);A.setDate(++V)}t(x,u)}t(k,x);d(k,"calBtn",X,wc);d(k,"calBtn",ea,zb);if(e.firstElementChild)for(a=0;4>a;a++)fb(e,e.firstElementChild);t(e,k)},sa=function(a,d,c){var e=new L(a);d&&(e["set"+c](a["get"+c]()+d),e.getDate()!=a.getDate()&&e.setDate(0));return e.valueOf()},ta=function(a){if(a instanceof z&&a.isTrusted){a=
p("#cal");var d=a.e_input,c=this.time,e=new L(c);"calCtrl"==this.className?Cb(e):(d.value=yb(e,wa(d,"data-format")),E(d,"data-time",c),d.onDateChanged(c),a.style.display="none")}},yb=function(a,d){for(var c,e="",k=0;k<d.length;k++)c=d.charAt(k),e+=Y[c]?Y[c].g(a):c;return e},vb=function(a){a instanceof z&&a.isTrusted&&(a=this.parentElement.firstElementChild,a.repeat=1E3,a.up="calUp"==this.className?1:0,Db(a))},wb=function(a){if(a instanceof z&&a.isTrusted){a=this.parentElement.firstElementChild;a.repeat=
0;var d=Ab(a.value,wa(a,"data-format"));a.onDateChanged(d.getTime())}},Db=function(a){var d=a.repeat;if(d){1E3==d?d-=801:200>d&&(d-=25);100>d&&(d=100);a.repeat=d;var c=Na(a.value,"-");a.selStart||(a.selStart=c+2);var e=ba(a.value,a.selStart,a.selStart+2);e="0"==e.charAt(0)?ca(e.charAt(1),10):ca(e,10);e=a.up?e+1:e-1;a.selStart==c+2?23<e?e="00":0>e?e="23":10>e&&(e="0"+e):59<e?e="00":0>e?e="59":10>e&&(e="0"+e);a.value=ba(a.value,0,a.selStart)+e+ba(a.value,a.selStart+2);H(Db,d,a)}},yc=function(a){var d=
Na(a.value,"-"),c=a.selectionStart;if(c>d)return c<d+5?c=d+2:c<d+8?c=d+5:c<d+12&&(c=d+8),a.selStart=c,a.setSelectionRange(c,c+2),1;a.setSelectionRange(0,d-1);return 0},vc=function(a){if(a instanceof z&&a.isTrusted){a=p("#cal");var d=pa(this);a||(a=v("button"),a.onselectstart=function(){return!1},a.id="cal",t(N,a));if(this.showTime){if(yc(this)){a.style.display="none";return}}else this.blur();0<a.offsetHeight&&a.e_input==this?a.style.display="none":(a.e_input=this,a.style.display="block",Cb(0),a.style.top=
d[1]+this.offsetHeight+"px",a.style.left=d[0]+"px",a.style.display="block",a.focus())}},xb=function(a){a.setHours(0);a.setMinutes(0);a.setSeconds(0);a.setMilliseconds(0);return a};R({id:1},function(a){0!==Na(a.u,ya)&&(I.location.href="chrome://version/");b=a.v;g=a.t;Aa();H(function(){F.title=G("m2")},1E3);sc();a=Q(G("cleaner2"),";");var d=za(".section");for(var c=0;3>c;c++)B(d[c].childNodes[0],a[c]);d=za(".subtitle");for(c=0;3>c;c++)B(d[c],a[c+3]);d=p("#timeType");a=Q(G("cleaner3"),";");B(p("#timeLabel"),
a[0]);for(c=1;12>c;c++){var e=v("option");B(e,a[c]);t(d,e)}d.selectedIndex=b.timeType;r(d,"change",function(k){k instanceof z&&k.isTrusted&&Ta()},!1);sb();a=Q(G("cleaner4"),";");e=Q(G("cleaner5"),";");for(c=0;33>c;c++){d=p("#p"+c);b[d.id]&&E(d,"ac",!0);r(d,"click",pc,!0);d=d.nextElementSibling;"more"==d.className&&(d.title=e[0],r(d,"click",mc,!0),d=d.nextElementSibling);if("run"==d.className||"del"==d.className)d.title=0==c?e[1]:25==c?e[2]:26==c?e[3]:27==c?e[4]:28==c?e[5]:a[c],r(d,"click",kc,!1),
d=d.nextElementSibling;d.title=a[c];B(d,a[c])}r(N,"mousedown",function(k){k instanceof z&&k.isTrusted&&"select"!=k.target.localName&&"input"!=k.target.localName&&"p"!=k.target.localName&&aa(k)},!1);a=za("label");c=0;for(d=a.length;c<d;c++)r(a[c],"mouseup",function(k){k instanceof z&&k.isTrusted&&this.control&&H(function(h){h.control.blur()},100,this)},!1);d=p("#timeType");9==b.timeType?d.classList.add("w32"):d.classList.add("w255");jc();ma(17)})},Ac=function(){var b=["div","button","id","class"],
g=b[0],f=b[1];const l=b[2];b=b[3];const W=[{t:1,l:g,a:[{n:l,v:"host"}],c:[{t:1,l:g,a:[{n:l,v:"page"}],c:[{t:1,l:g,a:[{n:l,v:"tab"},{n:b,v:"custom-scroll"}],c:[{t:1,l:g,a:[{n:l,v:"content"}],c:[{t:1,l:g,a:[{n:b,v:"section"},{n:l,v:"chrome"}],c:[{t:3,v:"i18"},{t:1,l:g,a:[{n:b,v:"float-rigth"}],c:[{t:1,l:"label",a:[{n:l,v:"timeLabel"},{n:"for",v:"timeType"}]},{t:1,l:g,a:[{n:l,v:"time"}],c:[{t:1,l:"input",a:[{n:"type",v:"text"},{n:l,v:"timeInput"},{n:"data-format",v:"F d, Y - h:e:s"}]},{t:1,l:f,a:[{n:b,
v:"calUp"}],c:[{t:1,l:g,a:[{n:b,v:"arrowUp"}]}]},{t:1,l:f,a:[{n:b,v:"calDown"}],c:[{t:1,l:g,a:[{n:b,v:"arrowDown"}]}]}]},{t:1,l:"select",a:[{n:l,v:"timeType"}]}]}]},{t:1,l:g,a:[{n:b,v:"subtitle dev"}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p1"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p1"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p2"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,
v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p2"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p3"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p3"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p4"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p4"}]}]},
{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p5"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p5"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p6"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p6"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p7"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,
v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p7"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p8"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p8"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p9"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p9"}]}]},
{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p10"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p10"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p11"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p11"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p12"}],c:[{t:1,l:g}]},{t:1,
l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p12"}]}]},{t:1,l:g,a:[{n:b,v:"subtitle dev"}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p13"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p13"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p14"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},
{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p14"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p15"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p15"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p16"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p16"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],
c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p17"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p17"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p18"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p18"}]}]},{t:1,l:g,a:[{n:b,v:"subtitle dev"}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p19"}],c:[{t:1,
l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p19"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p20"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p20"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p21"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,
v:"label0 elps"},{n:"for",v:"p21"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p22"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p22"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p23"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p23"}]}]},{t:1,l:g,a:[{n:b,v:"opt dev"}],c:[{t:1,l:f,a:[{n:b,
v:"chk"},{n:l,v:"p24"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:f,a:[{n:b,v:"del"}]},{t:1,l:"label",a:[{n:b,v:"label0 elps"},{n:"for",v:"p24"}]}]},{t:1,l:g,a:[{n:b,v:"section"},{n:l,v:"actions"}],c:[{t:3,v:"i18"}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p0"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"run"}]},{t:1,l:"label",a:[{n:b,v:"label1 elps"},{n:"for",v:"p0"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p27"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,
v:"run"}]},{t:1,l:"label",a:[{n:b,v:"label1 elps"},{n:"for",v:"p27"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p25"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"run"}]},{t:1,l:"label",a:[{n:b,v:"label1 elps"},{n:"for",v:"p25"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p28"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"run"}]},{t:1,l:"label",a:[{n:b,v:"label1 elps"},{n:"for",v:"p28"}]}]},{t:1,l:g,a:[{n:b,v:"section"},{n:l,v:"extra"}],c:[{t:3,v:"i18"}]},{t:1,l:g,a:[{n:b,
v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p26"}],c:[{t:1,l:g}]},{t:1,l:"label",a:[{n:b,v:"label2 elps"},{n:"for",v:"p26"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"web"},{n:l,v:"ghsty"}],c:[{t:1,l:g,a:[{n:b,v:"elps"}]}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p30"}],c:[{t:1,l:g}]},{t:1,l:"label",a:[{n:b,v:"label2 elps"},{n:"for",v:"p30"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"web"},{n:l,v:"sync"}],c:[{t:1,l:g,a:[{n:b,v:"elps"}]}]}]},{t:1,
l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p29"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:"label",a:[{n:b,v:"label1 elps"},{n:"for",v:"p29"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"web"},{n:l,v:"gperms"}],c:[{t:1,l:g,a:[{n:b,v:"elps"}]}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p31"}],c:[{t:1,l:g}]},{t:1,l:f,a:[{n:b,v:"more"}]},{t:1,l:"label",a:[{n:b,v:"label1 elps"},{n:"for",v:"p31"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,
v:"web"},{n:l,v:"skins"}],c:[{t:1,l:g,a:[{n:b,v:"elps"}]}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"chk"},{n:l,v:"p32"}],c:[{t:1,l:g}]},{t:1,l:"label",a:[{n:b,v:"label2 elps"},{n:"for",v:"p32"}]}]},{t:1,l:g,a:[{n:b,v:"opt"}],c:[{t:1,l:f,a:[{n:b,v:"web"},{n:l,v:"news"}],c:[{t:1,l:g,a:[{n:b,v:"elps"}]}]}]},{t:1,l:g,a:[{n:b,v:"opt opt-export"}],c:[{t:1,l:f,a:[{n:b,v:"btns trp"},{n:l,v:"export"}]},{t:1,l:f,a:[{n:b,v:"btns trp"},{n:l,v:"import"}]}]}]},{t:1,l:g,a:[{n:l,v:"shade"}]}]},{t:1,l:g,
a:[{n:l,v:"ftr"}],c:[{t:3,v:" "},{t:1,l:g,a:[{n:l,v:"suprt"}]},{t:1,l:f,a:[{n:b,v:"btns blk start"},{n:l,v:"reset0"}]},{t:1,l:f,a:[{n:b,v:"btns blk mid"},{n:l,v:"reset1"}]},{t:1,l:f,a:[{n:b,v:"btns blk end"},{n:l,v:"reset2"}]},{t:1,l:f,a:[{n:b,v:"btns blk"},{n:l,v:"dev"}]},{t:1,l:g,a:[{n:b,v:"btr"}],c:[{t:1,l:f,a:[{n:b,v:"btn yel"},{n:l,v:"HsTy"}]},{t:1,l:f,a:[{n:b,v:"btn red"},{n:l,v:"clr"}]}]}]},{t:1,l:g,a:[{n:l,v:"msg"}]},{t:1,l:g,a:[{n:l,v:"hdr"},{n:b,v:"bg0"}],c:[{t:1,l:f,a:[{n:l,v:"logo"}]},
{t:1,l:f,a:[{n:l,v:"ytest"}]},{t:1,l:g,a:[{n:b,v:"btr"}],c:[{t:1,l:f,a:[{n:l,v:"Crbs"}]},{t:1,l:f,a:[{n:l,v:"help"},{n:b,v:"btn yel"}]}]}]}]},{t:1,l:g,a:[{n:l,v:"alert"},{n:b,v:"nvw"}],c:[{t:1,l:"b",c:[{t:3,v:"Click&Clean"}]},{t:1,l:"p"},{t:1,l:"p",a:[{n:b,v:"text-right"}],c:[{t:1,l:f,a:[{n:b,v:"btn yel elps"}]},{t:1,l:f,a:[{n:b,v:"btn yel elps"}]}]}]}]}],da=function(S,oa){for(var D,X,ea,K=0,Y=oa.length;K<Y;K++)if(D=oa[K],1==D.t){X=D.n?Tb("http://www.w3.org/2000/svg",D.l):v(D.l);for(var pa=0,J=D.a&&
D.a.length||0;pa<J;pa++)ea=D.a[pa],E(X,ea.n,ea.v);D.c&&da(X,D.c);t(S,X)}else 3==D.t&&t(S,Ub(D.v))},na=ab();g=v("link");f=bb("body");N=xa&&Da?xa(f,{mode:"closed"}):f;r(g,"load",function(S){S instanceof z&&S.isTrusted&&(da(na,W),t(N,na),zc())},!1);E(g,"rel","stylesheet");E(g,"href",ya+"fcss936/ecleaner936.css");t(N,g)},Bc=function(b){b instanceof z&&b.isTrusted&&Ac()};if($b(I.location.href,ya)){for(const b of Object.getOwnPropertyNames(chrome))if("object"===typeof chrome[b])try{Object.defineProperty(chrome,
b,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(g){}Object.defineProperty(chrome.runtime,"connect",{configurable:!1,enumerable:!1,writable:!1,value:Gb});delete chrome.Event;delete ua.write;delete ua.writeIn;delete ua.createElement;delete ua.createElementNS;delete O.innerHTML;delete O.outerHTML;delete I.fetch;delete I.BackgroundFetchManager;delete I.XMLDocument;delete I.XMLHttpRequest;delete I.DOMParser;delete I.DOMImplementation;r(I,"DOMContentLoaded",Bc,!0)}})();
