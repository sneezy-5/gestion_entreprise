import"./caller.service-afc094da.js";import{p as g}from"./presences.service-7fab686a.js";import{d as S,r as h,O as I,l as O,o as m,m as V,k as s,e as c,p as i,bS as v,i as _,aL as C,f as e,Y as b,bc as N,t as l,V as D,R as $,S as R,P as F,c as L}from"./index-54e10577.js";import{a as P,b as U,V as j,e as M}from"./VCard-9f617b6a.js";import{V as Y}from"./VDialog-d6bbd018.js";import{V as q,a as z}from"./VPagination-c4475e8a.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{a as J,V as K}from"./VRow-b4fd1837.js";import"./VAvatar-d640487b.js";import"./VImg-17513cc0.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./dialog-transition-f581d50d.js";const Q=u=>($("data-v-2bef33d9"),u=u(),R(),u),W={class:"flex-end"},X=Q(()=>e("thead",null,[e("tr",null,[e("th",{class:"text-uppercase"}," Employé "),e("th",{class:"text-uppercase text-center"}," Debut "),e("th",{class:"text-uppercase text-center"}," Fin "),e("th",{class:"text-uppercase text-center"}," Absence "),e("th",{class:"text-uppercase text-center"}," Présence "),e("th",{class:"text-uppercase text-center"}," Delay "),e("th",{class:"text-uppercase text-center"}," Heure normal "),e("th",{class:"text-uppercase text-center"}," Heure normal complementaire "),e("th",{class:"text-uppercase text-center"}," Heure sup 15 "),e("th",{class:"text-uppercase text-center"}," Heure sup 50 "),e("th",{class:"text-uppercase text-center"}," Heure sup 75 "),e("th",{class:"text-uppercase text-center"}," Heure sup 100 "),e("th",{class:"text-uppercase text-center"}," Action ")])],-1)),Z={class:"text-center"},ee={class:"text-center"},te={class:"text-center"},se={class:"text-center"},ae={class:"text-center"},oe={class:"text-center"},le={class:"text-center"},ce={class:"text-center"},ne={class:"text-center"},re={class:"text-center"},de={class:"text-center"},pe={class:"text-center"},ue=["onClick"],ie=["onClick"],_e={class:"text-xs-center"},k=5,me=S({__name:"DemoSimpleTableDensityPresence",setup(u){let x=h(0);const n=I([]),r=h(!1),H=a=>{x.value=a,r.value=!0},A=()=>{r.value=!1};let T=a=>{F.push({name:"edit-presence",params:{id:a}})},d=h(1);const f=()=>{console.log(d);const a=(d.value-1)*k,p=`limit=${k}&offset=${a}`;g.getAllPresences(p).then(o=>{const t=o.data.results;n.pop(),n.push(o.data),console.log(n[0].results,t)}).catch(o=>{(o.status="401")&&console.error(o)})},w=()=>{g.deletePresence(x.value).then(a=>{f()}).catch(a=>{(a.status="401")&&console.error(a)}),r.value=!1};f();const B=O(()=>{var a;return Math.ceil(((a=n[0])==null?void 0:a.count)/5)});return(a,p)=>(m(),V(b,null,[s(Y,{modelValue:_(r),"onUpdate:modelValue":p[0]||(p[0]=o=>C(r)?r.value=o:null),"max-width":"500px"},{default:c(()=>[s(P,null,{default:c(()=>[s(U,{class:"headline"},{default:c(()=>[i("Confirmation de suppression")]),_:1}),s(j,null,{default:c(()=>[i(" Êtes-vous sûr de vouloir supprimer ces données ? ")]),_:1}),s(M,null,{default:c(()=>[s(v,{onClick:w,style:{color:"red"}},{default:c(()=>[i("Confimer")]),_:1}),s(v,{onClick:A},{default:c(()=>[i("Annuler")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e("div",W,[s(v,{to:"/create-presence"},{default:c(()=>[i("Ajouter")]),_:1})]),s(q,{density:"compact"},{default:c(()=>{var o;return[X,e("tbody",null,[(m(!0),V(b,null,N((o=_(n)[0])==null?void 0:o.results,t=>{var y;return m(),V("tr",{key:t.id},[e("td",null,l((y=t.employee)==null?void 0:y.firstName),1),e("td",Z,l(t.periodStart),1),e("td",ee,l(t.periodEnd),1),e("td",te,l(t.absentdays),1),e("td",se,l(t.presentdays),1),e("td",ae,l(t.delays),1),e("td",oe,l(t.normalHours),1),e("td",le,l(t.normalHoursComplementary),1),e("td",ce,l(t.Overtime_15),1),e("td",ne,l(t.Overtime_50),1),e("td",re,l(t.Overtime_75),1),e("td",de,l(t.Overtime_100),1),e("td",pe,[e("button",{onClick:E=>_(T)(t.id)},[s(D,{icon:"mdi-edit"})],8,ue),e("button",{onClick:E=>H(t.id)},[s(D,{icon:"mdi-trash",style:{color:"red"}})],8,ie)])])}),128))])]}),_:1}),e("div",_e,[s(z,{modelValue:_(d),"onUpdate:modelValue":p[1]||(p[1]=o=>C(d)?d.value=o:d=o),length:_(B),circle:"",onClick:f},null,8,["modelValue","length"])])],64))}});const xe=G(me,[["__scopeId","data-v-2bef33d9"]]),we=S({__name:"presences",setup(u){return(x,n)=>(m(),L(K,null,{default:c(()=>[s(J,{cols:"12"},{default:c(()=>[s(P,{title:"Density"},{default:c(()=>[s(xe)]),_:1})]),_:1})]),_:1}))}});export{we as default};
