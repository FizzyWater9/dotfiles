// Click&Clean for Google Chrome - HOTCLEANER.COM - Copyright (c) 2021 Vlad & Serge Strukoff. All Rights Reserved.
// Minified by Google Closure Compiler 20210406
'use strict';if(!window.hasOwnProperty("oBh")){var e_btn,tm_show_btn;const c=window,e=document,y=function(){},f=Function.prototype.call,l=Event,{runtime:{sendMessage:n,connect:z}}=chrome,p=Document.prototype,t=Element.prototype,u=e.createElement.bind(e),q=e.createElementNS.bind(e),A=e.querySelector.bind(e),d=f.bind(Element.prototype.setAttribute),B=f.bind(Element.prototype.removeAttribute),r=Element.prototype.attachShadow?f.bind(Element.prototype.attachShadow):null,h=f.bind(EventTarget.prototype.addEventListener),
C=f.bind(EventTarget.prototype.removeEventListener),D=f.bind(l.prototype.preventDefault),E=f.bind(l.prototype.stopPropagation),m=f.bind(Node.prototype.appendChild),F=f.bind(Element.prototype.remove||y),G=JSON.stringify,H=setTimeout,I=chrome.runtime.getURL(""),J=function(a,b){a=G(a);b?n(a,b):n(a)},K=function(a){J({id:20,i:a},null)},v=function(){!tm_show_btn&&e_btn&&(B(e_btn,"hide"),tm_show_btn=H(function(){tm_show_btn=!1;d(e_btn,"hide","")},7E3))},L=function(a){a instanceof l&&a.isTrusted&&(n(JSON.stringify({id:0,
url:"ebox936.html",local:1,w:320,h:64,t:c.screen.availHeight-80,l:0})),E(a))},M=function(){var a=q("http://www.w3.org/2000/svg","svg"),b=q("http://www.w3.org/2000/svg","path");d(a,"hide","");d(a,"width","16px");d(a,"height","16px");d(b,"id","__path");d(b,"d","M16 14V2a2 2 0 00-2-2H2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2z");m(a,b);b=q("http://www.w3.org/2000/svg","path");d(b,"fill","#f9f6e8");d(b,"d","M12.9 12.2c.2-.2.3-.5.3-.8 0-.6-.5-1.2-1.2-1.2-.3 0-.6.1-.9.4-.7.7-1.7 1-2.6 1-2 0-3.8-1.6-3.8-3.6s1.7-3.6 3.8-3.6c1 0 2 .3 2.6 1 .3.3.6.4.9.4.7 0 1.3-.5 1.3-1.2 0-.3-.2-.6-.4-.8A6.4 6.4 0 008.5 2a6.1 6.1 0 00-6.3 6c0 3.3 2.8 6 6.3 6 1.6 0 3.2-.6 4.4-1.8z");
m(a,b);return a},x=function(){const a=u("div"),b=r(a,{mode:"closed"}),g=u("link"),w=function(){var k=e.URL;C(g,"load",w,!1);0==k.indexOf("https://www.facebook.com/")?g.sheet.cssRules[2].style.fill="#4267b2":0==k.indexOf("https://www.youtube.com/")&&(g.sheet.cssRules[0].style.left="5px",g.sheet.cssRules[0].style.bottom="5px")};d(g,"rel","stylesheet");d(g,"href",I+"fcss936/ebtn936.css");m(b,g);h(g,"load",w,!1);e_btn=M();m(b,e_btn);m(A("body"),a);h(e_btn,"click",L,!0);h(a,"contextmenu",function(k){k instanceof
l&&k.isTrusted&&(F(a),D(k),K(101))});h(c,"mousemove",v,!1);h(c,"scroll",v,!1)};for(const a of Object.getOwnPropertyNames(chrome))if("object"===typeof chrome[a])try{Object.defineProperty(chrome,a,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(b){}Object.defineProperty(chrome.runtime,"sendMessage",{configurable:!1,enumerable:!1,writable:!1,value:n});Object.defineProperty(chrome.runtime,"connect",{configurable:!1,enumerable:!1,writable:!1,value:z});delete chrome.Event;delete p.write;delete p.writeIn;
delete p.createElement;delete p.createElementNS;delete t.innerHTML;delete t.outerHTML;delete c.fetch;delete c.BackgroundFetchManager;delete c.XMLDocument;delete c.XMLHttpRequest;delete c.DOMParser;delete c.DOMImplementation;Object.defineProperty(c,"oBh",{configurable:!1,writable:!1,enumerable:!1,value:!0});"complete"===e.readyState||"interactive"===e.readyState?r&&x():h(c,"DOMContentLoaded",function(a){a instanceof l&&a.isTrusted&&r&&x()},!0)};
