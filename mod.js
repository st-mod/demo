var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t={}){return Array.isArray(e)?function(e,{addDecorativeComma:t,addDecorativeSpace:a,indentLevel:r,indentTarget:o,useUnquotedString:i}){t=t??"never",o=o??"none",r=r??0;const s=[],c=e.length>1&&("all"===o||"array"===o||"arrayInObjectAndThis"===o),d=r+(c?1:0);"arrayInObjectAndThis"===o&&(o="arrayInObject");const l="always"===a||"afterComma"===a?", ":",";let u;for(let r=0;r<e.length;r++){let p;p=void 0===u?n(e[r],{addDecorativeComma:t,addDecorativeSpace:a,indentTarget:o,indentLevel:d,useUnquotedString:i}):u,r!==e.length-1&&(u=n(e[r+1],{addDecorativeComma:t,addDecorativeSpace:a,indentTarget:o,indentLevel:d,useUnquotedString:i})),c||r===e.length-1||"always"!==t&&(p.endsWith("'")||p.endsWith("}")||p.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?s.push(p):s.push(p+l)}if(c){let e="\n";for(let t=0;t<r;t++)e+="    ";let t=e;return r>=0&&(t+="    "),`[${t}${s.join(t)}${e}]`}return`[${s.join("")}]`}(e,t):"object"==typeof e?function(e,{addDecorativeComma:t,addDecorativeSpace:a,indentLevel:r,indentTarget:o,useUnquotedString:i}){t=t??"never",o=o??"none",r=r??0;const s=[],c=Object.keys(e),d=c.length>1&&("all"===o||"object"===o),l=r+(d?1:0);"arrayInObject"===o&&(o="arrayInObjectAndThis");const u="always"===a||"afterComma"===a?", ":",",p="always"===a||"afterKey"===a?" ":"";for(let r=0;r<c.length;r++){const h=c[r];if(null===h.match(/^[\w-]+$/))continue;const m=e[h];if(void 0===m)continue;const f=n(m,{addDecorativeComma:t,addDecorativeSpace:a,indentTarget:o,indentLevel:l,useUnquotedString:"__"===h&&"string"==typeof m?void 0:i});f.startsWith("'")||f.startsWith("[")||f.startsWith("{")?d||r===c.length-1||"always"!==t&&"inObject"!==t?s.push(("__"===h?"":h+p)+f):s.push(("__"===h?"":h+p)+f+u):"true"===f?d||r===c.length-1?s.push(h):s.push(h+u):d||r===c.length-1?s.push(`${h} ${f}`):s.push(`${h} ${f}${u}`)}if(d){let e="\n";for(let t=0;t<r;t++)e+="    ";let t=e;return r>=0&&(t+="    "),`{${t}${s.join(t)}${e}}`}return`{${s.join("")}}`}(e,t):"number"==typeof e?e.toString():"string"==typeof e?function(e,t){if(t&&e.length>0&&e[0].trim().length>0&&(1===e.length||e[e.length-1].trim().length>0)&&!/[\n\r',\[\]{}]/.test(e)&&"true"!==e&&"false"!==e&&!/^(?:[+-]?Infinity|NaN|0x[\dA-Fa-f]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)&&!e.startsWith("//")&&!e.startsWith("/*"))return e;const n=["'"];for(let t=0;t<e.length;t++){const a=e[t];if("\\"!==a)"'"!==a?n.push(a):n.push("\\'");else{if(t===e.length-1){n.push("\\\\");break}const r=e[t+1];if("\\"===r||"'"===r){n.push("\\\\");continue}n.push(a)}}return n.push("'"),n.join("")}(e,t.useUnquotedString):!0===e?"true":!1===e?"false":""}function a(e){const t={},{tag:n,children:r,options:i}=e;for(const e in i){const n=i[e];t[e]="object"==typeof n?a(n):n}return"katex"===n?t.__=function(e){const t=o(e);if(1===t.length){const e=t[0];if("string"==typeof e)return e}return t}(r):("div"!==n||r.length>0)&&(t[n]=o(r)),t}function r(e){const t=[];let n="";for(const r of e)"object"!=typeof r?n+=r:(n.length>0&&(t.push(n),n=""),t.push(a(r)));return n.length>0&&t.push(n),1===t.length?t[0]:t}function o(e){const t=[];for(const n of e)t.push(r(n));return t}function i(e){return void 0===e?"":e.length<2?n(o(e),{addDecorativeComma:"inObject",addDecorativeSpace:"always",indentTarget:"arrayInObjectAndThis",useUnquotedString:!0}).slice(1,-1).trim():n(o(e),{addDecorativeComma:"inObject",addDecorativeSpace:"always",indentLevel:-1,indentTarget:"arrayInObjectAndThis",useUnquotedString:!0}).slice(1,-1).trim()}function s(e){return e.replace(/\n? *placeholder(\n|$)/g,"\n")}async function c(e,t){return await t.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:e.split("\n").map((e=>e.split("")))})}async function d(e,t){return await t.compileUnit({tag:"code",options:{lang:"ston",block:!0},children:n(t.stdn.parse(e),{addDecorativeSpace:"always",indentTarget:"all",useUnquotedString:!0}).split("\n").map((e=>e.split("")))})}async function l(e,t,n,a,r){return await r.compile([{value:e,url:a}],{style:t,headSTDN:[[{tag:"global",options:{"mod-gh":"st-org/st-std@0.31.4"},children:[]}]],root:n})}async function u(e,t){const n=await t.compileSTDN([[{tag:"code",options:{lang:"html",block:!0},children:e.innerHTML.split("\n").map((e=>e.split("")))}]]);e.innerHTML="",e.append(n)}function p(e){if(e.currentTarget instanceof Element)for(const t of e.composedPath()){if(!(t instanceof HTMLAnchorElement))continue;const n=t.getAttribute("href");if(null===n||!n.startsWith("#"))return;if(e.stopPropagation(),e.preventDefault(),1===n.length)return void e.currentTarget.scrollIntoView();const a=decodeURIComponent(n.slice(1)),r=e.currentTarget.querySelector(`[id=${JSON.stringify(a)}]`);return void(null!==r&&r.scrollIntoView())}}e.d(t,{D5:()=>d,IT:()=>c,TA:()=>h,ji:()=>s,q6:()=>f,yK:()=>l,a$:()=>p,qz:()=>m,G2:()=>u});const h=async(e,t)=>{const n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),o=document.createElement("textarea");a.classList.add("source"),r.classList.add("result"),n.append(a),n.append(r);let h,m=o.value=s(i(e.children));if(!0===(e.options.parse??t.context.extractLastGlobalOption("parse","demo"))){async function f(){if(void 0!==h&&o.value===m)return o.replaceWith(h),!1;if(o.disabled)return!1;o.disabled=!0,m=o.value;const e=h=await c(m,t);return a.innerHTML="",a.append(e),e.addEventListener("click",(()=>{e.replaceWith(o),o.disabled=!1,o.focus()})),r.innerHTML="",r.append(await d(m,t)),!0}return await f(),o.addEventListener("blur",(async()=>{await f()&&n.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))})),n}const g=r.attachShadow({mode:"open"}),v=document.createElement("style"),y=document.createElement("div");g.append(v),g.append(y);const b=!0===(e.options.html??t.context.extractLastGlobalOption("html","demo")),w=t.context.urlToAbsURL("",e);async function f(){if(void 0!==h&&o.value===m)return o.replaceWith(h),!1;if(o.disabled)return!1;o.disabled=!0,m=o.value;const e=h=await c(m,t);a.innerHTML="",a.append(e),e.addEventListener("click",(()=>{e.replaceWith(o),o.disabled=!1,o.focus()}));const n=await l(m,v,g,w,t);return void 0===n||(y.innerHTML="",y.append(n.documentFragment),!b||(await u(y,n.compiler),!0))}return await f(),o.addEventListener("blur",(async()=>{await f()&&n.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))})),y.addEventListener("click",p),n},m=async(e,t)=>await c(s(i(e.children)),t),f=async(e,t)=>{const n=document.createElement("div");if(!0===(e.options.parse??t.context.extractLastGlobalOption("parse","result")))return n.append(await d(i(e.children),t)),n;const a=n.attachShadow({mode:"open"}),r=document.createElement("style"),o=document.createElement("div");a.append(r),a.append(o);const s=await l(i(e.children),r,a,t.context.urlToAbsURL("",e),t);return void 0===s?n:(o.append(s.documentFragment),!0===(e.options.html??t.context.extractLastGlobalOption("html","result"))?(await u(o,s.compiler),n):(o.addEventListener("click",p),n))};var g=t.D5,v=t.IT,y=t.TA,b=t.ji,w=t.q6,T=t.yK,L=t.a$,j=t.qz,S=t.G2;export{g as createParsePre,v as createSourcePre,y as demo,b as removePlaceholders,w as result,T as shadowCompile,L as shadowHashAnchorsListener,j as source,S as toHTMLPre};