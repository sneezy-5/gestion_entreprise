import{d as A,r as x,ba as E,l as N,o as m,m as v,k as t,e as o,p,bV as V,i as _,aM as y,f as e,Z as C,be as $,cm as D,t as i,V as b,S as q,T as P,Q as U,c as j}from"./index-548d44d1.js";import{a as S,b as F,V as L,e as Q}from"./VCard-fc59d69e.js";import{V as Z}from"./VDialog-76e8e84f.js";import{V as z,a as G}from"./VPagination-1ebcc86a.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{a as J,V as K}from"./VRow-4f92fdd1.js";import"./VAvatar-2a93fb47.js";import"./VImg-a20b01d5.js";import"./VOverlay-3b2ac0ae.js";import"./lazy-4c34a0b5.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./dialog-transition-ec6f11a2.js";const O=u=>(q("data-v-6f190a29"),u=u(),P(),u),W={class:"flex-end"},X=O(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-uppercase"}," Employe "),e("th",{class:"text-uppercase text-center"}," Date de la demande "),e("th",{class:"text-uppercase text-center"}," Montant demandé "),e("th",{class:"text-uppercase text-center"}," Remis le "),e("th",{class:"text-uppercase text-center"}," Methode de payement "),e("th",{class:"text-uppercase text-center"}," Date de remboursement "),e("th",{class:"text-uppercase text-center"}," Action ")])],-1)),Y={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},se={class:"text-center"},ae={class:"text-center"},oe={class:"text-center"},le=["onClick"],ne=["onClick"],ce={class:"text-xs-center"},k=5,re=A({__name:"DemoSimpleTableDensityAvance",setup(u){let f=x(0);const n=E([]),c=x(!1),T=s=>{f.value=s,c.value=!0},R=()=>{c.value=!1};let w=s=>{U.push({name:"edit-avance",params:{id:s}})},r=x(1);const h=()=>{console.log(r);const s=(r.value-1)*k,d=`limit=${k}&offset=${s}`;D.getAllAvance(d).then(a=>{const l=a.data.results;n.pop(),n.push(a.data),console.log(n[0].results,l)}).catch(a=>{(a.status="401")&&console.error(a)})},B=()=>{D.deleteAvance(f.value).then(s=>{h()}).catch(s=>{(s.status="401")&&console.error(s)}),c.value=!1};h();const I=N(()=>{var s;return Math.ceil(((s=n[0])==null?void 0:s.count)/5)});return(s,d)=>(m(),v(C,null,[t(Z,{modelValue:_(c),"onUpdate:modelValue":d[0]||(d[0]=a=>y(c)?c.value=a:null),"max-width":"500px"},{default:o(()=>[t(S,null,{default:o(()=>[t(F,{class:"headline"},{default:o(()=>[p("Confirmation de suppression")]),_:1}),t(L,null,{default:o(()=>[p(" Êtes-vous sûr de vouloir supprimer ces données ? ")]),_:1}),t(Q,null,{default:o(()=>[t(V,{onClick:B,style:{color:"red"}},{default:o(()=>[p("Confimer")]),_:1}),t(V,{onClick:R},{default:o(()=>[p("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",W,[t(V,{to:"/create-avance"},{default:o(()=>[p("Ajouter")]),_:1})]),t(z,{density:"compact"},{default:o(()=>{var a;return[X,e("tbody",null,[(m(!0),v(C,null,$((a=_(n)[0])==null?void 0:a.results,l=>{var g;return m(),v("tr",{key:l.id},[e("td",null,i((g=l.employee)==null?void 0:g.firstName),1),e("td",Y,i(l.RequestDate),1),e("td",ee,i(l.amountRequested),1),e("td",te,i(l.paymentDate),1),e("td",se,i(l.paymentMethod),1),e("td",ae,i(l.ReimbursmentDate),1),e("td",oe,[e("button",{onClick:M=>_(w)(l.id)},[t(b,{icon:"mdi-edit"})],8,le),e("button",{onClick:M=>T(l.id)},[t(b,{icon:"mdi-trash",style:{color:"red"}})],8,ne)])])}),128))])]}),_:1}),e("div",ce,[t(G,{modelValue:_(r),"onUpdate:modelValue":d[1]||(d[1]=a=>y(r)?r.value=a:r=a),length:_(I),circle:"",onClick:h},null,8,["modelValue","length"])])],64))}});const de=H(re,[["__scopeId","data-v-6f190a29"]]),De=A({__name:"avances",setup(u){return(f,n)=>(m(),j(K,null,{default:o(()=>[t(J,{cols:"12"},{default:o(()=>[t(S,{title:"Avance sur salaire"},{default:o(()=>[t(de)]),_:1})]),_:1})]),_:1}))}});export{De as default};