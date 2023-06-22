import{d as x,ce as S,r as T,O as m,o as p,c as f,e as n,k as s,i as o,Q as E,bS as _,N as U,V as k,p as d,t as D,bQ as F,m as R}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{f as B}from"./fournisseurs.service-86dc468e.js";import{c as M}from"./comptecompta.service-049e97fa.js";import{t as b}from"./transactions.service-d798a202.js";import{a as i,V as v}from"./VRow-b4fd1837.js";import{V as u}from"./VSelect-d3819a80.js";import{V as c}from"./VTextField-6bab4857.js";import{V as N}from"./VSnackbar-48185565.js";import{V as A}from"./VCounter-f481b6e6.js";import{a as L,V as P}from"./VCard-9f617b6a.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-0d5d1b04.js";import"./index-1a500ab3.js";import"./VImg-17513cc0.js";import"./ssrBoot-b02e1060.js";import"./VAvatar-d640487b.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./dialog-transition-f581d50d.js";import"./VCheckboxBtn-ebf12b5d.js";const Q=x({__name:"DemoFormLayoutTransactionEdit",setup(h){const y=S().currentRoute.value.params.id,l=T({show:!1,text:"",color:""}),g=m([]),V=m([]);M.getListComptes().then(t=>{const r=t.data.data;for(let a=0;a<r.length;a++)g.push({abbr:r[a].id,state:r[a].name});console.log(t.data.data)}).catch(t=>{t.status=="401"&&console.error(t)}),B.getAllFournisseurs().then(t=>{const r=t.data.results;for(let a=0;a<r.length;a++)V.push({abbr:r[a].id,state:r[a].name});console.log(t.data.results)}).catch(t=>{t.status=="401"&&console.error(t)});const e=m({transaction_type:null,account:null,transaction_category:null,transaction_date:null,description:null,depense_category:null,supplier:null,amount:null,formErrors:{transaction_type:!1,account:!1,transaction_category:!1,transaction_date:!1,description:!1,supplier:!1,amount:!1,depense_category:!1}});b.getTransaction(y).then(t=>{e.id=t.data.id,e.transaction_type=t.data.transaction_type,e.account=t.data.account.id,e.transaction_date=t.data.transaction_date,e.supplier=t.data.supplier.id,e.transaction_category=t.data.transaction_category,e.depense_category=t.data.depense_category,e.description=t.data.description,e.amount=t.data.amount,console.log(t)}).catch(t=>{t.status==401&&console.error(t)});const C=()=>{console.log(e),b.updateTransaction(e).then(t=>{e.formErrors.transaction_type=!1,e.formErrors.account=!1,e.formErrors.transaction_category=!1,e.formErrors.transaction_date=!1,e.formErrors.description=!1,e.formErrors.supplier=!1,e.formErrors.amount=!1,e.formErrors.depense_category=!1,l.value={show:!0,text:"Modifié avec succès",color:"green"}}).catch(t=>{t.response.data.transaction_type?(e.formErrors.transaction_type=!0,l.value={show:!0,text:t.response.data.transaction_type,color:"red"}):e.formErrors.transaction_type=!1,t.response.data.account?(e.formErrors.account=!0,l.value={show:!0,text:t.response.data.account,color:"red"}):e.formErrors.account=!1,t.response.data.transaction_category?(e.formErrors.transaction_category=!0,l.value={show:!0,text:t.response.data.transaction_category,color:"red"}):e.formErrors.transaction_category=!1,t.response.data.transaction_category?(e.formErrors.transaction_category=!0,l.value={show:!0,text:t.response.data.transaction_category,color:"red"}):e.formErrors.transaction_category=!1,t.response.data.account,e.formErrors.account=!1,t.response.data.description?(e.formErrors.description=!0,l.value={show:!0,text:t.response.data.description,color:"red"}):e.formErrors.description=!1,t.response.data.supplier?(e.formErrors.supplier=!0,l.value={show:!0,text:t.response.data.supplier,color:"red"}):e.formErrors.supplier=!1,t.response.data.depense_category?(e.formErrors.depense_category=!0,l.value={show:!0,text:t.response.data.depense_category,color:"red"}):e.formErrors.depense_category=!1,console.log(t)})};return(t,r)=>(p(),f(A,{onSubmit:F(C,["prevent"]),enctype:"multipart/form-data"},{default:n(()=>[s(v,null,{default:n(()=>[s(i,{cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:o(e).account,"onUpdate:modelValue":r[0]||(r[0]=a=>o(e).account=a),label:"Comptes",items:o(g),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:o(e).formErrors.account},null,8,["modelValue","items","error"])]),_:1}),s(i,{cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:o(e).transaction_type,"onUpdate:modelValue":r[1]||(r[1]=a=>o(e).transaction_type=a),label:"Type de transaction",items:["Dépense","Revenu","Autre"],error:o(e).formErrors.transaction_type},null,8,["modelValue","error"])]),_:1}),o(e).transaction_type=="Dépense"?(p(),f(i,{key:0,cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:o(e).depense_category,"onUpdate:modelValue":r[2]||(r[2]=a=>o(e).depense_category=a),label:"Type de depense",items:["Charge Fixe","Charge Variable","Charge directe","Charge indirecte"],error:o(e).formErrors.transaction_category},null,8,["modelValue","error"])]),_:1})):E("",!0),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"text",modelValue:o(e).transaction_category,"onUpdate:modelValue":r[3]||(r[3]=a=>o(e).transaction_category=a),label:"Catégorie depense",placeholder:"Caégorie de depense",error:o(e).formErrors.depense_category},null,8,["modelValue","error"])]),_:1}),o(e).transaction_type=="Dépense"?(p(),f(i,{key:1,cols:"12",md:"6"},{default:n(()=>[s(u,{modelValue:o(e).supplier,"onUpdate:modelValue":r[4]||(r[4]=a=>o(e).supplier=a),label:"Fournisseurs",items:o(V),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:o(e).formErrors.supplier},null,8,["modelValue","items","error"])]),_:1})):E("",!0),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"number",modelValue:o(e).amount,"onUpdate:modelValue":r[5]||(r[5]=a=>o(e).amount=a),label:"Montant ",placeholder:"Montant ",error:o(e).formErrors.account},null,8,["modelValue","error"])]),_:1}),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"text",modelValue:o(e).description,"onUpdate:modelValue":r[6]||(r[6]=a=>o(e).description=a),label:"Description",placeholder:"Description",error:o(e).formErrors.description},null,8,["modelValue","error"])]),_:1}),s(i,{cols:"12",md:"6"},{default:n(()=>[s(c,{type:"date",modelValue:o(e).transaction_date,"onUpdate:modelValue":r[7]||(r[7]=a=>o(e).transaction_date=a),label:"Date",placeholder:"ate",error:o(e).formErrors.transaction_date},null,8,["modelValue","error"])]),_:1}),s(N,{modelValue:o(l).show,"onUpdate:modelValue":r[9]||(r[9]=a=>o(l).show=a),timeout:3e3,color:o(l).color,top:"top"},{action:n(({attrs:a})=>[s(_,U({text:""},a,{onClick:r[8]||(r[8]=$=>o(l).show=!1)}),{default:n(()=>[s(k,null,{default:n(()=>[d("mdi-close")]),_:1})]),_:2},1040)]),default:n(()=>[d(D(o(l).text)+" ",1)]),_:1},8,["modelValue","color"]),s(i,{cols:"12",class:"d-flex gap-4"},{default:n(()=>[s(_,{type:"submit"},{default:n(()=>[d(" Enregistré ")]),_:1}),s(_,{type:"reset",color:"secondary",variant:"tonal"},{default:n(()=>[d(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),de=x({__name:"editTransaction",setup(h){return(w,y)=>(p(),R("div",null,[s(v,null,{default:n(()=>[s(i,{cols:"12"},{default:n(()=>[s(L,{title:"Editer"},{default:n(()=>[s(P,null,{default:n(()=>[s(Q)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{de as default};
