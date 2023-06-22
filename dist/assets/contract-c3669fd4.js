import"./caller.service-afc094da.js";import{c as v}from"./contract.service-96fe3064.js";import{d as k,r as h,O as P,l as $,o as f,m as V,k as e,e as l,p,bS as C,i as _,aL as y,f as t,Y as D,bc as R,t as c,V as b,R as F,S as L,P as U,c as j}from"./index-54e10577.js";import{a as T,b as M,V as O,e as Y}from"./VCard-9f617b6a.js";import{V as q}from"./VDialog-d6bbd018.js";import{V as z,a as G}from"./VPagination-c4475e8a.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{a as J,V as K}from"./VRow-b4fd1837.js";import"./VAvatar-d640487b.js";import"./VImg-17513cc0.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./dialog-transition-f581d50d.js";const Q=u=>(F("data-v-f9a6f42e"),u=u(),L(),u),W={class:"flex-end"},X=Q(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase"}," Employé "),t("th",{class:"text-uppercase text-center"}," Contrat "),t("th",{class:"text-uppercase text-center"}," Salaire de base "),t("th",{class:"text-uppercase text-center"}," Sur salaire "),t("th",{class:"text-uppercase text-center"}," Poste "),t("th",{class:"text-uppercase text-center"}," Transport "),t("th",{class:"text-uppercase text-center"}," Debut "),t("th",{class:"text-uppercase text-center"}," Fin "),t("th",{class:"text-uppercase text-center"}," Date de signature "),t("th",{class:"text-uppercase text-center"}," Action ")])],-1)),Z={class:"text-center"},tt={class:"text-center"},et={class:"text-center"},st={class:"text-center"},at={class:"text-center"},ot={class:"text-center"},lt={class:"text-center"},ct={class:"text-center"},nt={class:"text-center"},rt=["onClick"],dt=["onClick"],it={class:"text-xs-center"},S=5,ut=k({__name:"DemoSimpleTableDensityContract",setup(u){let m=h(0);const n=P([]),r=h(!1),A=a=>{m.value=a,r.value=!0},w=()=>{r.value=!1};let B=a=>{U.push({name:"edit-contract",params:{id:a}})},d=h(1);const x=()=>{console.log(d);const a=(d.value-1)*S,i=`limit=${S}&offset=${a}`;v.getAllContracts(i).then(o=>{const s=o.data.results;n.pop(),n.push(o.data),console.log(n[0].results,s)}).catch(o=>{(o.status="401")&&console.error(o)})},I=()=>{v.deleteContracts(m.value).then(a=>{x()}).catch(a=>{(a.status="401")&&console.error(a)}),r.value=!1};x();const E=$(()=>{var a;return Math.ceil(((a=n[0])==null?void 0:a.count)/5)});return(a,i)=>(f(),V(D,null,[e(q,{modelValue:_(r),"onUpdate:modelValue":i[0]||(i[0]=o=>y(r)?r.value=o:null),"max-width":"500px"},{default:l(()=>[e(T,null,{default:l(()=>[e(M,{class:"headline"},{default:l(()=>[p("Confirmation de suppression")]),_:1}),e(O,null,{default:l(()=>[p(" Êtes-vous sûr de vouloir supprimer ces données ? ")]),_:1}),e(Y,null,{default:l(()=>[e(C,{onClick:I,style:{color:"red"}},{default:l(()=>[p("Confimer")]),_:1}),e(C,{onClick:w},{default:l(()=>[p("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t("div",W,[e(C,{to:"/create-contract"},{default:l(()=>[p("Ajouter")]),_:1})]),e(z,{density:"compact"},{default:l(()=>{var o;return[X,t("tbody",null,[(f(!0),V(D,null,R((o=_(n)[0])==null?void 0:o.results,s=>{var g;return f(),V("tr",{key:s.id},[t("td",null,c((g=s.employee)==null?void 0:g.firstName),1),t("td",Z,c(s.contract_type),1),t("td",tt,c(s.baseSalary),1),t("td",et,c(s.extrapay),1),t("td",st,c(s.position),1),t("td",at,c(s.transportationAllowance),1),t("td",ot,c(s.startDate),1),t("td",lt,c(s.endDate),1),t("td",ct,c(s.signingDate),1),t("td",nt,[t("button",{onClick:N=>_(B)(s.id)},[e(b,{icon:"mdi-edit"})],8,rt),t("button",{onClick:N=>A(s.id)},[e(b,{icon:"mdi-trash",style:{color:"red"}})],8,dt)])])}),128))])]}),_:1}),t("div",it,[e(G,{modelValue:_(d),"onUpdate:modelValue":i[1]||(i[1]=o=>y(d)?d.value=o:d=o),length:_(E),circle:"",onClick:x},null,8,["modelValue","length"])])],64))}});const pt=H(ut,[["__scopeId","data-v-f9a6f42e"]]),At=k({__name:"contract",setup(u){return(m,n)=>(f(),j(K,null,{default:l(()=>[e(J,{cols:"12"},{default:l(()=>[e(T,{title:"Contrats"},{default:l(()=>[e(pt)]),_:1})]),_:1})]),_:1}))}});export{At as default};