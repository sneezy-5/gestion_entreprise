import"./caller.service-afc094da.js";import{p as k}from"./payslips.service-3c033dc1.js";import{d as S,r as x,O as N,l as M,o as f,m as V,k as t,e as o,p as d,bS as _,i as u,aL as D,f as e,Y as b,bc as R,t as m,V as g,R as L,S as U,P as j,c as F}from"./index-54e10577.js";import{a as T,b as G,V as O,e as Y}from"./VCard-9f617b6a.js";import{V as q}from"./VDialog-d6bbd018.js";import{V as z,a as H}from"./VPagination-c4475e8a.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";import{a as K,V as Q}from"./VRow-b4fd1837.js";import"./VAvatar-d640487b.js";import"./VImg-17513cc0.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./dialog-transition-f581d50d.js";const W=p=>(L("data-v-11515eae"),p=p(),U(),p),X={class:"flex-end"},Z=W(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-uppercase"}," Employe "),e("th",{class:"text-uppercase text-center"}," Net a payer "),e("th",{class:"text-uppercase text-center"}," Methode de payement "),e("th",{class:"text-uppercase text-center"}," Date de payement "),e("th",{class:"text-uppercase text-center"}," Action ")])],-1)),ee={class:"text-center"},te={class:"text-center"},se={class:"text-center"},ae={class:"text-center"},oe=["onClick"],le=["onClick"],ne=["onClick"],ce={class:"text-xs-center"},P=5,ie=S({__name:"DemoSimpleTableDensityPayslips",setup(p){let h=x(0);const c=N([]),i=x(!1),w=s=>{h.value=s,i.value=!0},A=()=>{i.value=!1};let B=s=>{j.push({name:"edit-payslip",params:{id:s}})},r=x(1);const y=()=>{console.log(r);const s=(r.value-1)*P,n=`limit=${P}&offset=${s}`;k.getAllPayslips(n).then(a=>{const l=a.data.results;c.pop(),c.push(a.data),console.log(c[0].results,l)}).catch(a=>{(a.status="401")&&console.error(a)})},I=()=>{k.deletePayslips(h.value).then(s=>{y()}).catch(s=>{(s.status="401")&&console.error(s)}),i.value=!1},$=s=>{const n=`/src/assets/formulairePAIE.html?id=${s}`;window.open(n)};y();const E=M(()=>{var s;return Math.ceil(((s=c[0])==null?void 0:s.count)/5)});return(s,n)=>(f(),V(b,null,[t(q,{modelValue:u(i),"onUpdate:modelValue":n[0]||(n[0]=a=>D(i)?i.value=a:null),"max-width":"500px"},{default:o(()=>[t(T,null,{default:o(()=>[t(G,{class:"headline"},{default:o(()=>[d("Confirmation de suppression")]),_:1}),t(O,null,{default:o(()=>[d(" Êtes-vous sûr de vouloir supprimer ces données ? ")]),_:1}),t(Y,null,{default:o(()=>[t(_,{onClick:I,style:{color:"red"}},{default:o(()=>[d("Confimer")]),_:1}),t(_,{onClick:A},{default:o(()=>[d("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",X,[t(_,{to:"/create-payslip",style:{"margin-right":"10px"}},{default:o(()=>[d("Ajouter")]),_:1}),t(_,{to:"/payslip-generate"},{default:o(()=>[d("Générer")]),_:1})]),t(z,{density:"compact"},{default:o(()=>{var a;return[Z,e("tbody",null,[(f(!0),V(b,null,R((a=u(c)[0])==null?void 0:a.results,l=>{var v;return f(),V("tr",{key:l.id},[e("td",null,m((v=l.employee)==null?void 0:v.firstName),1),e("td",ee,m(l.netToPay),1),e("td",te,m(l.paymentMethod),1),e("td",se,m(l.paymentDate),1),e("td",ae,[e("button",{onClick:C=>$(l.id)},[t(g,{icon:"mdi-eye"})],8,oe),e("button",{onClick:C=>u(B)(l.id)},[t(g,{icon:"mdi-edit"})],8,le),e("button",{onClick:C=>w(l.id)},[t(g,{icon:"mdi-trash",style:{color:"red"}})],8,ne)])])}),128))])]}),_:1}),e("div",ce,[t(H,{modelValue:u(r),"onUpdate:modelValue":n[1]||(n[1]=a=>D(r)?r.value=a:r=a),length:u(E),circle:"",onClick:y},null,8,["modelValue","length"])])],64))}});const re=J(ie,[["__scopeId","data-v-11515eae"]]),be=S({__name:"payslips",setup(p){return(h,c)=>(f(),F(Q,null,{default:o(()=>[t(K,{cols:"12"},{default:o(()=>[t(T,{title:"Bulletin de paie"},{default:o(()=>[t(re)]),_:1})]),_:1})]),_:1}))}});export{be as default};