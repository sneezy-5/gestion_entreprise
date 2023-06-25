import{v as b,k as y,N as A,a4 as u}from"./index-548d44d1.js";import{a as p,d as B,s as v,b as C,n as V}from"./easing-9f15041e.js";const S=b()({name:"VDialogTransition",props:{target:Object},setup(g,i){let{slots:e}=i;const o={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,l){var c;await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:s,y:a,sx:f,sy:h,speed:r}=x(g.target,t),m=p(t,[{transform:`translate(${s}px, ${a}px) scale(${f}, ${h})`,opacity:0},{}],{duration:225*r,easing:B});(c=w(t))==null||c.forEach(n=>{p(n,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:v})}),m.finished.then(()=>l())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,l){var c;await new Promise(n=>requestAnimationFrame(n));const{x:s,y:a,sx:f,sy:h,speed:r}=x(g.target,t);p(t,[{},{transform:`translate(${s}px, ${a}px) scale(${f}, ${h})`,opacity:0}],{duration:125*r,easing:C}).finished.then(()=>l()),(c=w(t))==null||c.forEach(n=>{p(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:v})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>g.target?y(u,A({name:"dialog-transition"},o,{css:!1}),e):y(u,{name:"dialog-transition"},e)}});function w(g){var e;const i=(e=g.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return i&&[...i]}function x(g,i){const e=g.getBoundingClientRect(),o=V(i),[t,l]=getComputedStyle(i).transformOrigin.split(" ").map(P=>parseFloat(P)),[s,a]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let f=e.left+e.width/2;s==="left"||a==="left"?f-=e.width/2:(s==="right"||a==="right")&&(f+=e.width/2);let h=e.top+e.height/2;s==="top"||a==="top"?h-=e.height/2:(s==="bottom"||a==="bottom")&&(h+=e.height/2);const r=e.width/o.width,m=e.height/o.height,c=Math.max(1,r,m),n=r/c||0,E=m/c||0,d=o.width*o.height/(window.innerWidth*window.innerHeight),$=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:f-(t+o.left),y:h-(l+o.top),sx:n,sy:E,speed:$}}export{S as V};