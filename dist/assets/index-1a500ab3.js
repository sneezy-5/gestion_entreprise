import{v as c,a4 as x,a3 as g,h as m,a9 as S}from"./index-54e10577.js";function s(o){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",i=arguments.length>2?arguments[2]:void 0;return c()({name:o,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:i},origin:{type:String,default:d}},setup(n,r){let{slots:a}=r;const t={onBeforeEnter(e){e.style.transformOrigin=n.origin},onLeave(e){if(n.leaveAbsolute){const{offsetTop:l,offsetLeft:f,offsetWidth:y,offsetHeight:u}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${l}px`,e.style.left=`${f}px`,e.style.width=`${y}px`,e.style.height=`${u}px`}n.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(n.leaveAbsolute&&(e!=null&&e._transitionInitialStyles)){const{position:l,top:f,left:y,width:u,height:v}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=l||"",e.style.top=f||"",e.style.left=y||"",e.style.width=u||"",e.style.height=v||""}}};return()=>{const e=n.group?x:g;return m(e,{name:n.disabled?"":o,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:t},a.default)}}})}function h(o,d){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return c()({name:o,props:{mode:{type:String,default:i},disabled:Boolean},setup(n,r){let{slots:a}=r;return()=>m(g,{name:n.disabled?"":o,css:!n.disabled,...n.disabled?{}:d},a.default)}})}function p(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=S(`offset-${i}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[i]:t.style[i]}},onEnter(t){const e=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const l=`${t[n]}px`;t.style[i]="0",t.offsetHeight,t.style.transition=e.transition,o&&t._parent&&t._parent.classList.add(o),requestAnimationFrame(()=>{t.style[i]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[i]:t.style[i]},t.style.overflow="hidden",t.style[i]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[i]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(t){o&&t._parent&&t._parent.classList.remove(o),a(t)}function a(t){const e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,e!=null&&(t.style[i]=e),delete t._initialStyle}}s("fab-transition","center center","out-in");s("dialog-bottom-transition");s("dialog-top-transition");const _=s("fade-transition"),w=s("scale-transition");s("scroll-x-transition");s("scroll-x-reverse-transition");s("scroll-y-transition");s("scroll-y-reverse-transition");s("slide-x-transition");s("slide-x-reverse-transition");const T=s("slide-y-transition");s("slide-y-reverse-transition");const L=h("expand-transition",p()),A=h("expand-x-transition",p("",!0));export{L as V,_ as a,A as b,T as c,w as d};