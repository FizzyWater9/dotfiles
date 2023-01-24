// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2021 Vlad & Serge Strukoff. All Rights Reserved.
// Minified by Google Closure Compiler 20210406
'use strict';(function(){var u;const b=window;var d=document,c=Function.prototype.call;const p=Event,N=Uint8Array,O=Uint32Array,E="CustomElementRegistry"in b?!0:!1,{runtime:{sendMessage:F,connect:P},i18n:{getMessage:Q}}=chrome,v=Document.prototype,q=Element.prototype,G=d.createElement.bind(d),R=d.createElementNS.bind(d),H=d.createTextNode.bind(d),S=d.createDocumentFragment.bind(d),I=d.querySelector.bind(d),w=c.bind(EventTarget.prototype.addEventListener),x=c.bind(q.setAttribute),r=c.bind(Node.prototype.appendChild),
y=q.attachShadow?c.bind(q.attachShadow):null,T=c.bind(DocumentFragment.prototype.querySelector),U=c.bind(HTMLInputElement.prototype.select),V=c.bind(HTMLElement.prototype.focus),J=b.crypto.getRandomValues.bind(b.crypto),W=c.bind(Number.prototype.toString),X=c.bind(String.prototype.split),Y=c.bind(String.prototype.slice);d=c.bind(String.prototype.startsWith);const Z=c.bind(String.prototype.toUpperCase),aa=c.bind(String.prototype.charAt),ba=JSON.stringify,ca=parseInt,da=isNaN,z=Object.getOwnPropertyDescriptor(Node.prototype,
"textContent");z&&z.set&&c.bind(z.set);const K=chrome.runtime.getURL(""),A=function(a,e){a=ba(a);e?F(a,e):F(a)},ea=function(a){a instanceof p&&a.isTrusted&&A({id:9,v:{u:"https://www.hotcleaner.com/tips-for-creating-secure-and-easy-to-remember-passwords.html"}},null)},B=function(a){return y&&E?T(u,a):I(a)},L=function(){var a=B("#pass"),e=ca(B("#length").value,10),h=new O(25);J(h);for(var g=0;g<h.length;g++)k+=W(h[g],36);var k=Y(k,-e);h=new N(1);var l="";for(g=0;g<k.length;g++)e=aa(k,g),da(e)&&(J(h),
128<h[0]&&(e=Z(e))),l+=e;a.value=l;U(a)},fa=function(a){a instanceof p&&a.isTrusted&&L()},ha=function(a){a instanceof p&&a.isTrusted&&(a=B("#pass"))&&(A({id:50,v:a.value},null),V(a))},ka=function(){const a=X(Q("pgen"),";"),e=[{t:1,l:"div",a:[{n:"id",v:"box"}],c:[{t:1,l:"div",a:[{n:"id",v:"hdr"}],c:[{t:1,l:"span",a:[{n:"i18",v:0}]},{t:3,v:" "},{t:1,l:"button",a:[{n:"id",v:"help"},{n:"ec",v:ea}],c:[{t:3,v:"Learn more …"}]}]},{t:1,l:"div",a:[{n:"id",v:"screen"}],c:[{t:1,l:"input",a:[{n:"type",v:"text"},
{n:"id",v:"pass"},{n:"spellcheck",v:"false"}]}]},{t:1,l:"div",a:[{n:"id",v:"pan"}],c:[{t:1,l:"label",c:[{t:1,l:"span",a:[{n:"i18",v:1}]},{t:1,l:"input",a:[{n:"type",v:"number"},{n:"id",v:"length"},{n:"value",v:"12"},{n:"min",v:"5"},{n:"max",v:"99"}]}]}]},{t:1,l:"div",a:[{n:"id",v:"ftr"}],c:[{t:1,l:"button",a:[{n:"i18",v:2},{n:"ec",v:fa},{n:"class",v:"red"},{n:"id",v:"gen"},{n:"title",v:"Generate new password"}]},{t:1,l:"button",a:[{n:"i18",v:3},{n:"ec",v:ha},{n:"class",v:"red"},{n:"id",v:"copy"},
{n:"title",v:"Copy new generated password to clipboard"}]}]}]}],h=function(t,M){for(var n,m,f,C=0,ia=M.length;C<ia;C++)if(f=M[C],1==f.t){n=f.n?R("http://www.w3.org/2000/svg",f.l):G(f.l);for(var D=0,ja=f.a&&f.a.length||0;D<ja;D++)m=f.a[D],"ec"===m.n?w(n,"click",m.v,!1):"i18"===m.n?r(n,H(a[m.v])):x(n,m.n,m.v);f.c&&h(n,f.c);r(t,n)}else 3==f.t&&r(t,H(f.v))},g=I("body"),k=S(),l=G("link");u=y&&E?y(g,{mode:"closed"}):g;w(l,"load",function(t){t instanceof p&&t.isTrusted&&(h(k,e),r(u,k),L())},!1);x(l,"rel",
"stylesheet");x(l,"href",K+"fcss936/epgen936.css");r(u,l)};c=function(a){a instanceof p&&a.isTrusted&&(A({id:20,i:21},null),a=b.devicePixelRatio,b.resizeTo(375*a+(b.outerWidth-b.innerWidth*a),235*a+(b.outerHeight-b.innerHeight*a)),ka())};if(d(b.location.href,K)){for(const a of Object.getOwnPropertyNames(chrome))if("object"===typeof chrome[a])try{Object.defineProperty(chrome,a,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(e){}Object.defineProperty(chrome.runtime,"connect",{configurable:!1,
enumerable:!1,writable:!1,value:P});delete chrome.Event;delete v.write;delete v.writeIn;delete v.createElement;delete v.createElementNS;delete q.innerHTML;delete q.outerHTML;delete b.fetch;delete b.BackgroundFetchManager;delete b.XMLDocument;delete b.XMLHttpRequest;delete b.DOMParser;delete b.DOMImplementation;w(b,"DOMContentLoaded",c,!0)}})();
