import{v as i,ab as y,aa as V,x as o,h as f,c3 as k,I as C,b_ as P,z,b$ as S,A as h,B as A,cC as b,c0 as I,cF as B,cb as F,E as R,cL as T,J as _,k as c,V as x,cH as D}from"./index-bfa2d538.js";import{V as $}from"./VImg-d7e6df3b.js";function L(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return i()({name:e??y(V(a.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...o()},setup(s,r){let{slots:t}=r;return()=>{var n;return f(s.tag,{class:[a,s.class],style:s.style},(n=t.default)==null?void 0:n.call(t))}}})}const E=k({start:Boolean,end:Boolean,icon:C,image:String,...o(),...P(),...z(),...S(),...h(),...A(),...b({variant:"flat"})},"v-avatar"),N=i()({name:"VAvatar",props:E(),setup(a,l){let{slots:e}=l;const{themeClasses:s}=I(a),{colorClasses:r,colorStyles:t,variantClasses:n}=B(a),{densityClasses:m}=F(a),{roundedClasses:v}=R(a),{sizeClasses:d,sizeStyles:g}=T(a);return _(()=>c(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},s.value,r.value,m.value,v.value,d.value,n.value,a.class],style:[t.value,g.value,a.style]},{default:()=>{var u;return[a.image?c($,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?c(x,{key:"icon",icon:a.icon},null):(u=e.default)==null?void 0:u.call(e),D(!1,"v-avatar")]}})),{}}});export{N as V,L as c};
