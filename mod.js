var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function n(t,e={}){return Array.isArray(t)?function(t,{addDecorativeComma:e,addDecorativeSpace:a,indentLevel:o,indentTarget:r,useUnquotedString:i}){r=r??"none",o=o??0,e=e??"never";const s=[],c=t.length>1&&("all"===r||"array"===r||"arrayInObjectAndThis"===r),l=o+(c?1:0);"arrayInObjectAndThis"===r&&(r="arrayInObject");const d="always"===a||"afterComma"===a?", ":",";let u;for(let o=0;o<t.length;o++){let p;p=void 0===u?n(t[o],{indentTarget:r,indentLevel:l,addDecorativeComma:e,addDecorativeSpace:a,useUnquotedString:i}):u,o!==t.length-1&&(u=n(t[o+1],{indentTarget:r,indentLevel:l,addDecorativeComma:e,addDecorativeSpace:a,useUnquotedString:i})),c||o===t.length-1||"always"!==e&&(p.endsWith("'")||p.endsWith("}")||p.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?s.push(p):s.push(p+d)}if(c){let t="\n";for(let e=0;e<o;e++)t+="    ";let e=t;return o>=0&&(e+="    "),`[${e}${s.join(e)}${t}]`}return`[${s.join("")}]`}(t,e):"object"==typeof t?function(t,{addDecorativeComma:e,addDecorativeSpace:a,indentLevel:o,indentTarget:r,useUnquotedString:i}){r=r??"none",o=o??0,e=e??"never";const s=[],c=Object.keys(t),l=c.length>1&&("all"===r||"object"===r),d=o+(l?1:0);"arrayInObject"===r&&(r="arrayInObjectAndThis");const u="always"===a||"afterComma"===a?", ":",",p="always"===a||"afterKey"===a?" ":"";for(let o=0;o<c.length;o++){const h=c[o];if(null===h.match(/^[\w-]+$/))continue;const f=t[h];if(void 0===f)continue;const m=n(f,{indentTarget:r,indentLevel:d,addDecorativeComma:e,addDecorativeSpace:a,useUnquotedString:"__"===h&&"string"==typeof f?void 0:i});m.startsWith("'")||m.startsWith("[")||m.startsWith("{")?l||o===c.length-1||"always"!==e&&"inObject"!==e?s.push(("__"===h?"":h+p)+m):s.push(("__"===h?"":h+p)+m+u):"true"===m?l||o===c.length-1?s.push(h):s.push(h+u):l||o===c.length-1?s.push(`${h} ${m}`):s.push(`${h} ${m}${u}`)}if(l){let t="\n";for(let e=0;e<o;e++)t+="    ";let e=t;return o>=0&&(e+="    "),`{${e}${s.join(e)}${t}}'`}return`{${s.join("")}}`}(t,e):"number"==typeof t?t.toString():"string"==typeof t?function(t,e){if(e&&t.length>0&&t[0].trim().length>0&&(1===t.length||t[t.length-1].trim().length>0)&&!/[',{}\[\]\n\r]/.test(t)&&"true"!==t&&"false"!==t&&!/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)&&!t.startsWith("//")&&!t.startsWith("/*"))return t;const n=["'"];for(let e=0;e<t.length;e++){const a=t[e];if("\\"!==a)"'"!==a?n.push(a):n.push("\\'");else{if(e===t.length-1){n.push("\\\\");break}const o=t[e+1];if("\\"===o||"'"===o){n.push("\\\\");continue}n.push(a)}}return n.push("'"),n.join("")}(t,e.useUnquotedString):!0===t?"true":!1===t?"false":""}function a(t){const e={},{tag:n,children:a,options:o}=t;for(const t in o){let n=o[t];e[t]="object"==typeof n?{__:i(n)}:n}return"katex"===n?e.__=function(t){const e=r(t);if(1===e.length){const t=e[0];if("string"==typeof t)return t}return e}(a):("div"!==n||a.length>0)&&(e[n]=r(a)),e}function o(t){const e=[];let n="";for(const o of t)"object"!=typeof o?n+=o:(n.length>0&&(e.push(n),n=""),e.push(a(o)));return n.length>0&&e.push(n),1===e.length?e[0]:e}function r(t){const e=[];for(const n of t)e.push(o(n));return e}function i(t){const e=r(t);if(1===e.length){const t=e[0];if("object"==typeof t&&!Array.isArray(t)){const e=Object.keys(t);if(1===e.length&&"__"===e[0]){const{__:e}=t;if("string"==typeof e)return e}}}return e}function s(t){return void 0===t?"":t.length<2?n(r(t),{indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():n(r(t),{indentLevel:-1,indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim()}function c(t){return t.replace(/\n? *placeholder(\n|$)/g,"\n")}async function l(t,e){return await e.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:t.split("\n").map((t=>t.split("")))})}async function d(t,e){return await e.compileUnit({tag:"code",options:{lang:"ston",block:!0},children:n(e.stdn.parse(t),{addDecorativeSpace:"always",indentTarget:"all",useUnquotedString:!0}).split("\n").map((t=>t.split("")))})}async function u(t,e,n,a,o){return await o.compile([{value:t,url:a}],{style:e,headSTDN:[[{tag:"global",options:{"mod-gh":"st-org/st-std@0.28.3"},children:[]}]],root:n})}async function p(t,e){const n=await e.compileSTDN([[{tag:"code",options:{lang:"html",block:!0},children:t.innerHTML.split("\n").map((t=>t.split("")))}]]);t.innerHTML="",t.append(n)}function h(t){if(t.currentTarget instanceof Element)for(const e of t.composedPath()){if(!(e instanceof HTMLAnchorElement))continue;const n=e.getAttribute("href");if(null===n||!n.startsWith("#"))return;if(t.stopPropagation(),t.preventDefault(),1===n.length)return void t.currentTarget.scrollIntoView();const a=decodeURIComponent(n.slice(1)),o=t.currentTarget.querySelector(`[id=${JSON.stringify(a)}]`);return void(null!==o&&o.scrollIntoView())}}t.d(e,{D5:()=>d,IT:()=>l,TA:()=>f,ji:()=>c,q6:()=>g,yK:()=>u,a$:()=>h,qz:()=>m,G2:()=>p});const f=async(t,e)=>{const n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("textarea");a.classList.add("source"),o.classList.add("result"),n.append(a),n.append(o);const i=!0===(t.options.parse??e.extractor.extractLastGlobalOption("parse","demo",e.context.tagToGlobalOptions)),f=!0===(t.options.html??e.extractor.extractLastGlobalOption("html","demo",e.context.tagToGlobalOptions)),m=e.context.urlToAbsURL("",t);let g,v=r.value=c(s(t.children));async function y(){if(void 0!==g&&r.value===v)return r.replaceWith(g),!1;if(r.disabled)return!1;r.disabled=!0,v=r.value;const t=await l(v,e);if(a.innerHTML="",g=t,a.append(t),t.addEventListener("click",(()=>{t.replaceWith(r),r.disabled=!1,r.focus()})),o.innerHTML="",i)return o.append(await d(v,e)),!0;const n=o.attachShadow({mode:"open"}),s=document.createElement("style"),c=document.createElement("div");n.append(s),n.append(c);const y=await u(v,s,n,m,e);return void 0===y||(c.append(y.documentFragment),f?(await p(c,y.compiler),!0):(c.addEventListener("click",h),!0))}return await y(),r.addEventListener("blur",(async()=>{await y()&&n.dispatchEvent(new Event("adjust",{bubbles:!0,composed:!0}))})),n},m=async(t,e)=>await l(c(s(t.children)),e),g=async(t,e)=>{const n=document.createElement("div");if(!0===(t.options.parse??e.extractor.extractLastGlobalOption("parse","demo",e.context.tagToGlobalOptions)))return n.append(await d(s(t.children),e)),n;const a=n.attachShadow({mode:"open"}),o=document.createElement("style"),r=document.createElement("div");a.append(o),a.append(r);const i=!0===(t.options.html??e.extractor.extractLastGlobalOption("html","result",e.context.tagToGlobalOptions)),c=await u(s(t.children),o,a,e.context.urlToAbsURL("",t),e);return void 0===c?n:(r.append(c.documentFragment),i?(await p(r,c.compiler),n):(r.addEventListener("click",h),n))};var v=e.D5,y=e.IT,b=e.TA,T=e.ji,w=e.q6,j=e.yK,L=e.a$,S=e.qz,O=e.G2;export{v as createParsePre,y as createSourcePre,b as demo,T as removePlaceholders,w as result,j as shadowCompile,L as shadowHashAnchorsListener,S as source,O as toHTMLPre};