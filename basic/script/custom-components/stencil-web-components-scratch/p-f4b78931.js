const t="stencil-web-components-scratch";let e,n,l=0,o=!1;const s="undefined"!=typeof window?window:{},c=s.document||{head:{}},r={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},i=(()=>!!c.head.attachShadow)(),a=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),u=new WeakMap,f=t=>u.get(t),p=(t,e)=>u.set(e.o=t,e),m=(t,e)=>e in t,d=t=>console.error(t),w=new Map,h=new Map,$=[],_=[],y=[],b=(t,e)=>n=>{t.push(n),o||(o=!0,e&&4&r.t?v(g):r.raf(g))},j=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){d(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},g=()=>{l++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){d(e)}t.length=0})($);const t=2==(6&r.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;j(_,t),j(y,t),_.length>0&&(y.push(..._),_.length=0),(o=$.length+_.length+y.length>0)?r.raf(g):l=0},v=t=>Promise.resolve().then(t),S=b(_,!0),U={},M=t=>"object"==(t=typeof t)||"function"===t,L=()=>s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_stencil_web_components_scratch("./p-d8631f0b.js").then(()=>{r.s=s.__stencil_cssshim}),O=async()=>{r.s=s.__stencil_cssshim;const e=new RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(c.querySelectorAll("script")).find(n=>e.test(n.src)||n.getAttribute("data-stencil-namespace")===t),l=n["data-opts"];{const t=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,s.location.href));return R(t.href,n),window.customElements||await __sc_import_stencil_web_components_scratch("./p-3b66a627.js"),Object.assign(Object.assign({},l),{resourcesUrl:t.href})}},R=(e,n)=>{const l=(t=>`__sc_import_${t.replace(/\s|-/g,"_")}`)(t);try{s[l]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const t=new Map;s[l]=o=>{const r=new URL(o,e).href;let i=t.get(r);if(!i){const e=c.createElement("script");e.type="module",e.crossOrigin=n.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${l}.m = m;`],{type:"application/javascript"})),i=new Promise(t=>{e.onload=()=>{t(s[l].m),e.remove()}}),t.set(r,i),c.head.appendChild(e)}return i}}},k=new WeakMap,P=t=>"sc-"+t,C=(t,e,...n)=>{let l=null,o=!1,s=!1,c=[];const r=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!M(l))&&(l=String(l)),o&&s?c[c.length-1].i+=l:c.push(o?x(null,l):l),s=o)};if(r(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const i=x(t,null);return i.u=e,c.length>0&&(i.p=c),i},x=(t,e)=>({t:0,h:t,i:e,$:null,p:null,u:null}),E={},W=(t,e,n,l,o,c)=>{if(n===l)return;let i=m(t,e),a=e.toLowerCase();if("class"===e){const e=t.classList,o=D(n),s=D(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("ref"===e)l&&l(t);else if(i||"o"!==e[0]||"n"!==e[1]){const s=M(l);if((i||s&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(u){}null==l||!1===l?t.removeAttribute(e):(!i||4&c||o)&&!s&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):m(s,a)?a.slice(2):a[2]+e.slice(3),n&&r.rel(t,e,n,!1),l&&r.ael(t,e,l,!1)},A=/\s/,D=t=>t?t.split(A):[],T=(t,e,n,l)=>{const o=11===e.$.nodeType&&e.$.host?e.$.host:e.$,s=t&&t.u||U,c=e.u||U;for(l in s)l in c||W(o,l,s[l],void 0,n,e.t);for(l in c)W(o,l,s[l],c[l],n,e.t)},F=(t,n,l)=>{let o,s,r=n.p[l],i=0;if(null!==r.i)o=r.$=c.createTextNode(r.i);else if(o=r.$=c.createElement(r.h),T(null,r,!1),(t=>null!=t)(e)&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.p)for(i=0;i<r.p.length;++i)(s=F(t,r,i))&&o.appendChild(s);return o},H=(t,e,l,o,s,c)=>{let r,i=t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=F(null,l,s))&&(o[s].$=r,i.insertBefore(r,e))},q=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(o=l.$,V(l),o.remove())},B=(t,e)=>t.h===e.h,N=(t,e)=>{const n=e.$=t.$,l=t.p,o=e.p;null===e.i?(T(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,c=0,r=e.length-1,i=e[0],a=e[r],u=l.length-1,f=l[0],p=l[u];for(;s<=r&&c<=u;)null==i?i=e[++s]:null==a?a=e[--r]:null==f?f=l[++c]:null==p?p=l[--u]:B(i,f)?(N(i,f),i=e[++s],f=l[++c]):B(a,p)?(N(a,p),a=e[--r],p=l[--u]):B(i,p)?(N(i,p),t.insertBefore(i.$,a.$.nextSibling),i=e[++s],p=l[--u]):B(a,f)?(N(a,f),t.insertBefore(a.$,i.$),a=e[--r],f=l[++c]):(o=F(e&&e[c],n,c),f=l[++c],o&&i.$.parentNode.insertBefore(o,i.$));s>r?H(t,null==l[u+1]?null:l[u+1].$,n,l,c,u):c>u&&q(e,s,r)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),H(n,null,e,o,0,o.length-1)):null!==l&&q(l,0,l.length-1)):t.i!==e.i&&(n.data=e.i)},V=t=>{t.u&&t.u.ref&&t.u.ref(null),t.p&&t.p.forEach(V)},z=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},G=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>I(t,e,n,o,l);let c;return z(e,e.j),l?(e.t|=256,e.g&&(e.g.forEach(([t,e])=>X(o,t,e)),e.g=null),c=X(o,"componentWillLoad")):c=X(o,"componentWillUpdate"),Y(c,()=>S(s))},I=(t,l,o,s,r)=>{const a=t["s-rc"];r&&((t,e)=>{const n=((t,e)=>{let n=P(e.v),l=h.get(n);if(t=11===t.nodeType?t:c,l)if("string"==typeof l){let e,o=k.get(t=t.head||t);o||k.set(t,o=new Set),o.has(n)||((e=c.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(i&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(t,o),((t,l,o,s)=>{n=t.tagName;const c=l.S||x(null,null),r=(t=>t&&t.h===E)(s)?s:C(null,null,s);o.U&&(r.u=r.u||{},o.U.forEach(([e,n])=>r.u[n]=t[e])),r.h=null,r.t|=4,l.S=r,r.$=c.$=t.shadowRoot||t,e=t["s-sc"],N(c,r)})(t,l,o,J(s)),l.t&=-17,l.t|=2,a&&(a.forEach(t=>t()),t["s-rc"]=void 0);{const e=t["s-p"],n=()=>K(t,l,o);0===e.length?n():(Promise.all(e).then(n),l.t|=4,e.length=0)}},J=t=>{try{t=t.render()}catch(e){d(e)}return t},K=(t,e,n)=>{const l=e.o,o=e.j;64&e.t?X(l,"componentDidUpdate"):(e.t|=64,t.classList.add("hydrated"),X(l,"componentDidLoad"),e.M(t),o||Q()),e._&&(e._(),e._=void 0),512&e.t&&v(()=>G(t,e,n,!1)),e.t&=-517},Q=()=>{c.documentElement.classList.add("hydrated"),r.t|=2},X=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){d(l)}},Y=(t,e)=>t&&t.then?t.then(e):e(),Z=(t,e,n)=>{if(e.L){t.watchers&&(e.O=t.watchers);const l=Object.entries(e.L),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>f(t).R.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=f(this),s=o.k,c=o.R.get(e),r=o.t,i=o.o;if(!((n=((t,e)=>null==t||M(t)?t:1&e?String(t):t)(n,l.L[e][0]))===c||8&r&&void 0!==c)&&(o.R.set(e,n),i)){if(l.O&&128&r){const t=l.O[e];t&&t.forEach(t=>{try{i[t](n,c,e)}catch(l){d(l)}})}2==(18&r)&&G(s,o,l,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(t,e,l){r.jmp(()=>{const e=n.get(t);this[e]=(null!==l||"boolean"!=typeof this[e])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,l])=>{const o=l[1]||t;return n.set(o,t),512&l[0]&&e.U.push([t,o]),o})}}return t},tt=(t,e={})=>{const n=[],l=e.exclude||[],o=c.head,p=s.customElements,m=o.querySelector("meta[charset]"),$=c.createElement("style"),_=[];let y,b=!0;Object.assign(r,e),r.l=new URL(e.resourcesUrl||"./",c.baseURI).href,e.syncQueue&&(r.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],v:e[1],L:e[2],P:e[3]};o.L=e[2],o.P=e[3],o.U=[],o.O={},!i&&1&o.t&&(o.t|=8);const s=o.v,m=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,k:t,R:new Map};e.C=new Promise(t=>e.M=t),t["s-p"]=[],t["s-rc"]=[],u.set(t,e)})(t=this),1&o.t&&(i?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){y&&(clearTimeout(y),y=null),b?_.push(this):r.jmp(()=>((t,e)=>{if(0==(1&r.t)){const n=()=>{},l=f(t);if(e.P&&(l.W=((t,e,n)=>{e.g=e.g||[];const l=n.map(([n,l,o])=>{const s=((t,e)=>32&e?c.body:t)(t,n),i=((t,e)=>n=>{256&t.t?t.o[e](n):t.g.push([e,n])})(e,o),a=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return r.ael(s,l,i,a),()=>r.rel(s,l,i,a)});return()=>l.forEach(t=>t())})(t,l,e.P)),!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){z(l,l.j=e);break}}e.L&&Object.entries(e.L).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),v(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.v.replace(/-/g,"_"),n=t.A,l=w.get(n);return l?l[e]:__sc_import_stencil_web_components_scratch(`./${n}.entry.js`).then(t=>(w.set(n,t),t[e]),d)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.O=o.watchers,Z(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(r){d(r)}e.t&=-9,e.t|=128,t()}const t=P(n.v);if(!h.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_stencil_web_components_scratch("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=h.get(t);a&&n?(l=l||new CSSStyleSheet).replace(e):l=e,h.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.j,c=()=>G(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){r.jmp(()=>(()=>{if(0==(1&r.t)){const t=f(this),e=t.o;t.W&&(t.W(),t.W=void 0),X(e,"componentDidUnload")}})())}forceUpdate(){((t,e)=>{{const n=f(t);n.k.isConnected&&2==(18&n.t)&&G(t,n,e,!1)}})(this,o)}componentOnReady(){return f(this).C}};o.A=t[0],l.includes(s)||p.get(s)||(n.push(s),p.define(s,Z(m,o,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),o.insertBefore($,m?m.nextSibling:o.firstChild),b=!1,_.length>0?_.forEach(t=>t.connectedCallback()):r.jmp(()=>y=setTimeout(Q,30,"timeout"))},et=(t,e,n)=>{const l=nt(t);return{emit:t=>{const o=new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t});return l.dispatchEvent(o),o}}},nt=t=>f(t).k;export{E as H,L as a,tt as b,et as c,nt as g,C as h,O as p,p as r};