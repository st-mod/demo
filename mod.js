var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){return e.replace(/\n? *placeholder(\n|$)/g,"\n")}async function a(e,t){return await t.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:e.split("\n").map((e=>e.split("")))})}async function o(e,t,n,a){return await a.compile(e,a.context.dir,{style:t,headSTDN:[[{tag:"global",options:{"mod-gh":"st-org/st-std@0.23.3"},children:[]}]],root:n})}async function r(e,t){const n=await t.compileSTDN([[{tag:"code",options:{lang:"html",block:!0},children:e.innerHTML.split("\n").map((e=>e.split("")))}]]);e.innerHTML="",e.append(n)}function c(e){for(const t of e.querySelectorAll('a[href^="#"]')){const n=decodeURIComponent((t.getAttribute("href")??"").slice(1));t.setAttribute("href","#%20");let a=e;if(n.length>0){const t=e.querySelector(`[id=${JSON.stringify(n)}]`);if(null===t)continue;a=t}t.addEventListener("click",(e=>{e.preventDefault(),a.scrollIntoView()}))}}e.d(t,{ji:()=>n,IT:()=>a,yK:()=>o,G2:()=>r,RH:()=>c,TA:()=>i,qz:()=>l,q6:()=>d});const i=async(e,t)=>{const i=!0===(e.options.html??t.extractor.extractLastGlobalOption("html","demo",t.context.tagToGlobalOptions)),l=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),p=document.createElement("textarea"),m=s.attachShadow({mode:"open"}),u=document.createElement("style"),h=document.createElement("div");d.classList.add("source"),s.classList.add("result"),l.append(d),l.append(s),m.append(u),m.append(h);let f,v=p.value=n(t.stdn.stringify(e.children));async function y(){if(void 0!==f&&p.value===v)return void p.replaceWith(f);if(p.disabled)return;p.disabled=!0,v=p.value;const e=await a(v,t);d.innerHTML="",f=e,d.append(e),e.addEventListener("click",(()=>{e.replaceWith(p),p.disabled=!1,p.focus()}));const n=await o(v,u,m,t);void 0!==n&&(h.innerHTML="",h.append(n.documentFragment),i?await r(h,n.compiler):c(h))}return await y(),p.addEventListener("blur",y),l},l=async(e,t)=>await a(n(t.stdn.stringify(e.children)),t),d=async(e,t)=>{const n=!0===(e.options.html??t.extractor.extractLastGlobalOption("html","result",t.context.tagToGlobalOptions)),a=document.createElement("div"),i=a.attachShadow({mode:"open"}),l=document.createElement("style"),d=document.createElement("div");i.append(l),i.append(d);const s=await o(t.stdn.stringify(e.children),l,i,t);return void 0===s?a:(d.append(s.documentFragment),n?(await r(d,s.compiler),a):(c(d),a))};var s=t.IT,p=t.TA,m=t.RH,u=t.ji,h=t.q6,f=t.yK,v=t.qz,y=t.G2;export{s as createSourcePre,p as demo,m as fixHashAnchors,u as removePlaceholders,h as result,f as shadowCompile,v as source,y as toHTMLPre};