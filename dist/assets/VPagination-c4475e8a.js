import{v as F,x as w,bW as D,A as N,B as M,bY as T,c7 as G,J as p,k as s,c9 as J,r as z,aY as O,I as _,cn as j,co as Q,z as Z,bX as ee,cq as ae,bU as te,F as le,c1 as ie,u as ne,c8 as $,c3 as se,l as y,b_ as S,D as b,bS as P,N as k,cX as C,aS as R}from"./index-54e10577.js";const oe=F()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...w(),...D(),...N(),...M()},setup(e,h){let{slots:t}=h;const{themeClasses:m}=T(e),{densityClasses:i}=G(e);return p(()=>s(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},m.value,i.value,e.class],style:e.style},{default:()=>{var c,V,g;return[(c=t.top)==null?void 0:c.call(t),t.default?s("div",{class:"v-table__wrapper",style:{height:J(e.height)}},[s("table",null,[t.default()])]):(V=t.wrapper)==null?void 0:V.call(t),(g=t.bottom)==null?void 0:g.call(t)]}})),{}}});function ue(){const e=z([]);O(()=>e.value=[]);function h(t,m){e.value[m]=t}return{refs:e,updateRef:h}}const ve=F()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:_,default:"$first"},prevIcon:{type:_,default:"$prev"},nextIcon:{type:_,default:"$next"},lastIcon:{type:_,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...j(),...w(),...D(),...Q(),...Z(),...ee(),...N({tag:"nav"}),...M(),...ae({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,h){let{slots:t,emit:m}=h;const i=te(e,"modelValue"),{t:c,n:V}=le(),{isRtl:g}=ie(),{themeClasses:E}=T(e),{width:U}=ne(),I=z(-1);$(void 0,{scoped:!0});const{resizeRef:W}=se(a=>{if(!a.length)return;const{target:l,contentRect:n}=a[0],o=l.querySelector(".v-pagination__list > *");if(!o)return;const v=n.width,L=o.offsetWidth+parseFloat(getComputedStyle(o).marginRight)*2;I.value=A(v,L)}),u=y(()=>parseInt(e.length,10)),r=y(()=>parseInt(e.start,10)),d=y(()=>e.totalVisible?parseInt(e.totalVisible,10):I.value>=0?I.value:A(U.value,58));function A(a,l){const n=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-l*n)/l).toFixed(2)))}const X=y(()=>{if(u.value<=0||isNaN(u.value)||u.value>Number.MAX_SAFE_INTEGER)return[];if(d.value<=1)return[i.value];if(u.value<=d.value)return S(u.value,r.value);const a=d.value%2===0,l=a?d.value/2:Math.floor(d.value/2),n=a?l:l+1,o=u.value-l;if(n-i.value>=0)return[...S(Math.max(1,d.value-1),r.value),e.ellipsis,u.value];if(i.value-o>=(a?1:0)){const v=d.value-1,L=u.value-v+r.value;return[r.value,e.ellipsis,...S(v,L)]}else{const v=Math.max(1,d.value-3),L=v===1?i.value:i.value-Math.ceil(v/2)+r.value;return[r.value,e.ellipsis,...S(v,L),e.ellipsis,u.value]}});function x(a,l,n){a.preventDefault(),i.value=l,n&&m(n,l)}const{refs:q,updateRef:H}=ue();$({VPaginationBtn:{color:b(e,"color"),border:b(e,"border"),density:b(e,"density"),size:b(e,"size"),variant:b(e,"variant"),rounded:b(e,"rounded"),elevation:b(e,"elevation")}});const K=y(()=>X.value.map((a,l)=>{const n=o=>H(o,l);if(typeof a=="string")return{isActive:!1,key:`ellipsis-${l}`,page:a,props:{ref:n,ellipsis:!0,icon:!0,disabled:!0}};{const o=a===i.value;return{isActive:o,key:a,page:V(a),props:{ref:n,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:o?e.activeColor:e.color,ariaCurrent:o,ariaLabel:c(o?e.currentPageAriaLabel:e.pageAriaLabel,a),onClick:v=>x(v,a)}}}})),f=y(()=>{const a=!!e.disabled||i.value<=r.value,l=!!e.disabled||i.value>=r.value+u.value-1;return{first:e.showFirstLastPage?{icon:g.value?e.lastIcon:e.firstIcon,onClick:n=>x(n,r.value,"first"),disabled:a,ariaLabel:c(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:g.value?e.nextIcon:e.prevIcon,onClick:n=>x(n,i.value-1,"prev"),disabled:a,ariaLabel:c(e.previousAriaLabel),ariaDisabled:a},next:{icon:g.value?e.prevIcon:e.nextIcon,onClick:n=>x(n,i.value+1,"next"),disabled:l,ariaLabel:c(e.nextAriaLabel),ariaDisabled:l},last:e.showFirstLastPage?{icon:g.value?e.firstIcon:e.lastIcon,onClick:n=>x(n,r.value+u.value-1,"last"),disabled:l,ariaLabel:c(e.lastAriaLabel),ariaDisabled:l}:void 0}});function B(){var l;const a=i.value-r.value;(l=q.value[a])==null||l.$el.focus()}function Y(a){a.key===C.left&&!e.disabled&&i.value>+e.start?(i.value=i.value-1,R(B)):a.key===C.right&&!e.disabled&&i.value<r.value+u.value-1&&(i.value=i.value+1,R(B))}return p(()=>s(e.tag,{ref:W,class:["v-pagination",E.value,e.class],style:e.style,role:"navigation","aria-label":c(e.ariaLabel),onKeydown:Y,"data-test":"v-pagination-root"},{default:()=>[s("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&s("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(f.value.first):s(P,k({_as:"VPaginationBtn"},f.value.first),null)]),s("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(f.value.prev):s(P,k({_as:"VPaginationBtn"},f.value.prev),null)]),K.value.map((a,l)=>s("li",{key:a.key,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(a):s(P,k({_as:"VPaginationBtn"},a.props),{default:()=>[a.page]})])),s("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(f.value.next):s(P,k({_as:"VPaginationBtn"},f.value.next),null)]),e.showFirstLastPage&&s("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(f.value.last):s(P,k({_as:"VPaginationBtn"},f.value.last),null)])])]})),{}}});export{oe as V,ve as a};
