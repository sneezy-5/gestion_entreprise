import{d as x,cj as S,r as T,ba as m,d8 as U,d9 as k,da as E,o as p,c as f,e as n,k as s,i as a,R as b,bV as _,N as D,V as F,p as d,t as R,bS as B,m as N}from"./index-548d44d1.js";import{a as i,V as v}from"./VRow-4f92fdd1.js";import{V as u}from"./VSelect-881b3fd7.js";import{V as c}from"./VTextField-f85f9694.js";import{V as M}from"./VSnackbar-7e8d4438.js";import{V as A}from"./VCounter-3543cf5b.js";import{a as L,V as P}from"./VCard-fc59d69e.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-528d0b92.js";import"./index-d9ad5dd9.js";import"./VImg-a20b01d5.js";import"./ssrBoot-595446f4.js";import"./VAvatar-2a93fb47.js";import"./VOverlay-3b2ac0ae.js";import"./lazy-4c34a0b5.js";import"./easing-9f15041e.js";import"./dialog-transition-ec6f11a2.js";import"./VCheckboxBtn-172bb155.js";const $=x({__name:"DemoFormLayoutTransactionEdit",setup(h){const g=S().currentRoute.value.params.id,l=T({show:!1,text:"",color:""}),y=m([]),V=m([]);U.getListComptes().then(t=>{const r=t.data.data;for(let o=0;o<r.length;o++)y.push({abbr:r[o].id,state:r[o].name});console.log(t.data.data)}).catch(t=>{t.status=="401"&&console.error(t)}),k.getAllFournisseurs().then(t=>{const r=t.data.results;for(let o=0;o<r.length;o++)V.push({abbr:r[o].id,state:r[o].name});console.log(t.data.results)}).catch(t=>{t.status=="401"&&console.error(t)});const e=m({transaction_type:null,account:null,transaction_category:null,transaction_date:null,description:null,depense_category:null,supplier:null,amount:null,formErrors:{transaction_type:!1,account:!1,transaction_category:!1,transaction_date:!1,description:!1,supplier:!1,amount:!1,depense_category:!1}});E.getTransaction(g).then(t=>{e.id=t.data.id,e.transaction_type=t.data.transaction_type,e.account=t.data.account.id,e.transaction_date=t.data.transaction_date,e.supplier=t.data.supplier.id,e.transaction_category=t.data.transaction_category,e.depense_category=t.data.depense_category,e.description=t.data.description,e.amount=t.data.amount,console.log(t)}).catch(t=>{t.status==401&&console.error(t)});const C=()=>{console.log(e),E.updateTransaction(e).then(t=>{e.formErrors.transaction_type=!1,e.formErrors.account=!1,e.formErrors.transaction_category=!1,e.formErrors.transaction_date=!1,e.formErrors.description=!1,e.formErrors.supplier=!1,e.formErrors.amount=!1,e.formErrors.depense_category=!1,l.value={show:!0,text:"Enregistré avec succès",color:"success"}}).catch(t=>{t.response.data.amount?(e.formErrors.amount=!0,l.value={show:!0,text:t.response.data.amount,color:"danger"}):e.formErrors.amount=!1,t.response.data.transaction_type?(e.formErrors.transaction_type=!0,l.value={show:!0,text:t.response.data.transaction_type,color:"danger"}):e.formErrors.transaction_type=!1,t.response.data.account?(e.formErrors.account=!0,l.value={show:!0,text:t.response.data.account,color:"danger"}):e.formErrors.account=!1,t.response.data.transaction_category?(e.formErrors.transaction_category=!0,l.value={show:!0,text:t.response.data.transaction_category,color:"danger"}):e.formErrors.transaction_category=!1,t.response.data.transaction_date?(e.formErrors.transaction_date=!0,l.value={show:!0,text:t.response.data.transaction_date,color:"danger"}):e.formErrors.transaction_date=!1,t.response.data.account,e.formErrors.account=!1,t.response.data.description?(e.formErrors.description=!0,l.value={show:!0,text:t.response.data.description,color:"danger"}):e.formErrors.description=!1,t.response.data.supplier?(e.formErrors.supplier=!0,l.value={show:!0,text:t.response.data.supplier,color:"danger"}):e.formErrors.supplier=!1,t.response.data.depense_category?(e.formErrors.depense_category=!0,l.value={show:!0,text:t.response.data.depense_category,color:"danger"}):e.formErrors.depense_category=!1,console.log(t)})};return(t,r)=>(p(),f(A,{onSubmit:B(C,["prevent"]),enctype:"multipart/form-data"},{default:n(()=>[s(v,null,{default:n(()=>[s(i,{cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:a(e).account,"onUpdate:modelValue":r[0]||(r[0]=o=>a(e).account=o),label:"Comptes",items:a(y),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:a(e).formErrors.account},null,8,["modelValue","items","error"])]),_:1}),s(i,{cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:a(e).transaction_type,"onUpdate:modelValue":r[1]||(r[1]=o=>a(e).transaction_type=o),label:"Type de transaction",items:["Dépense","Revenu","Autre"],error:a(e).formErrors.transaction_type},null,8,["modelValue","error"])]),_:1}),a(e).transaction_type=="Dépense"?(p(),f(i,{key:0,cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:a(e).depense_category,"onUpdate:modelValue":r[2]||(r[2]=o=>a(e).depense_category=o),label:"Type de depense",items:["Charge Fixe","Charge Variable","Charge directe","Charge indirecte"],error:a(e).formErrors.transaction_category},null,8,["modelValue","error"])]),_:1})):b("",!0),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"text",modelValue:a(e).transaction_category,"onUpdate:modelValue":r[3]||(r[3]=o=>a(e).transaction_category=o),label:"Catégorie depense",placeholder:"Caégorie de depense",error:a(e).formErrors.depense_category},null,8,["modelValue","error"])]),_:1}),a(e).transaction_type=="Dépense"?(p(),f(i,{key:1,cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:a(e).supplier,"onUpdate:modelValue":r[4]||(r[4]=o=>a(e).supplier=o),label:"Fournisseurs",items:a(V),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:a(e).formErrors.supplier},null,8,["modelValue","items","error"])]),_:1})):b("",!0),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"number",modelValue:a(e).amount,"onUpdate:modelValue":r[5]||(r[5]=o=>a(e).amount=o),label:"Montant ",placeholder:"Montant ",error:a(e).formErrors.account},null,8,["modelValue","error"])]),_:1}),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"text",modelValue:a(e).description,"onUpdate:modelValue":r[6]||(r[6]=o=>a(e).description=o),label:"Description",placeholder:"Description",error:a(e).formErrors.description},null,8,["modelValue","error"])]),_:1}),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"date",modelValue:a(e).transaction_date,"onUpdate:modelValue":r[7]||(r[7]=o=>a(e).transaction_date=o),label:"Date",placeholder:"ate",error:a(e).formErrors.transaction_date},null,8,["modelValue","error"])]),_:1}),s(M,{modelValue:a(l).show,"onUpdate:modelValue":r[9]||(r[9]=o=>a(l).show=o),timeout:3e3,color:a(l).color,top:"top"},{action:n(({attrs:o})=>[s(_,D({text:""},o,{onClick:r[8]||(r[8]=j=>a(l).show=!1)}),{default:n(()=>[s(F,null,{default:n(()=>[d("mdi-close")]),_:1})]),_:2},1040)]),default:n(()=>[d(R(a(l).text)+" ",1)]),_:1},8,["modelValue","color"]),s(i,{cols:"12",class:"d-flex gap-4"},{default:n(()=>[s(_,{type:"submit"},{default:n(()=>[d(" Enregistré ")]),_:1}),s(_,{type:"reset",color:"secondary",variant:"tonal"},{default:n(()=>[d(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),se=x({__name:"editTransaction",setup(h){return(w,g)=>(p(),N("div",null,[s(v,null,{default:n(()=>[s(i,{cols:"12"},{default:n(()=>[s(L,{title:"Editer"},{default:n(()=>[s(P,null,{default:n(()=>[s($)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{se as default};