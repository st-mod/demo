var t={400:(t,e,n)=>{e.Pz=e.Qc=void 0;const i=n(650);function o(t){let e="div",n=[],i={};for(const o of Object.keys(t)){let s=t[o];if(void 0!==s)if("__"!==o)if(Array.isArray(s))e=o,n=r(s);else if("object"!=typeof s)i[o]=s;else{if(s=s.__,void 0===s)continue;"string"==typeof s?s=[{__:s}]:Array.isArray(s)||(s=[s]),i[o]=r(s)}else Array.isArray(s)||(s=[s]),e="katex",n=r(s)}return{tag:e,children:n,options:i}}function s(t){const e=[];for(const n of t)if("string"!=typeof n)"object"!=typeof n||Array.isArray(n)||e.push(o(n));else for(const t of n)t>=" "&&e.push(t);return e}function r(t){const e=[];for(const n of t)Array.isArray(n)?e.push(s(n)):e.push(s([n]));return e}function a(t){const e={},{tag:n,children:i,options:o}=t;for(const t of Object.keys(o)){let n=o[t];e[t]="object"==typeof n?{__:d(n)}:n}return"katex"===n?e.__=function(t){const e=l(t);if(1===e.length){const t=e[0];if("string"==typeof t)return t}return e}(i):("div"!==n||i.length>0)&&(e[n]=l(i)),e}function c(t){const e=[];let n="";for(const i of t)"object"!=typeof i?n+=i:(n.length>0&&(e.push(n),n=""),e.push(a(i)));return n.length>0&&e.push(n),1===e.length?e[0]:e}function l(t){const e=[];for(const n of t)e.push(c(n));return e}function d(t){const e=l(t);if(1===e.length){const t=e[0];if("object"==typeof t&&!Array.isArray(t)){const e=Object.keys(t);if(1===e.length&&"__"===e[0]){const e=t.__;if("string"==typeof e)return e}}}return e}e.Qc=function(t){const e=i.parse("["+t+"]");if(Array.isArray(e))return r(e)},e.Pz=function(t){return void 0===t?"":t.length<2?i.stringify(l(t),{indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():i.stringify(l(t),{indentLevel:-1,indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim()}},650:(t,e)=>{function n(t,e,n=!1){let i=0,o=!1,s=!1,r=0,a=!1,c=[];const l=[];for(let d=0;d<t.length;d++){if(!0===s){s=!1;continue}const u=t[d];if("line"!==a)if("block"!==a)if("'"!==u){if(o){if("\\"===u){s=!0;continue}}else if("{"!==u&&"["!==u)if("}"!==u&&"]"!==u){if(!(i>0))if(","!==u&&"\n"!==u){if(!(r<d))if(0!==u.trimEnd().length){if("/"===u){const e=t[d+1];if("/"===e){r=d,d++,a="line";continue}if("*"===e){r=d,d++,a="block";continue}}}else r=d+1}else{const n=t.slice(r,d).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]),r=d+1}}else{if(i--,i<0){const n=t.slice(r,d).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]);break}0===i&&(l.push({value:t.slice(r,d+1),index:e+r,comment:c.join("\n")}),c=[],r=d+1)}else if(i++,1===i&&!n){const n=t.slice(r,d).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]),r=d}}else{if(!o){if(o=!0,0===i&&!n){const n=t.slice(r,d).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]),r=d}continue}o=!1,0===i&&(l.push({value:t.slice(r,d+1),index:e+r,comment:c.join("\n")}),c=[],r=d+1)}else"*"===u&&"/"===t[d+1]&&(d++,a=!1,c.push(t.slice(r,d+1).replace(/\n[ ]*/g,"\n ")),r=d+1);else"\n"===u&&(a=!1,c.push(t.slice(r,d).trimEnd()),r=d+1)}if(!o&&0===i&&!1===a){const n=t.slice(r).trimEnd();n.length>0&&l.push({value:n,index:e+r,comment:c.join("\n")})}return l}function i(t,e=!1){let n=0,i=!1,o=!1,s=0,r=!1;const a=[];for(let c=0;c<t.length;c++){if(!0===o){o=!1;continue}const l=t[c];if("line"!==r)if("block"!==r)if("'"!==l){if(i){if("\\"===l){o=!0;continue}}else if("{"!==l&&"["!==l)if("}"!==l&&"]"!==l){if(!(n>0))if(","!==l&&"\n"!==l){if(!(s<c))if(0!==l.trimEnd().length){if("/"===l){const e=t[c+1];if("/"===e){c++,r="line",s=c+1;continue}if("*"===e){c++,r="block",s=c+1;continue}}}else s=c+1}else{const e=t.slice(s,c).trimEnd();e.length>0&&a.push(e),s=c+1}}else{if(n--,n<0){const e=t.slice(s,c).trimEnd();e.length>0&&a.push(e);break}0===n&&(a.push(t.slice(s,c+1)),s=c+1)}else if(n++,1===n&&!e){const e=t.slice(s,c).trimEnd();e.length>0&&a.push(e),s=c}}else{if(!i){if(i=!0,0===n&&!e){const e=t.slice(s,c).trimEnd();e.length>0&&a.push(e),s=c}continue}i=!1,0===n&&(a.push(t.slice(s,c+1)),s=c+1)}else"*"===l&&"/"===t[c+1]&&(c++,r=!1),s=c+1;else"\n"===l&&(r=!1),s=c+1}if(!i&&0===n){const e=t.slice(s).trimEnd();e.length>0&&a.push(e)}return a}function o(t){const e=[];let n=!1;for(const i of t)if(!0!==n)if("\\"!==i){if("'"===i)break;e.push(i)}else n=!0;else n=!1,"\\"!==i&&"'"!==i&&e.push("\\"),e.push(i);return e.join("")}function s(t,e=0,i=""){e+=t.length;const r=function(t,e){if(0===t.length)return;const i=t[0];return"'"===i?o(t.slice(1)):"["===i?function(t,e){return function(t){const e=[];for(const{value:n,index:i,comment:o}of t){const t=s(n,i,o);if(void 0===t)return;e.push(t)}return e}(n(t,e))}(t.slice(1),e+1):"{"===i?function(t,e){return function(t){const e={};for(const{value:n,index:i,comment:o}of t){const t=n.match(/^\s*([\w-]+)/);if(null===t){const t=s(n,i,o);if(void 0===t)return;e.__=t;continue}const r=t[1],a=t[0].length;let c=n.slice(a).trimEnd();if(0===c.length)e[r]={value:!0,index:i+a,comment:o};else{const t=s(c,i+a,o);if(void 0===t)return;e[r]=t}}return e}(n(t,e,!0))}(t.slice(1),e+1):"true"===(t=t.trimEnd())||"false"!==t&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)?Number(t):/[',{}\[\]\n\r]/.test(t)?void 0:t)}(t=t.trimStart(),e-=t.length);if(void 0!==r)return{value:r,index:e,comment:i}}function r(t){if(0===(t=t.trimStart()).length)return;const e=t[0];return"'"===e?o(t.slice(1)):"["===e?function(t){return function(t){const e=[];for(const n of t){const t=r(n);if(void 0===t)return;e.push(t)}return e}(i(t))}(t.slice(1)):"{"===e?function(t){return function(t){const e={};for(const n of t){const t=n.match(/^\s*([\w-]+)/);if(null===t){const t=r(n);if(void 0===t)return;e.__=t;continue}const i=t[1],o=t[0].length;let s=n.slice(o).trimEnd();if(0===s.length)e[i]=!0;else{const t=r(s);if(void 0===t)return;e[i]=t}}return e}(i(t,!0))}(t.slice(1)):"true"===(t=t.trimEnd())||"false"!==t&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)?Number(t):/[',{}\[\]\n\r]/.test(t)?void 0:t)}function a(t,e){if(e&&t.length>0&&t[0].trim().length>0&&(1===t.length||t[t.length-1].trim().length>0)&&!/[',{}\[\]\n\r]/.test(t)&&"true"!==t&&"false"!==t&&!/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)&&!t.startsWith("//")&&!t.startsWith("/*"))return t;const n=["'"];for(let e=0;e<t.length;e++){const i=t[e];if("\\"!==i)"'"!==i?n.push(i):n.push("\\'");else{if(e===t.length-1){n.push("\\\\");break}const o=t[e+1];if("\\"===o||"'"===o){n.push("\\\\");continue}n.push(i)}}return n.push("'"),n.join("")}Object.defineProperty(e,"__esModule",{value:!0}),e.stringify=e.stringifyWithComment=e.parse=e.parseWithIndex=void 0,e.parseWithIndex=s,e.parse=r,e.stringifyWithComment=function t(e,n={}){return void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?a(e,n.useUnquotedString):!0===e?"true":!1===e?"false":Array.isArray(e)?function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r}){n=n??"none",i=i??0,o=o??"never";const a=[],c=e.length>1&&("all"===n||"array"===n||"arrayInObjectAndThis"===n)||void 0!==e.find((t=>t.comment.length>0)),l=i+(c?1:0);"arrayInObjectAndThis"===n&&(n="arrayInObject");const d="always"===s||"afterComma"===s?", ":",";let u;for(let i=0;i<e.length;i++){const{value:h,comment:f}=e[i];let p;p=void 0===u?t(h,{indentTarget:n,indentLevel:l,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r}):u,i!==e.length-1&&(u=t(e[i+1].value,{indentTarget:n,indentLevel:l,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r})),c||i===e.length-1||"always"!==o&&(p.endsWith("'")||p.endsWith("}")||p.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?(f.length>0&&a.push(...f.split("\n")),a.push(p)):a.push(p+d)}let h="\n";for(let t=0;t<i;t++)h+="    ";let f=h;return i>=0&&(f+="    "),c?"["+f+a.join(f)+h+"]":"["+a.join("")+"]"}(e,n):function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r}){n=n??"none",i=i??0,o=o??"never";const a=[],c=Object.keys(e);let l=c.length>1&&("all"===n||"object"===n);if(!l)for(const t of c){const n=e[t];if(void 0!==n&&n.comment.length>0){l=!0;break}}const d=i+(l?1:0);"arrayInObject"===n&&(n="arrayInObjectAndThis");const u="always"===s||"afterComma"===s?", ":",",h="always"===s||"afterKey"===s?" ":"";for(let i=0;i<c.length;i++){const f=c[i];if(null===f.match(/^[\w-]+$/))continue;const p=e[f];if(void 0===p)continue;const{value:g,comment:m}=p,y=t(g,{indentTarget:n,indentLevel:d,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:"__"===f&&"string"==typeof g?void 0:r});m.length>0&&a.push(...m.split("\n")),y.startsWith("'")||y.startsWith("[")||y.startsWith("{")?l||i===c.length-1||"always"!==o&&"inObject"!==o?a.push(("__"===f?"":f+h)+y):a.push(("__"===f?"":f+h)+y+u):"true"===y?l||i===c.length-1?a.push(f):a.push(f+u):l||i===c.length-1?a.push(f+" "+y):a.push(f+" "+y+u)}let f="\n";for(let t=0;t<i;t++)f+="    ";let p=f;return i>=0&&(p+="    "),l?"{"+p+a.join(p)+f+"}":"{"+a.join("")+"}"}(e,n)},e.stringify=function t(e,n={}){return void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?a(e,n.useUnquotedString):!0===e?"true":!1===e?"false":Array.isArray(e)?function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r}){n=n??"none",i=i??0,o=o??"never";const a=[],c=e.length>1&&("all"===n||"array"===n||"arrayInObjectAndThis"===n),l=i+(c?1:0);"arrayInObjectAndThis"===n&&(n="arrayInObject");const d="always"===s||"afterComma"===s?", ":",";let u;for(let i=0;i<e.length;i++){let h;h=void 0===u?t(e[i],{indentTarget:n,indentLevel:l,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r}):u,i!==e.length-1&&(u=t(e[i+1],{indentTarget:n,indentLevel:l,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r})),c||i===e.length-1||"always"!==o&&(h.endsWith("'")||h.endsWith("}")||h.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?a.push(h):a.push(h+d)}let h="\n";for(let t=0;t<i;t++)h+="    ";let f=h;return i>=0&&(f+="    "),c?"["+f+a.join(f)+h+"]":"["+a.join("")+"]"}(e,n):function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:r}){n=n??"none",i=i??0,o=o??"never";const a=[],c=Object.keys(e),l=c.length>1&&("all"===n||"object"===n),d=i+(l?1:0);"arrayInObject"===n&&(n="arrayInObjectAndThis");const u="always"===s||"afterComma"===s?", ":",",h="always"===s||"afterKey"===s?" ":"";for(let i=0;i<c.length;i++){const f=c[i];if(null===f.match(/^[\w-]+$/))continue;const p=e[f];if(void 0===p)continue;const g=t(p,{indentTarget:n,indentLevel:d,addDecorativeComma:o,addDecorativeSpace:s,useUnquotedString:"__"===f&&"string"==typeof p?void 0:r});g.startsWith("'")||g.startsWith("[")||g.startsWith("{")?l||i===c.length-1||"always"!==o&&"inObject"!==o?a.push(("__"===f?"":f+h)+g):a.push(("__"===f?"":f+h)+g+u):"true"===g?l||i===c.length-1?a.push(f):a.push(f+u):l||i===c.length-1?a.push(f+" "+g):a.push(f+" "+g+u)}let f="\n";for(let t=0;t<i;t++)f+="    ";let p=f;return i>=0&&(p+="    "),l?"{"+p+a.join(p)+f+"}":"{"+a.join("")+"}"}(e,n)}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};(()=>{n.d(i,{T:()=>m});var t=n(400),e=n(650);function o(t,e){try{return new URL(t,e).href}catch(e){return console.log(e),t}}async function s(t,e){const n=[];for(const i of t)try{const t=new URL(i,e);if(!t.pathname.endsWith(".urls")&&!t.pathname.endsWith(".urls.txt")){n.push(t.href);continue}const o=await fetch(t.href);if(!o.ok)continue;n.push(...await r(await o.text(),t.href))}catch(t){console.log(t)}return n}async function r(t,n){const i=(0,e.parse)("["+t+"]");if(!Array.isArray(i))return[];const o=[];for(const t of i)"string"==typeof t&&o.push(t);return await s(o,n)}function a(t){let e="";for(const n of t)e+="string"!=typeof n?c(n):n;return e}function c(t){return function(t){for(const e of t){const t=a(e);if(t.length>0)return t}return""}(t.children)}class l{constructor(t){this.tagToGlobalOptions=t,this.currentHeadingIndex=[],this.orbitToCurrentIndex={},this.baseIdToCount={},this.indexInfoArray=[],this.idToIndexInfo={},this.unitToId=new Map,this.title=""}createIndex(t,e){if("heading"===t){if(this.currentHeadingIndex.length<e)for(let t=this.currentHeadingIndex.length;t<e;t++)this.currentHeadingIndex.push(0);else{for(let t=e;t<this.currentHeadingIndex.length;t++)this.currentHeadingIndex[t]=0;for(const t of Object.keys(this.orbitToCurrentIndex)){const n=this.orbitToCurrentIndex[t];if(!(void 0===n||n.length<e))for(let t=e;t<n.length;t++)n[t]=0}}return this.currentHeadingIndex[e-1]++,this.currentHeadingIndex.slice(0,e)}let n=this.orbitToCurrentIndex[t];if(void 0===n&&(n=[],this.orbitToCurrentIndex[t]=n),n.length<e)for(let t=n.length;t<e;t++)n.push(0);if(this.currentHeadingIndex.length<e-1)for(let t=this.currentHeadingIndex.length;t<e-1;t++)this.currentHeadingIndex.push(0);const i=this.currentHeadingIndex.slice(0,e-1);return i.push(++n[e-1]),i}countUnit(t){if(0===this.title.length&&"title"===t.tag&&(this.title=c(t)),"global"!==t.tag&&!0!==t.options.global){const n=(e="string"==typeof t.options.id?t.options.id:c(t),Array.from(e.slice(0,100).matchAll(/[a-zA-Z0-9]+/g)).join("-").toLowerCase()),i=this.baseIdToCount[n]=(this.baseIdToCount[n]??0)+1,o=i>1||0===n.length?`${n}~${i}`:n;let s=t.options.orbit??u("orbit",t.tag,this.tagToGlobalOptions);"string"==typeof s&&0!==s.length||(s="h1"===t.tag||"h2"===t.tag||"h3"===t.tag||"h4"===t.tag||"h5"===t.tag||"h6"===t.tag?"heading":t.tag);let r=t.options.level??u("level",t.tag,this.tagToGlobalOptions)??u("level",s,this.tagToGlobalOptions);if("number"!=typeof r||r<=0||r%1!=0)switch(t.tag){case"h2":r=2;break;case"h3":r=3;break;case"h4":r=4;break;case"h5":r=5;break;case"h6":r=6;break;default:r=1}const a={index:this.createIndex(s,r),id:o,orbit:s,unit:t};this.indexInfoArray.push(a),this.idToIndexInfo[o]=a,this.unitToId.set(t,o)}var e;for(const e of Object.keys(t.options)){const n=t.options[e];Array.isArray(n)&&this.countSTDN(n)}this.countSTDN(t.children)}countSTDN(t){for(const e of t)for(const t of e)"string"!=typeof t&&this.countUnit(t)}}function d(t,e,n){const i=n[e];return void 0===i?[]:i[t]??[]}function u(t,e,n){const i=d(t,e,n);if(0!==i.length)return i[i.length-1]}class h{constructor(t,e=[]){this.element=document.createElement(t),this.classList=this.element.classList,this.style=this.element.style,this.dataset=this.element.dataset,this.childNodes=this.element.childNodes,this.children=this.element.children;for(const t of e)if(t.length>0)try{this.element.classList.add(t.replace(/\s/g,"-"))}catch(t){console.log(t)}}append(...t){return this.element.append(...t.map((t=>t instanceof h?t.element:t))),this}prepend(...t){return this.element.prepend(...t.map((t=>t instanceof h?t.element:t))),this}after(...t){return this.element.after(...t.map((t=>t instanceof h?t.element:t))),this}before(...t){return this.element.before(...t.map((t=>t instanceof h?t.element:t))),this}setText(t){return this.element.textContent=t,this}setHTML(t){return this.element.innerHTML=t,this}scrollBy(t){return this.element.scrollBy(t),this}scrollIntoView(t){return this.element.scrollIntoView(t),this}getBoundingClientRect(){return this.element.getBoundingClientRect()}getClientRects(){return this.element.getClientRects()}setAttribute(t,e){try{this.element.setAttribute(t,e)}catch(t){console.log(t)}return this}removeAttribute(t){return this.element.removeAttribute(t),this}getAttribute(t){return this.element.getAttribute(t)}hasAttribute(t){return this.element.hasAttribute(t)}}class f extends h{constructor(t=[]){super("div",t)}addEventListener(t,e,n){return this.element.addEventListener(t,e,n),this}}class p extends h{constructor(t=[]){super("span",t)}addEventListener(t,e,n){return this.element.addEventListener(t,e,n),this}}class g{constructor(t){this.context=t,this.unitToCompiling=new Map}async compileUnit(t){if(!0===this.unitToCompiling.get(t))return g.createErrorElement("Loop");if("global"===t.tag||!0===t.options.global)return new f(["unit","global"]).element;this.unitToCompiling.set(t,!0);let e=t.options["compile-with"]??u("compile-with",t.tag,this.context.tagToGlobalOptions);"string"==typeof e&&0!==e.length||(e=t.tag);const n=this.context.tagToUnitCompiler[e];let i;if(void 0!==n){try{i=await n(t,this)}catch(t){console.log(t),i=g.createErrorElement("Broken")}if(i.classList.contains("warn"))return i.classList.add("unit"),this.unitToCompiling.set(t,!1),i}else{let n;g.supportedHTMLTags.includes(e)?(i=document.createElement(e),n=g.supportedHTMLTagsWithInlineChildren.includes(e)?await this.compileInlineSTDN(t.children):await this.compileSTDN(t.children)):g.supportedSVGTags.includes(e)?(i=document.createElementNS("http://www.w3.org/2000/svg",e),n=await this.compileInlineSTDN(t.children)):(i=document.createElement("div"),n=await this.compileSTDN(t.children)),i.append(n)}i.classList.add("unit");try{i.classList.add(e),"string"==typeof t.options.class&&i.classList.add(...t.options.class.trim().split(/\s+/));for(const e of d("class",t.tag,this.context.tagToGlobalOptions))"string"==typeof e&&i.classList.add(...e.trim().split(/\s+/))}catch(t){console.log(t)}const s=this.context.unitToId.get(t);void 0!==s&&(i.id=s);for(const e of Object.keys(t.options)){if("id"===e||"class"===e)continue;let n=e;if(e.startsWith("data-")||g.supportedHTMLAttributes.includes(e)||(n=`data-${e}`),i.hasAttribute(n))continue;let s=t.options[e];if(!0===s?s="":"number"==typeof s&&(s=s.toString()),"string"==typeof s){this.context.dir.length>0&&("src"===n||"href"===n)&&(!(r=s).startsWith("#")&&!/^[a-z][a-z0-9+.-]*:/i.test(r))&&(s=o(s,this.context.dir));try{i.setAttribute(n,s)}catch(t){console.log(t)}}}var r;return this.unitToCompiling.set(t,!1),i}async compileInline(t){return"string"!=typeof t?await this.compileUnit(t):new Text(t)}async compileLine(t){const e=new DocumentFragment;for(const n of t)e.append(await this.compileInline(n));return e}async compileInlineSTDN(t){const e=new DocumentFragment;for(let n=0;n<t.length;n++)e.append(await this.compileLine(t[n])),n!==t.length-1&&e.append(new Text("\n"));return e}async compileSTDN(t){const e=new DocumentFragment;for(const n of t)e.append(new f(["st-line"]).append(await this.compileLine(n)).element);return e}static createErrorElement(t){return new p(["unit","warn"]).setText(t).element}}g.supportedHTMLTags=["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","iframe","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],g.supportedHTMLTagsWithInlineChildren=["a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","audio","img","track","video","iframe","del","ins","col","colgroup","table","tbody","tfoot","thead","tr"],g.supportedSVGTags=["animate","animateMotion","circle","clipPath","ellipse","foreignObject","g","image","mask","path","pattern","rect","svg","text","textPath","tspan","use"],g.supportedHTMLAttributes=["accesskey","align","allow","alt","autoplay","cite","class","cols","colspan","controls","coords","crossorigin","datetime","decoding","default","dir","download","draggable","for","headers","href","hreflang","id","kind","label","lang","loop","muted","name","open","ping","poster","preload","referrerpolicy","rel","reversed","rows","rowspan","sandbox","scope","span","spellcheck","src","srcdoc","srclang","srcset","start","style","tabindex","target","title","translate","usemap","value","attributeName","begin","d","dur","fill","keyPoints","keyTimes","path","preserveAspectRatio","repeatCount","rotate","textLength","values","viewBox","x","y","width","height"];const m=async(e,n)=>{const i=(0,t.Pz)(e.children).replace(/{placeholder \[\]}\n/g,"//\n"),o=!0===(e.options.html??u("html","demo",n.context.tagToGlobalOptions)),r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=c.attachShadow({mode:"open"}),h=document.createElement("style"),f=document.createElement("div");a.contentEditable="true",r.append(a),r.append(c),d.append(h),d.append(f);let p=i;async function m(){const e=await n.compileUnit({tag:"code",options:{lang:"stdn",block:!0},children:p.split("\n").map((t=>t.split("")))});a.innerHTML="",a.append(e);const i=await async function(e,n="",i={}){const o=(0,t.Qc)(e);if(void 0===o)return;const r=await async function(t,e,n={}){0===e.length&&(e=location.href);const i={},o={};void 0!==n.builtInTagToUnitCompiler&&Object.assign(o,n.builtInTagToUnitCompiler);const r=[],a=[];for(const e of t){if(0===e.length)continue;const t=e[0];if("string"!=typeof t)if("global"!==t.tag){if(!0===t.options.global){let e=i[t.tag];void 0===e&&(i[t.tag]=e={}),void 0===e.__?e.__=[t.children]:e.__.push(t.children);for(const n of Object.keys(t.options)){if("global"===n||"__"===n)continue;const i=t.options[n];if(void 0===i)continue;const o=e[n];void 0===o?e[n]=[i]:o.push(i)}}}else{const e=t.options.mod;"string"==typeof e&&(r.push(`https://cdn.jsdelivr.net/gh/st-mod/${e}/main.css`),a.push(`https://cdn.jsdelivr.net/gh/st-mod/${e}/ucs.js`));const n=t.options.css;"string"==typeof n&&r.push(`https://cdn.jsdelivr.net/gh/st-mod/${n}/main.css`);const i=t.options.ucs;"string"==typeof i&&a.push(`https://cdn.jsdelivr.net/gh/st-mod/${i}/ucs.js`);{const e=t.options["mod-gh"];"string"==typeof e&&(r.push(`https://cdn.jsdelivr.net/gh/${e}/main.css`),a.push(`https://cdn.jsdelivr.net/gh/${e}/ucs.js`))}{const e=t.options["css-gh"];"string"==typeof e&&r.push(`https://cdn.jsdelivr.net/gh/${e}/main.css`)}{const e=t.options["ucs-gh"];"string"==typeof e&&a.push(`https://cdn.jsdelivr.net/gh/${e}/ucs.js`)}{const e=t.options["css-src"];"string"==typeof e&&r.push(e)}{const e=t.options["ucs-src"];"string"==typeof e&&a.push(e)}}}const c=(await s(r,e)).map((t=>`@import ${JSON.stringify(t)};`)).join("");for(const t of await s(a,e))try{Object.assign(o,await new Function(`return import(${JSON.stringify(t)})`)())}catch(t){console.log(t)}const d=new l(i);return d.countSTDN(t),{css:c,dir:e,indexInfoArray:d.indexInfoArray,idToIndexInfo:d.idToIndexInfo,tagToGlobalOptions:i,tagToUnitCompiler:o,title:d.title,unitToId:d.unitToId}}(o,n,i),a=new g(r);return{documentFragment:await a.compileSTDN(o),context:r}}(`{css-gh st-org/stui@0.2.1, mod-gh st-org/st-std@0.4.7, global []}\n${p}`,n.context.dir);if(void 0!==i&&(f.innerHTML="",h.textContent=i.context.css,f.append(i.documentFragment)),o){const{innerHTML:t}=f,e=await n.compileUnit({tag:"code",options:{lang:"html",block:!0},children:t.slice('<div class="st-line"><div class="unit global"></div></div>'.length).split("\n").map((t=>t.split("")))});f.innerHTML="",f.append(e)}}return await m(),a.addEventListener("blur",(async()=>{if(0===a.children.length)return;const t=Array.from(a.children[0].children).map((t=>t.textContent??"")).join("\n");t!==p&&(p=t,await m())})),r}})();var o=i.T;export{o as demo};