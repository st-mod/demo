var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t={}){return Array.isArray(e)?function(e,{addDecorativeComma:t,addDecorativeSpace:o,indentLevel:i,indentTarget:r,useUnquotedString:a}){t=null!=t?t:"never",r=null!=r?r:"none",i=null!=i?i:0;const d=[],c=e.length>1&&("all"===r||"array"===r||"arrayInObjectAndThis"===r),s=i+(c?1:0);"arrayInObjectAndThis"===r&&(r="arrayInObject");const l="always"===o||"afterComma"===o?", ":",";let u;for(let i=0;i<e.length;i++){let p;p=void 0===u?n(e[i],{addDecorativeComma:t,addDecorativeSpace:o,indentTarget:r,indentLevel:s,useUnquotedString:a}):u,i!==e.length-1&&(u=n(e[i+1],{addDecorativeComma:t,addDecorativeSpace:o,indentTarget:r,indentLevel:s,useUnquotedString:a})),c||i===e.length-1||"always"!==t&&(p.endsWith("'")||p.endsWith("}")||p.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?d.push(p):d.push(p+l)}if(c){let e="\n";for(let t=0;t<i;t++)e+="    ";let t=e;return i>=0&&(t+="    "),`[${t}${d.join(t)}${e}]`}return`[${d.join("")}]`}(e,t):"object"==typeof e?function(e,{addDecorativeComma:t,addDecorativeSpace:o,indentLevel:i,indentTarget:r,useUnquotedString:a}){t=null!=t?t:"never",r=null!=r?r:"none",i=null!=i?i:0;const d=[],c=Object.keys(e),s=c.length>1&&("all"===r||"object"===r),l=i+(s?1:0);"arrayInObject"===r&&(r="arrayInObjectAndThis");const u="always"===o||"afterComma"===o?", ":",",p="always"===o||"afterKey"===o?" ":"";for(let i=0;i<c.length;i++){const h=c[i];if(null===h.match(/^[\w-]+$/))continue;const v=e[h];if(void 0===v)continue;const f=n(v,{addDecorativeComma:t,addDecorativeSpace:o,indentTarget:r,indentLevel:l,useUnquotedString:"__"===h&&"string"==typeof v?void 0:a});f.startsWith("'")||f.startsWith("[")||f.startsWith("{")?s||i===c.length-1||"always"!==t&&"inObject"!==t?d.push(("__"===h?"":h+p)+f):d.push(("__"===h?"":h+p)+f+u):"true"===f?s||i===c.length-1?d.push(h):d.push(h+u):s||i===c.length-1?d.push(`${h} ${f}`):d.push(`${h} ${f}${u}`)}if(s){let e="\n";for(let t=0;t<i;t++)e+="    ";let t=e;return i>=0&&(t+="    "),`{${t}${d.join(t)}${e}}`}return`{${d.join("")}}`}(e,t):"number"==typeof e?e.toString():"string"==typeof e?function(e,t){if(t&&e.length>0&&e[0].trim().length>0&&(1===e.length||e[e.length-1].trim().length>0)&&!/[\n\r',\[\]{}]/.test(e)&&"true"!==e&&"false"!==e&&!/^(?:[+-]?Infinity|NaN|0x[\dA-Fa-f]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)&&!e.startsWith("//")&&!e.startsWith("/*"))return e;const n=["'"];for(let t=0;t<e.length;t++){const o=e[t];if("\\"!==o)"'"!==o?n.push(o):n.push("\\'");else{if(t===e.length-1){n.push("\\\\");break}const i=e[t+1];if("\\"===i||"'"===i){n.push("\\\\");continue}n.push(o)}}return n.push("'"),n.join("")}(e,t.useUnquotedString):!0===e?"true":!1===e?"false":""}function o(e){const t={},{tag:n,children:i,options:a}=e;for(const e in a){const n=a[e];t[e]="object"==typeof n?o(n):n}return"katex"===n?t.__=function(e){const t=r(e);if(1===t.length){const e=t[0];if("string"==typeof e)return e}return t}(i):("div"!==n||i.length>0)&&(t[n]=r(i)),t}function i(e){const t=[];let n="";for(const i of e)"object"!=typeof i?n+=i:(n.length>0&&(t.push(n),n=""),t.push(o(i)));return n.length>0&&t.push(n),1===t.length?t[0]:t}function r(e){const t=[];for(const n of e)t.push(i(n));return t}function a(e){return void 0===e?"":e.length<2?n(r(e),{addDecorativeComma:"inObject",addDecorativeSpace:"always",indentTarget:"arrayInObjectAndThis",useUnquotedString:!0}).slice(1,-1).trim():n(r(e),{addDecorativeComma:"inObject",addDecorativeSpace:"always",indentLevel:-1,indentTarget:"arrayInObjectAndThis",useUnquotedString:!0}).slice(1,-1).trim()}e.d(t,{D5:()=>l,IT:()=>s,TA:()=>v,ji:()=>c,q6:()=>m,yK:()=>u,a$:()=>h,qz:()=>f,G2:()=>p});var d=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function d(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}c((o=o.apply(e,t||[])).next())}))};function c(e){return e.replace(/\n? *placeholder(\n|$)/g,"\n")}function s(e,t){return d(this,void 0,void 0,(function*(){return yield t.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:e.split("\n").map((e=>e.split("")))})}))}function l(e,t){return d(this,void 0,void 0,(function*(){return yield t.compileUnit({tag:"code",options:{lang:"ston",block:!0},children:n(t.stdn.parse(e),{addDecorativeSpace:"always",indentTarget:"all",useUnquotedString:!0}).split("\n").map((e=>e.split("")))})}))}function u(e,t,n,o,i){return d(this,void 0,void 0,(function*(){const r=new URL("../st-std@0.31.10",import.meta.url).href;return yield i.compile([{value:e,url:o}],{style:t,headSTDN:[[{tag:"global",options:{"css-src":`${r}/main.css`,"ucs-src":`${r}/ucs.js`},children:[]}]],root:n})}))}function p(e,t){return d(this,void 0,void 0,(function*(){const n=yield t.compileSTDN([[{tag:"code",options:{lang:"html",block:!0},children:e.innerHTML.split("\n").map((e=>e.split("")))}]]);e.innerHTML="",e.append(n)}))}function h(e){if(e.currentTarget instanceof Element)for(const t of e.composedPath()){if(!(t instanceof HTMLAnchorElement))continue;const n=t.getAttribute("href");if(null===n||!n.startsWith("#"))return;if(e.stopPropagation(),e.preventDefault(),1===n.length)return void e.currentTarget.scrollIntoView();const o=decodeURIComponent(n.slice(1)),i=e.currentTarget.querySelector(`[id=${JSON.stringify(o)}]`);return void(null!==i&&i.scrollIntoView())}}const v=(e,t)=>d(void 0,void 0,void 0,(function*(){var n,o;const i=document.createElement("div"),r=document.createElement("div"),v=document.createElement("div"),f=document.createElement("textarea");r.classList.add("source"),v.classList.add("result"),i.append(r),i.append(v);let m,g=f.value=c(a(e.children));if(!0===(null!==(n=e.options.parse)&&void 0!==n?n:t.context.extractLastGlobalOption("parse","demo"))){function y(){return d(this,void 0,void 0,(function*(){if(void 0!==m&&f.value===g)return f.replaceWith(m),!1;if(f.disabled)return!1;f.disabled=!0,g=f.value;const e=m=yield s(g,t);return r.innerHTML="",r.append(e),e.addEventListener("click",(()=>{e.replaceWith(f),f.disabled=!1,f.focus()})),v.innerHTML="",v.append(yield l(g,t)),!0}))}return yield y(),f.addEventListener("blur",(()=>d(void 0,void 0,void 0,(function*(){(yield y())&&i.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))})))),i}const b=v.attachShadow({mode:"open"}),T=document.createElement("style"),L=document.createElement("div");b.append(T),b.append(L);const j=!0===(null!==(o=e.options.html)&&void 0!==o?o:t.context.extractLastGlobalOption("html","demo")),S=t.context.urlToAbsURL("",e);function y(){return d(this,void 0,void 0,(function*(){if(void 0!==m&&f.value===g)return f.replaceWith(m),!1;if(f.disabled)return!1;f.disabled=!0,g=f.value;const e=m=yield s(g,t);r.innerHTML="",r.append(e),e.addEventListener("click",(()=>{e.replaceWith(f),f.disabled=!1,f.focus()}));const n=yield u(g,T,b,S,t);return void 0===n||(L.innerHTML="",L.append(n.documentFragment),!j||(yield p(L,n.compiler),!0))}))}return yield y(),f.addEventListener("blur",(()=>d(void 0,void 0,void 0,(function*(){(yield y())&&i.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))})))),L.addEventListener("click",h),i})),f=(e,t)=>d(void 0,void 0,void 0,(function*(){return yield s(c(a(e.children)),t)})),m=(e,t)=>d(void 0,void 0,void 0,(function*(){var n,o;const i=document.createElement("div");if(!0===(null!==(n=e.options.parse)&&void 0!==n?n:t.context.extractLastGlobalOption("parse","result")))return i.append(yield l(a(e.children),t)),i;const r=i.attachShadow({mode:"open"}),d=document.createElement("style"),c=document.createElement("div");r.append(d),r.append(c);const s=yield u(a(e.children),d,r,t.context.urlToAbsURL("",e),t);return void 0===s?i:(c.append(s.documentFragment),!0===(null!==(o=e.options.html)&&void 0!==o?o:t.context.extractLastGlobalOption("html","result"))?(yield p(c,s.compiler),i):(c.addEventListener("click",h),i))}));var g=t.D5,y=t.IT,b=t.TA,T=t.ji,L=t.q6,j=t.yK,S=t.a$,w=t.qz,E=t.G2;export{g as createParsePre,y as createSourcePre,b as demo,T as removePlaceholders,L as result,j as shadowCompile,S as shadowHashAnchorsListener,w as source,E as toHTMLPre};