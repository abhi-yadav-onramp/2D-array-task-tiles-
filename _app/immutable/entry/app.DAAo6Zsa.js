const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BFqAJOGG.js","../chunks/disclose-version.CI5jOE9z.js","../chunks/runtime.CWXoeozj.js","../chunks/attributes.sq-xGM6p.js","../chunks/store.C7a1M3qg.js","../chunks/stores.Bu7Eb8dy.js","../chunks/entry.9aiTB5X-.js","../chunks/index.C6B2tssX.js","../assets/0.ZIYYjtOZ.css","../nodes/1.3Xwf-_0F.js","../chunks/render.DhGnFNZY.js","../chunks/events.BLL9sOXc.js","../chunks/svelte-head.Dsx1Xwo-.js","../nodes/2.CDEhQq30.js","../assets/2.B-a-M19y.css","../nodes/3.6hRR5jDU.js","../chunks/index.R8ovVqwX.js","../nodes/4.DSMhBO1u.js","../chunks/each.UV7sBcvo.js","../chunks/class.CW7JzOCO.js","../assets/4.BTMwL5r3.css","../nodes/5.DWoW4qCG.js","../assets/5.dmcBf8yn.css","../nodes/6.BN_10t5-.js","../chunks/if.BFHXJMvG.js","../chunks/props.CPSkFctN.js","../assets/6.CBD7-3nv.css","../nodes/7.Cu9kYecw.js","../assets/7.DSgnM88b.css","../nodes/8.Hd-qqxcp.js","../assets/8.D09JukYp.css"])))=>i.map(i=>d[i]);
var j=e=>{throw TypeError(e)};var Y=(e,t,r)=>t.has(e)||j("Cannot "+r);var f=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),x=(e,t,r)=>t.has(e)?j("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),A=(e,t,r,i)=>(Y(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as W,e as X,d as Z,l as N,m as $,o as tt,av as et,aw as rt,ac as G,x as st,Y as at,U as v,A as k,aA as nt,R as ot,D as it,an as O,ap as H,p as ct,ao as ut,f as w,s as lt,a as ft,aB as mt,aC as T,ad as D,c as dt,t as _t,r as ht}from"../chunks/runtime.CWXoeozj.js";import{h as vt,m as gt,u as yt,s as Et}from"../chunks/render.DhGnFNZY.js";import{c as I,a as R,t as J,d as Rt}from"../chunks/disclose-version.CI5jOE9z.js";import{i as V}from"../chunks/if.BFHXJMvG.js";import{p as S,a as Pt}from"../chunks/props.CPSkFctN.js";function bt(e){throw new Error("lifecycle_outside_component")}function C(e,t,r){W&&X();var i=e,n,a;Z(()=>{n!==(n=t())&&(a&&($(a),a=null),n&&(a=N(()=>r(i,n))))}),W&&(i=tt)}function z(e,t){return e===t||(e==null?void 0:e[at])===t}function B(e={},t,r,i){return et(()=>{var n,a;return rt(()=>{n=a,a=[],G(()=>{e!==r(...a)&&(t(e,...a),n&&z(r(...n),e)&&t(null,...n))})}),()=>{st(()=>{a&&z(r(...a),e)&&t(null,...a)})}}),e}function pt(e){return class extends wt{constructor(t){super({component:e,...t})}}}var g,m;class wt{constructor(t){x(this,g);x(this,m);var a;var r=new Map,i=(s,o)=>{var c=it(o);return r.set(s,c),c};const n=new Proxy({...t.props||{},$$events:{}},{get(s,o){return v(r.get(o)??i(o,Reflect.get(s,o)))},has(s,o){return v(r.get(o)??i(o,Reflect.get(s,o))),Reflect.has(s,o)},set(s,o,c){return k(r.get(o)??i(o,c),c),Reflect.set(s,o,c)}});A(this,m,(t.hydrate?vt:gt)(t.component,{target:t.target,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((a=t==null?void 0:t.props)!=null&&a.$$host)||t.sync===!1)&&nt(),A(this,g,n.$$events);for(const s of Object.keys(f(this,m)))s==="$set"||s==="$destroy"||s==="$on"||ot(this,s,{get(){return f(this,m)[s]},set(o){f(this,m)[s]=o},enumerable:!0});f(this,m).$set=s=>{Object.assign(n,s)},f(this,m).$destroy=()=>{yt(f(this,m))}}$set(t){f(this,m).$set(t)}$on(t,r){f(this,g)[t]=f(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return f(this,g)[t].push(i),()=>{f(this,g)[t]=f(this,g)[t].filter(n=>n!==i)}}$destroy(){f(this,m).$destroy()}}g=new WeakMap,m=new WeakMap;function kt(e){O===null&&bt(),O.l!==null?Lt(O).m.push(e):H(()=>{const t=G(e);if(typeof t=="function")return t})}function Lt(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const xt="modulepreload",At=function(e,t){return new URL(e,t).href},F={},h=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.all(r.map(c=>{if(c=At(c,i),c in F)return;F[c]=!0;const y=c.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(!!i)for(let l=a.length-1;l>=0;l--){const _=a[l];if(_.href===c&&(!y||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${b}`))return;const u=document.createElement("link");if(u.rel=y?"stylesheet":xt,y||(u.as="script",u.crossOrigin=""),u.href=c,o&&u.setAttribute("nonce",o),document.head.appendChild(u),y)return new Promise((l,_)=>{u.addEventListener("load",l),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>t()).catch(a=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a})},jt={};var Ot=J('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Tt=J("<!> <!>",1);function Dt(e,t){ct(t,!0);let r=S(t,"components",23,()=>[]),i=S(t,"data_0",3,null),n=S(t,"data_1",3,null);ut(()=>t.stores.page.set(t.page)),H(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let a=T(!1),s=T(!1),o=T(null);kt(()=>{const u=t.stores.page.subscribe(()=>{v(a)&&(k(s,!0),mt().then(()=>{k(o,Pt(document.title||"untitled page"))}))});return k(a,!0),u});const c=D(()=>t.constructors[1]);var y=Tt(),b=w(y);V(b,()=>t.constructors[1],u=>{var l=I();const _=D(()=>t.constructors[0]);var P=w(l);C(P,()=>v(_),(E,L)=>{B(L(E,{get data(){return i()},get form(){return t.form},children:(d,It)=>{var U=I(),K=w(U);C(K,()=>v(c),(M,Q)=>{B(Q(M,{get data(){return n()},get form(){return t.form}}),p=>r()[1]=p,()=>{var p;return(p=r())==null?void 0:p[1]})}),R(d,U)},$$slots:{default:!0}}),d=>r()[0]=d,()=>{var d;return(d=r())==null?void 0:d[0]})}),R(u,l)},u=>{var l=I();const _=D(()=>t.constructors[0]);var P=w(l);C(P,()=>v(_),(E,L)=>{B(L(E,{get data(){return i()},get form(){return t.form}}),d=>r()[0]=d,()=>{var d;return(d=r())==null?void 0:d[0]})}),R(u,l)});var q=lt(b,2);V(q,()=>v(a),u=>{var l=Ot(),_=dt(l);V(_,()=>v(s),P=>{var E=Rt();_t(()=>Et(E,v(o))),R(P,E)}),ht(l),R(u,l)}),R(e,y),ft()}const Yt=pt(Dt),Wt=[()=>h(()=>import("../nodes/0.BFqAJOGG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>h(()=>import("../nodes/1.3Xwf-_0F.js"),__vite__mapDeps([9,1,2,10,11,12,4,5,6,7]),import.meta.url),()=>h(()=>import("../nodes/2.CDEhQq30.js"),__vite__mapDeps([13,1,2,12,3,10,11,4,7,14]),import.meta.url),()=>h(()=>import("../nodes/3.6hRR5jDU.js"),__vite__mapDeps([15,16,1,2,12]),import.meta.url),()=>h(()=>import("../nodes/4.DSMhBO1u.js"),__vite__mapDeps([17,1,2,11,18,19,20]),import.meta.url),()=>h(()=>import("../nodes/5.DWoW4qCG.js"),__vite__mapDeps([21,1,2,11,18,19,22]),import.meta.url),()=>h(()=>import("../nodes/6.BN_10t5-.js"),__vite__mapDeps([23,1,2,10,11,12,24,18,3,19,4,25,6,7,26]),import.meta.url),()=>h(()=>import("../nodes/7.Cu9kYecw.js"),__vite__mapDeps([27,16,1,2,12,28]),import.meta.url),()=>h(()=>import("../nodes/8.Hd-qqxcp.js"),__vite__mapDeps([29,1,2,10,11,12,24,18,30]),import.meta.url)],zt=[],Ft={"/":[2],"/about":[3],"/game2":[5],"/game":[4],"/sverdle":[-7],"/sverdle/how-to-play":[7],"/toDoList":[8]},Gt={handleError:({error:e})=>{console.error(e)},reroute:()=>{}};export{Ft as dictionary,Gt as hooks,jt as matchers,Wt as nodes,Yt as root,zt as server_loads};
