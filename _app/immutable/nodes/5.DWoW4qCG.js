import{a as d,t as f}from"../chunks/disclose-version.CI5jOE9z.js";import{V as b,U as t,s as V,c as g,r as l,W as n,f as W,t as X,X as $}from"../chunks/runtime.CWXoeozj.js";import{e as k}from"../chunks/events.BLL9sOXc.js";import{e as y,i as x}from"../chunks/each.UV7sBcvo.js";import{s as q}from"../chunks/class.CW7JzOCO.js";var z=f("<div></div>"),A=f('<div class="row svelte-1v03c8t"></div> <br>',1),B=f('<section class="svelte-1v03c8t"><div></div> <center><button class="svelte-1v03c8t">replay</button></center></section>');function J(C){let a=b([[1,0,1],[0,1,0],[1,0,1]]),i=b(t(a).map(s=>s.map(r=>!1)));console.log(t(i));let c=[];const j=s=>{const{i:r,j:e}=s;n(i,t(i)[r][e]=!0),c.push(s),c=c,n(a,t(a)[r][e]=1-t(a)[r][e])},w=()=>{c.map(async(s,r)=>{setTimeout(function(){const{i:e,j:o}=s;n(a,t(a)[e][o]=1-t(a)[e][o]),n(i,t(i)[e][o]=!1)},1e3+1e3*r)}),c=[]};var v=B(),m=g(v);y(m,5,()=>t(a),x,(s,r,e)=>{var o=A(),_=W(o);y(_,5,()=>t(r),x,(T,U,h)=>{var p=z();X(()=>q(p,`${(t(U)===1?"ele dark":"ele light")??""} svelte-1v03c8t`)),k("click",p,D=>{t(i)[e][h]||j({i:e,j:h})}),d(T,p)}),l(_),$(2),d(s,o)}),l(m);var u=V(m,2),R=g(u);l(u),l(v),k("click",R,w),d(C,v)}export{J as component};
