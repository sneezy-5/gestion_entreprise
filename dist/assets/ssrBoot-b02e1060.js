import{v as c,x as v,B as u,bY as m,G as h,D as f,l as a,c9 as s,J as g,k as y,r as B,a$ as S,b9 as x}from"./index-54e10577.js";const b=c()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...u()},setup(e,r){let{attrs:t}=r;const{themeClasses:i}=m(e),{textColorClasses:n,textColorStyles:l}=h(f(e,"color")),d=a(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=s(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),o});return g(()=>y("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},i.value,n.value,e.class],style:[d.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});function k(){const e=B(!1);return S(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:a(()=>e.value?void 0:{transition:"none !important"}),isBooted:x(e)}}export{b as V,k as u};