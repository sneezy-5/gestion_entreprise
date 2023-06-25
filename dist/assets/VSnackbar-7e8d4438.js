import{v as C,y as p,d5 as T,z as _,cC as g,B as h,bX as B,bY as L,H as N,d6 as R,c0 as x,cF as A,E as O,r as H,w as i,b0 as I,J as M,k as n,cH as z,cw as D,N as c}from"./index-548d44d1.js";import{m as E,u as F,V as u}from"./VOverlay-3b2ac0ae.js";import{f as G}from"./forwardRefs-a29b5f65.js";const Y=C()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...p({location:"bottom"}),...T(),..._(),...g(),...h(),...B(E({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const a=L(e,"modelValue"),{locationStyles:m}=N(e),{positionClasses:d}=R(e),{scopeId:f}=F(),{themeClasses:k}=x(e),{colorClasses:b,colorStyles:P,variantClasses:V}=A(e),{roundedClasses:y}=O(e),r=H();i(a,o),i(()=>e.timeout,o),I(()=>{a.value&&o()});let l=-1;function o(){window.clearTimeout(l);const s=Number(e.timeout);!a.value||s===-1||(l=window.setTimeout(()=>{a.value=!1},s))}function w(){window.clearTimeout(l)}return M(()=>{const[s]=u.filterProps(e);return n(u,c({ref:r,class:["v-snackbar",{"v-snackbar--active":a.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},d.value,e.class],style:e.style},s,{modelValue:a.value,"onUpdate:modelValue":S=>a.value=S,contentProps:c({class:["v-snackbar__wrapper",k.value,b.value,y.value,V.value],style:[m.value,P.value],onPointerenter:w,onPointerleave:o},s.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},f),{default:()=>[z(!1,"v-snackbar"),t.default&&n("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[t.default()]),t.actions&&n(D,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[n("div",{class:"v-snackbar__actions"},[t.actions()])]})],activator:t.activator})}),G({},r)}});export{Y as V};