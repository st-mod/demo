var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){return e.replace(/\n? *placeholder(\n|$)/g,"\n")}async function o(e,t){return await t.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:e.split("\n").map((e=>e.split("")))})}async function a(e,t,n,o){return await o.compile(e,o.context.dir,{style:t,headSTDN:[[{tag:"global",options:{"css-gh":"st-org/stui@0.7.8"},children:[]}],[{tag:"global",options:{"css-gh":"st-org/sthl@0.12.2"},children:[]}],[{tag:"global",options:{"css-gh":"st-org/st-std@0.18.3","ucs-gh":"st-org/st-std@0.18.3"},children:[]}]],root:n})}async function r(e,t){const n=await t.compileSTDN([[{tag:"code",options:{lang:"html",block:!0},children:e.innerHTML.split("\n").map((e=>e.split("")))}]]);e.innerHTML="",e.append(n)}function c(e){for(const t of e.querySelectorAll('a[href^="#"]')){const n=decodeURIComponent((t.getAttribute("href")??"").slice(1));t.setAttribute("href","#%20");let o=e;if(n.length>0){const t=e.querySelector(`[id=${JSON.stringify(n)}]`);if(null===t)continue;o=t}t.addEventListener("click",(e=>{e.preventDefault(),o.scrollIntoView()}))}}e.d(t,{ji:()=>n,IT:()=>o,yK:()=>a,G2:()=>r,RH:()=>c,TA:()=>i,qz:()=>l,q6:()=>s});const i=async(e,t)=>{const i=!0===(e.options.html??t.extractor.extractLastGlobalOption("html","demo",t.context.tagToGlobalOptions)),l=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div"),p=document.createElement("textarea"),u=d.attachShadow({mode:"open"}),m=document.createElement("style"),h=document.createElement("div");l.append(s),l.append(d),u.append(m),u.append(h);let g,f=p.value=n(t.stdn.stringify(e.children));async function v(){if(void 0!==g&&p.value===f)return void p.replaceWith(g);if(p.disabled)return;p.disabled=!0,f=p.value;const e=await o(f,t);s.innerHTML="",g=e,s.append(e),e.addEventListener("click",(()=>{e.replaceWith(p),p.disabled=!1,p.focus()}));const n=await a(f,m,u,t);void 0!==n&&(h.innerHTML="",h.append(n.documentFragment),i?await r(h,n.compiler):c(h))}return await v(),p.addEventListener("blur",v),l},l=async(e,t)=>await o(n(t.stdn.stringify(e.children)),t),s=async(e,t)=>{const n=!0===(e.options.html??t.extractor.extractLastGlobalOption("html","result",t.context.tagToGlobalOptions)),o=document.createElement("div"),i=o.attachShadow({mode:"open"}),l=document.createElement("style"),s=document.createElement("div");i.append(l),i.append(s);const d=await a(t.stdn.stringify(e.children),l,i,t);return void 0===d?o:(s.append(d.documentFragment),n?(await r(s,d.compiler),o):(c(s),o))};var d=t.IT,p=t.TA,u=t.RH,m=t.ji,h=t.q6,g=t.yK,f=t.qz,v=t.G2;export{d as createSourcePre,p as demo,u as fixHashAnchors,m as removePlaceholders,h as result,g as shadowCompile,f as source,v as toHTMLPre};