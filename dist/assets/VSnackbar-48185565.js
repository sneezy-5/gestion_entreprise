import{v as C,y as T,cV as p,z as _,cq as g,B as h,bT as B,bU as L,H as N,cW as R,bY as x,ct as A,E as O,r as I,w as i,a$ as M,J as U,k as n,cv as $,ck as q,N as c}from"./index-54e10577.js";import{m as z,u as D,V as u}from"./VOverlay-0a4d3386.js";import{f as E}from"./forwardRefs-a29b5f65.js";const W=C()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...T({location:"bottom"}),...p(),..._(),...g(),...h(),...B(z({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const a=L(e,"modelValue"),{locationStyles:m}=N(e),{positionClasses:d}=R(e),{scopeId:f}=D(),{themeClasses:k}=x(e),{colorClasses:b,colorStyles:P,variantClasses:V}=A(e),{roundedClasses:y}=O(e),r=I();i(a,o),i(()=>e.timeout,o),M(()=>{a.value&&o()});let l=-1;function o(){window.clearTimeout(l);const s=Number(e.timeout);!a.value||s===-1||(l=window.setTimeout(()=>{a.value=!1},s))}function w(){window.clearTimeout(l)}return U(()=>{const[s]=u.filterProps(e);return n(u,c({ref:r,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},d.value,e.class],style:e.style},s,{modelValue:a.value,"onUpdate:modelValue":S=>a.value=S,contentProps:c({class:["v-snackbar__wrapper",k.value,b.value,y.value,V.value],style:[m.value,P.value],onPointerenter:w,onPointerleave:o},s.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},f),{default:()=>[$(!1,"v-snackbar"),t.default&&n("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[t.default()]),t.actions&&n(q,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[n("div",{class:"v-snackbar__actions"},[t.actions()])]})],activator:t.activator})}),E({},r)}});export{W as V};