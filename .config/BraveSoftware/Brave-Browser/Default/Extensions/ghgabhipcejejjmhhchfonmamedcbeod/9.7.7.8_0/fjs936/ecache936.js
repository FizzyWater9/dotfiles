// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2021 Vlad & Serge Strukoff. All Rights Reserved.
// Minified by Google Closure Compiler 20210406
'use strict';(function(){var W;const w=window;var n=document,ba=function(){};const p=Function.prototype.call,A=Event,qa=Image,ja="CustomElementRegistry"in w,{runtime:{sendMessage:ka,connect:ra},i18n:{getMessage:sa}}=chrome,X=Document.prototype,I=Element.prototype,ca=String.prototype,F=n.createElement.bind(n),ta=n.createElementNS.bind(n),la=n.querySelector.bind(n),ma=n.createDocumentFragment.bind(n),na=n.createTextNode.bind(n),J=p.bind(EventTarget.prototype.addEventListener),ua=p.bind(I.hasAttribute),
Y=p.bind(I.getAttribute),G=p.bind(I.setAttribute),q=p.bind(Node.prototype.appendChild),da=I.attachShadow?p.bind(I.attachShadow):null,va=p.bind(DocumentFragment.prototype.querySelector);p.bind(HTMLMediaElement.prototype.play);const wa=p.bind(ca.slice),t=p.bind(ca.indexOf),ea=p.bind(ca.split);p.bind(Array.prototype.indexOf);const xa=JSON.stringify.bind(null),D=parseInt,u=(n=Object.getOwnPropertyDescriptor(Node.prototype,"textContent"))&&n.set?p.bind(n.set):ba,ya=chrome.runtime.getURL(""),H=function(b,
d){b=xa(b);d?ka(b,d):ka(b)},l=function(b){return da&&ja?va(W,b):la(b)},Aa=function(){var b,d=0,K=[0],v=0,x,B;const y=function(a){l("#shade").style.display=a?"block":"none";l("#clear").firstElementChild.src=a?"fimg936/wipe.gif":"fimg936/del1.png"},m=function(a){a instanceof A&&a.isTrusted&&(y(1),fa(),H({id:15,v:"0078"},function(c,f){c=c||0;0==c?y(0):(b=ea(c,"\n"),oa(),R(1))}))},P=function(a){a instanceof A&&a.isTrusted&&(a=Y(this.parentElement,"data-key"),H({id:9,v:{u:a}},null))},S=function(a){a instanceof
A&&a.isTrusted&&(a=Y(this.parentElement.parentElement,"data-key"),H({id:9,v:{u:"chrome://view-http-cache/"+a}},null))},T=function(a){a instanceof A&&a.isTrusted&&(y(1),H({id:19,v:{since:-1},v2:{cache:!0}},function(){fa();y(0)}))},ha=function(a){a instanceof A&&a.isTrusted&&H({id:15,v:"0079",v2:Y(this,"fname")},null)},U=function(a){a instanceof A&&a.isTrusted&&0<v&&(v--,d=K[v],R(0))},ia=function(a){a instanceof A&&a.isTrusted&&d<b.length&&(v++,K[v]=d,R(0))},oa=function(){for(var a,c={image:"jpg jpeg gif png ico webp svg bmp".split(" "),
video:"mp4 mp4v m4v m4s ogv ogm webm mov avi mpeg mpg 3gp flv m1v m2v m4e mkv swf".split(" "),audio:"m4a ogg mp3 oga wav amr flac".split(" "),text:"txt xml htm html js json css".split(" ")},f,k=[" ","?","#"],g,e,h=0,r=b.length;h<r;h+=4)if(a=b[h+1],0==a){a=b[h]+" ";for(var L in c){f=c[L];for(var E=e=0,M=f.length;E<M;E++){g=f[E];for(var N=0,z=k.length;N<z;N++)if(e=k[N],e=t(a,"."+g+e),0<e){"js"==g&&(g="javascript");b[h+1]=L+"/"+g;break}if(0<e)break}if(0<e)break}}},aa=function(a,c,f,k,g){var e=F("div"),
h=F("div"),r=F("div"),L=F("div"),E=F("div"),M=F("div");e.className="item";G(e,"data-ct",f);G(e,"data-b",g);r.className="iftr";L.className="ibtn idat";E.className="ibtn iexp";M.className="iinf";G(e,"data-key",c);L.title=Q[13];q(e,h);q(e,r);q(e,M);"0"!=k&&(G(E,"fname",k),q(r,E),E.title=Q[14],J(E,"click",ha,!1));q(r,L);q(r,na(za(c)));if(-1<f.search(/image/)&&1048577>g){var N=new qa,z,C,Z,V;N.onload=function(){z=this.width;C=this.height;0<z&&0<C?(1024>z&&1024>C?(176<z||110<C?1.6<z/C?(V=D(176*C/z,10),
Z=176,this.style.marginTop=D((110-V)/2,10)+"px"):(Z=D(110*z/C,10),V=110):(Z=z,V=C,this.style.marginTop=D((110-C)/2,10)+"px"),this.style.width=Z+"px",this.style.height=V+"px",h.className="iimg",q(h,N)):(h.className="itxt",u(h,f)),u(M,z+"x"+C+" "+O(g))):(h.className="itxt",u(h,f),u(M,O(g)))};N.src=c}else h.className="itxt",u(h,f),u(M,O(g));J(h,"click",P,!1);J(L,"click",S,!1);q(a,e)},R=function(a){y(1);var c=l("#search").value,f=Y(B,"data-ct"),k=ma(),g;if(1>c.length)if("/"==f)for(g=0;d<b.length&&(aa(k,
b[d],b[d+1],b[d+2],b[d+3]),g++,d+=4,60!=g););else{g=0;for(var e;d<b.length&&(e=b[d+1],-1<t(e,f)&&(aa(k,b[d],b[d+1],b[d+2],b[d+3]),g++),d+=4,60!=g););}else if("/"==f)for(g=0;d<b.length&&(e=b[d],-1<t(e,c)&&(aa(k,b[d],b[d+1],b[d+2],b[d+3]),g++),d+=4,60!=g););else{g=0;for(var h;d<b.length&&(e=b[d],h=b[d+1],-1<t(e,c)&&-1<t(h,f)&&(aa(k,b[d],b[d+1],b[d+2],b[d+3]),g++),d+=4,60!=g););}u(l("#content"),"");q(l("#content"),k);if(a)if(1>c.length)if("/"==f){f=c=0;for(a=3;a<b.length;a+=4)f+=D(b[a],10),c++;x=c+" items / "+
O(f)}else{for(e=k=c=0;e<b.length;e+=4)a=b[e+1],-1<t(a,f)&&(k+=D(b[e+3],10),c++);x=c+" items / "+O(k)}else if("/"==f){for(e=k=f=0;e<b.length;e+=4)a=b[e],-1<t(a,c)&&(k+=D(b[e+3],10),f++);x=f+" items / "+O(k)}else{for(var r=h=a=0;r<b.length;r+=4)k=b[r],e=b[r+1],-1<t(k,c)&&-1<t(e,f)&&(h+=D(b[r+3],10),a++);x=a+" items / "+O(h)}c=60*v;f=c+g;u(l("#info"),c+"-"+f+" of "+x);l("#prev").style.opacity=1>c?.5:1;l("#next").style.opacity=f==D(x,10)?.5:1;u(l("#info2"),v+1);l("#tab").scrollTop=0;y(0)},fa=function(){v=
d=0;K=[0];b=[];u(l("#info"),"0 items / 0 MB");u(l("#info2"),"-");u(l("#content"),Q[15]);l("#next").style.opacity=l("#prev").style.opacity=.5},pa=function(a){a instanceof A&&a.isTrusted&&(v=d=0,K=[0],ua(this,"data-ct")&&(B.className="btn nav",this.className="btn nav on",B=this),R(1))},O=function(a){return 1048577>a?(a/1024).toFixed(1)+"KB":(a/1048576).toFixed(1)+"MB"},za=function(a){var c=t(a,":")+3,f=t(a,"/",c);return wa(a,c,f)};y(1);var Q=ea(sa("cache"),";");(function(){function a(k,g){J(c,"click",
g,!1);c.title=Q[k];c=c.nextElementSibling}var c;B=c=l("#hdr").firstElementChild;for(var f=0;7>f;f++)a(f,pa);a(7,m);a(8,T);J(c,"keyup",pa,!1);G(c,"placeholder",Q[9]);c=l("#prev");a(10,U);c.title=Q[11];c=c.nextElementSibling;a(12,ia)})();H({id:15,v:"0078"},function(a,c){a=a||0;0==a?(fa(),y(0)):(b=ea(a,"\n"),oa(),R(1))})},Ba=function(){const b=[{t:1,l:"div",a:[{n:"id",v:"host"}],c:[{t:1,l:"div",a:[{n:"id",v:"page"}],c:[{t:1,l:"div",a:[{n:"id",v:"hdr"}],c:[{t:1,l:"button",a:[{n:"class",v:"btn nav on"},
{n:"data-ct",v:"/"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/ok1.png"}]}]},{t:1,l:"button",a:[{n:"class",v:"btn nav"},{n:"data-ct",v:"image/"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/images.png"}]}]},{t:1,l:"button",a:[{n:"class",v:"btn nav"},{n:"data-ct",v:"video"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/videos.png"}]}]},{t:1,l:"button",a:[{n:"class",v:"btn nav"},{n:"data-ct",v:"audio/"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/audio.png"}]}]},
{t:1,l:"button",a:[{n:"class",v:"btn nav"},{n:"data-ct",v:"javascript"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/js.png"}]}]},{t:1,l:"button",a:[{n:"class",v:"btn nav"},{n:"data-ct",v:"css"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/css.png"}]}]},{t:1,l:"button",a:[{n:"class",v:"btn nav"},{n:"data-ct",v:"text/html"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/html.png"}]}]},{t:1,l:"button",a:[{n:"class",v:"btn blk"},{n:"id",v:"refresh"}],c:[{t:1,
l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/refresh1.png"}]}]},{t:1,l:"button",a:[{n:"class",v:"btn blk"},{n:"id",v:"clear"}],c:[{t:1,l:"img",a:[{n:"class",v:"bmg"},{n:"src",v:"fimg936/del1.png"}]}]},{t:1,l:"input",a:[{n:"id",v:"search"},{n:"type",v:"text"}]}]},{t:1,l:"div",a:[{n:"id",v:"menu"}],c:[{t:1,l:"div",a:[{n:"id",v:"info"}]},{t:1,l:"div",a:[{n:"id",v:"navigation"}],c:[{t:1,l:"div",a:[{n:"id",v:"prev"}]},{t:1,l:"div",a:[{n:"id",v:"info2"}]},{t:1,l:"div",a:[{n:"id",v:"next"}]}]}]},{t:1,
l:"div",a:[{n:"id",v:"tab"}],c:[{t:1,l:"div",a:[{n:"id",v:"content"}]}]},{t:1,l:"div",a:[{n:"id",v:"whiten"}]},{t:1,l:"div",a:[{n:"id",v:"shade"}]}]},{t:1,l:"div",c:[{t:1,l:"span",a:[{n:"id",v:"textMetrics"}]}]},{t:1,l:"div",a:[{n:"id",v:"host"}],c:[]}]}],d=function(B,y){for(var m,P,S,T=0,ha=y.length;T<ha;T++)if(m=y[T],1==m.t){P=m.n?ta("http://www.w3.org/2000/svg",m.l):F(m.l);for(var U=0,ia=m.a&&m.a.length||0;U<ia;U++)S=m.a[U],G(P,S.n,S.v);m.c&&d(P,m.c);q(B,P)}else 3==m.t&&q(B,na(m.v))},K=la("body"),
v=ma(),x=F("link");W=da&&ja?da(K,{mode:"closed"}):K;J(x,"load",function(B){B instanceof A&&B.isTrusted&&(d(v,b),q(W,v),Aa())},!1);G(x,"rel","stylesheet");G(x,"href",ya+"fcss936/ecache936.css");q(W,x)};ba=function(b){b instanceof A&&b.isTrusted&&(H({id:20,i:12},null),H({id:2},function(d){0===t(d,"https://www.hotcleaner.com/")&&Ba()}))};if(w.top==w)w.location.replace("https://www.hotcleaner.com/cache-viewer.html");else{for(const b of Object.getOwnPropertyNames(chrome))if("object"===typeof chrome[b])try{Object.defineProperty(chrome,
b,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(d){}Object.defineProperty(chrome.runtime,"connect",{configurable:!1,enumerable:!1,writable:!1,value:ra});delete chrome.Event;delete X.write;delete X.writeIn;delete X.createElement;delete X.createElementNS;delete I.innerHTML;delete I.outerHTML;delete w.fetch;delete w.BackgroundFetchManager;delete w.XMLDocument;delete w.XMLHttpRequest;delete w.DOMParser;delete w.DOMImplementation;J(w,"DOMContentLoaded",ba,!0)}})();
