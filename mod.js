var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e){return e.replace(/\n? *placeholder(\n|$)/g,"\n")}e.d(t,{A0:()=>n,TA:()=>o,qz:()=>i});const o=async(e,t)=>{const o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),l=document.createElement("textarea"),r=a.attachShadow({mode:"open"}),c=document.createElement("style"),s=document.createElement("div");o.append(i),o.append(a),r.append(c),r.append(s);const d=!0===(e.options.html??t.extractor.extractLastGlobalOption("html","demo",t.context.tagToGlobalOptions));let p,m;async function u(){if(void 0!==m&&l.value===p)return void l.replaceWith(m);if(l.disabled)return;l.disabled=!0,p=l.value;const e=await t.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:p.split("\n").map((e=>e.split("")))});i.innerHTML="",m=e,i.append(e),e.addEventListener("click",(()=>{e.replaceWith(l),l.disabled=!1,l.focus()}));const n=await t.compile(p,t.context.dir,{style:c,headSTDN:[[{tag:"global",options:{"css-gh":"st-org/stui@0.5.0"},children:[]}],[{tag:"global",options:{"css-gh":"st-org/sthl@0.7.0"},children:[]}],[{tag:"global",options:{"css-gh":"st-org/st-std@0.14.0","ucs-gh":"st-org/st-std@0.14.0"},children:[]}]]});if(void 0!==n){if(s.innerHTML="",s.append(n.documentFragment),d){const e=await n.compiler.compileSTDN([[{tag:"code",options:{lang:"html",block:!0},children:s.innerHTML.split("\n").map((e=>e.split("")))}]]);return s.innerHTML="",void s.append(e)}for(const e of s.querySelectorAll('a[href^="#"]')){const t=decodeURIComponent((e.getAttribute("href")??"").slice(1));e.setAttribute("href","#%20");let n=s;if(t.length>0){const e=s.querySelector(`[id=${JSON.stringify(t)}]`);if(null===e)continue;n=e}e.addEventListener("click",(e=>{e.preventDefault(),n.scrollIntoView()}))}}}return l.value=n(t.stdn.stringify(e.children)),await u(),l.addEventListener("blur",u),o},i=async(e,t)=>await t.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:n(t.stdn.stringify(e.children)).split("\n").map((e=>e.split("")))});var a=t.TA,l=t.A0,r=t.qz;export{a as demo,l as removePlaceholder,r as source};