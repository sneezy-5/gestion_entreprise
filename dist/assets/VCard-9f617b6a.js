import{v as y,x as f,c8 as z,J as b,k as n,I as u,bW as h,ck as k,cl as F,cn as J,cf as N,co as O,cP as Q,y as Y,cV as $,z as j,cp as G,A as K,B as U,cq as X,bY as Z,cs as ee,ct as ae,c7 as te,cg as ne,cu as de,cQ as ie,H as se,cW as le,E as ce,cr as re,l as p,L as ue,bd as ve,cR as oe,cv as me}from"./index-54e10577.js";import{c as A,V as I}from"./VAvatar-d640487b.js";import{V as ge}from"./VImg-17513cc0.js";const ke=y()({name:"VCardActions",props:f(),setup(e,i){let{slots:t}=i;return z({VBtn:{variant:"text"}}),b(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ye=A("v-card-subtitle"),fe=A("v-card-title"),be=y()({name:"VCardItem",props:{appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...f(),...h()},setup(e,i){let{slots:t}=i;return b(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(I,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(fe,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),g&&n(ye,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(I,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ae=A("v-card-text"),Ie=y()({name:"VCard",directives:{Ripple:F},props:{appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...J(),...f(),...h(),...N(),...O(),...Q(),...Y(),...$(),...j(),...G(),...K(),...U(),...X({variant:"elevated"})},setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=Z(e),{borderClasses:s}=ee(e),{colorClasses:o,colorStyles:m,variantClasses:g}=ae(e),{densityClasses:l}=te(e),{dimensionStyles:d}=ne(e),{elevationClasses:P}=de(e),{loaderClasses:S}=ie(e),{locationStyles:x}=se(e),{positionClasses:B}=le(e),{roundedClasses:L}=ce(e),c=re(e,t),T=p(()=>e.link!==!1&&c.isLink.value),r=p(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return b(()=>{const D=T.value?"a":e.tag,_=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),E=_||R,H=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),W=!!(a.image||e.image),q=E||M||H,w=!!(a.text||e.text);return ue(n(D,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,P.value,S.value,B.value,L.value,g.value,e.class],style:[m.value,d.value,x.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[W&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(oe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(be,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),w&&n(Ae,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(ke,null,{default:a.actions}),me(r.value,"v-card")]}}),[[ve("ripple"),r.value&&e.ripple]])}),{}}});export{Ae as V,Ie as a,fe as b,be as c,ye as d,ke as e};
