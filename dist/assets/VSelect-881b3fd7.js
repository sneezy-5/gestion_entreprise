import{m as ve,V as W}from"./VTextField-f85f9694.js";import{f as fe}from"./forwardRefs-a29b5f65.js";import{v as J,cI as le,x as te,c4 as me,A as ne,B as se,cC as oe,c0 as ie,c6 as pe,cc as he,D as O,J as ce,k as t,cx as ye,I as z,cy as Z,cz as ke,b_ as Ce,cA as Ve,cf as be,z as ge,cB as Ie,b$ as Pe,F as ue,cE as Se,cF as xe,cb as De,cG as Be,E as we,cL as Ae,bY as Y,cg as _e,cD as Le,l as x,L as X,bf as Q,cH as Te,V as M,cw as F,M as Fe,Z as q,N as _,c3 as Ee,bX as Re,r as $,p as Oe,d3 as Me}from"./index-548d44d1.js";import{m as $e,u as ze,V as Ke,a as Ge,b as ee}from"./VMenu-528d0b92.js";import{m as Ne}from"./VImg-a20b01d5.js";import{e as Ue}from"./VCounter-3543cf5b.js";import{V as He}from"./dialog-transition-ec6f11a2.js";import{V as je}from"./VCheckboxBtn-172bb155.js";import{b as Xe}from"./index-d9ad5dd9.js";import{V as ae}from"./VAvatar-2a93fb47.js";const de=Symbol.for("vuetify:v-chip-group");J()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:le},...te(),...me({selectedClass:"v-chip--selected"}),...ne(),...se(),...oe({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,L){let{slots:l}=L;const{themeClasses:D}=ie(e),{isSelected:i,select:B,next:b,prev:u,selected:y}=pe(e,de);return he({VChip:{color:O(e,"color"),disabled:O(e,"disabled"),filter:O(e,"filter"),variant:O(e,"variant")}}),ce(()=>t(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},D.value,e.class],style:e.style},{default:()=>{var w;return[(w=l.default)==null?void 0:w.call(l,{isSelected:i,select:B,next:b,prev:u,selected:y.value})]}})),{}}});const Ye=J()({name:"VChip",directives:{Ripple:ye},props:{activeClass:String,appendAvatar:String,appendIcon:z,closable:Boolean,closeIcon:{type:z,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:z,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Z(),onClickOnce:Z(),...ke(),...te(),...Ce(),...Ve(),...be(),...ge(),...Ie(),...Pe(),...ne({tag:"span"}),...se(),...oe({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,L){let{attrs:l,emit:D,slots:i}=L;const{t:B}=ue(),{borderClasses:b}=Se(e),{colorClasses:u,colorStyles:y,variantClasses:w}=xe(e),{densityClasses:K}=De(e),{elevationClasses:d}=Be(e),{roundedClasses:C}=we(e),{sizeClasses:A}=Ae(e),{themeClasses:E}=ie(e),V=Y(e,"modelValue"),n=_e(e,de,!1),p=Le(e,l),T=x(()=>e.link!==!1&&p.isLink.value),r=x(()=>!e.disabled&&e.link!==!1&&(!!n||e.link||p.isClickable.value)),G=x(()=>({"aria-label":B(e.closeLabel),onClick(c){V.value=!1,D("click:close",c)}}));function R(c){var g;D("click",c),r.value&&((g=p.navigate)==null||g.call(p,c),n==null||n.toggle())}function N(c){(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),R(c))}return()=>{const c=p.isLink.value?"a":e.tag,g=!!(e.appendIcon||e.appendAvatar),U=!!(g||i.append),H=!!(i.close||e.closable),a=!!(i.filter||e.filter)&&n,s=!!(e.prependIcon||e.prependAvatar),f=!!(s||i.prepend),I=!n||n.isSelected.value;return V.value&&X(t(c,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":r.value,"v-chip--filter":a,"v-chip--pill":e.pill},E.value,b.value,I?u.value:void 0,K.value,d.value,C.value,A.value,w.value,n==null?void 0:n.selectedClass.value,e.class],style:[I?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:p.href.value,tabindex:r.value?0:void 0,onClick:R,onKeydown:r.value&&!T.value&&N},{default:()=>{var P;return[Te(r.value,"v-chip"),a&&t(Xe,{key:"filter"},{default:()=>[X(t("div",{class:"v-chip__filter"},[i.filter?X(t(F,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[Q("slot"),i.filter,"default"]]):t(M,{key:"filter-icon",icon:e.filterIcon},null)]),[[Fe,n.isSelected.value]])]}),f&&t("div",{key:"prepend",class:"v-chip__prepend"},[i.prepend?t(F,{key:"prepend-defaults",disabled:!s,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},i.prepend):t(q,null,[e.prependIcon&&t(M,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(ae,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((P=i.default)==null?void 0:P.call(i,{isSelected:n==null?void 0:n.isSelected.value,selectedClass:n==null?void 0:n.selectedClass.value,select:n==null?void 0:n.select,toggle:n==null?void 0:n.toggle,value:n==null?void 0:n.value.value,disabled:e.disabled}))??e.text,U&&t("div",{key:"append",class:"v-chip__append"},[i.append?t(F,{key:"append-defaults",disabled:!g,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},i.append):t(q,null,[e.appendIcon&&t(M,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(ae,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),H&&t("div",_({key:"close",class:"v-chip__close"},G.value),[i.close?t(F,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},i.close):t(M,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Q("ripple"),r.value&&e.ripple,null]])}}}),qe=Ee({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:z,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:le},...$e({itemChildren:!1})},"v-select"),oa=J()({name:"VSelect",props:{...qe(),...Re(ve({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Ne({transition:{component:He}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,L){let{slots:l}=L;const{t:D}=ue(),i=$(),B=$(),b=Y(e,"menu"),u=x({get:()=>b.value,set:a=>{var s;b.value&&!a&&((s=B.value)!=null&&s.ΨopenChildren)||(b.value=a)}}),{items:y,transformIn:w,transformOut:K}=ze(e),d=Y(e,"modelValue",[],a=>w(Me(a)),a=>{const s=K(a);return e.multiple?s:s[0]??null}),C=Ue(),A=x(()=>d.value.map(a=>y.value.find(s=>e.valueComparator(s.value,a.value))||a)),E=x(()=>A.value.map(a=>a.props.value)),V=$(!1);let n="",p;const T=x(()=>e.hideSelected?y.value.filter(a=>!A.value.some(s=>s===a)):y.value),r=$();function G(a){e.openOnClear&&(u.value=!0)}function R(){e.hideNoData&&!y.value.length||e.readonly||C!=null&&C.isReadonly.value||(u.value=!u.value)}function N(a){var o,k,S,m;if(e.readonly||C!=null&&C.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"," "].includes(a.key)&&(u.value=!0),["Escape","Tab"].includes(a.key)&&(u.value=!1),a.key==="ArrowDown"?(o=r.value)==null||o.focus("next"):a.key==="ArrowUp"?(k=r.value)==null||k.focus("prev"):a.key==="Home"?(S=r.value)==null||S.focus("first"):a.key==="End"&&((m=r.value)==null||m.focus("last"));const s=1e3;function f(v){const h=v.key.length===1,j=!v.ctrlKey&&!v.metaKey&&!v.altKey;return h&&j}if(e.multiple||!f(a))return;const I=performance.now();I-p>s&&(n=""),n+=a.key.toLowerCase(),p=I;const P=y.value.find(v=>v.title.toLowerCase().startsWith(n));P!==void 0&&(d.value=[P])}function c(a){if(e.multiple){const s=E.value.findIndex(f=>e.valueComparator(f,a.value));if(s===-1)d.value=[...d.value,a];else{const f=[...d.value];f.splice(s,1),d.value=f}}else d.value=[a],u.value=!1}function g(a){var s;(s=r.value)!=null&&s.$el.contains(a.relatedTarget)||(u.value=!1)}function U(a){V.value=!0}function H(a){var s;a.relatedTarget==null&&((s=i.value)==null||s.focus())}return ce(()=>{const a=!!(e.chips||l.chip),s=!!(!e.hideNoData||T.value.length||l.prepend||l.append||l["no-data"]),f=d.value.length>0,[I]=W.filterProps(e),P=f||!V.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return t(W,_({ref:i},I,{modelValue:d.value.map(o=>o.props.value).join(", "),"onUpdate:modelValue":o=>{o==null&&(d.value=[])},focused:V.value,"onUpdate:focused":o=>V.value=o,validationValue:d.externalValue,dirty:f,class:["v-select",{"v-select--active-menu":u.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":d.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:P,"onClick:clear":G,"onMousedown:control":R,onBlur:g,onKeydown:N}),{...l,default:()=>t(q,null,[t(Ke,_({ref:B,modelValue:u.value,"onUpdate:modelValue":o=>u.value=o,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[s&&t(Ge,{ref:r,selected:E.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusin:U,onFocusout:H},{default:()=>{var o,k,S;return[!T.value.length&&!e.hideNoData&&(((o=l["no-data"])==null?void 0:o.call(l))??t(ee,{title:D(e.noDataText)},null)),(k=l["prepend-item"])==null?void 0:k.call(l),T.value.map((m,v)=>{var h;return l.item?(h=l.item)==null?void 0:h.call(l,{item:m,index:v,props:_(m.props,{onClick:()=>c(m)})}):t(ee,_({key:v},m.props,{onClick:()=>c(m)}),{prepend:j=>{let{isSelected:re}=j;return e.multiple&&!e.hideSelected?t(je,{modelValue:re,ripple:!1,tabindex:"-1"},null):void 0}})}),(S=l["append-item"])==null?void 0:S.call(l)]}})]}),A.value.map((o,k)=>{var v;function S(h){h.stopPropagation(),h.preventDefault(),c(o)}const m={"onClick:close":S,modelValue:!0,"onUpdate:modelValue":void 0};return t("div",{key:o.value,class:"v-select__selection"},[a?l.chip?t(F,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>{var h;return[(h=l.chip)==null?void 0:h.call(l,{item:o,index:k,props:m})]}}):t(Ye,_({key:"chip",closable:e.closableChips,size:"small",text:o.title},m),null):((v=l.selection)==null?void 0:v.call(l,{item:o,index:k}))??t("span",{class:"v-select__selection-text"},[o.title,e.multiple&&k<A.value.length-1&&t("span",{class:"v-select__selection-comma"},[Oe(",")])])])})])})}),fe({isFocused:V,menu:u,select:c},i)}});export{oa as V};