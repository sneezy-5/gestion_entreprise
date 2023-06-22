import{d as D,ce as q,r as v,O as c,o as V,c as x,e as s,k as o,i as a,bS as f,N as _,V as M,p as d,t as g,bQ as w,m as S}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{e as U}from"./employees.service-ebfa0509.js";import{a as y}from"./avence.service-4ab4d22b.js";import{a as n,V as R}from"./VRow-b4fd1837.js";import{V as k}from"./VSelect-d3819a80.js";import{V as u}from"./VTextField-6bab4857.js";import{V as C}from"./VSnackbar-48185565.js";import{V as A}from"./VCounter-f481b6e6.js";import{a as B,V as N}from"./VCard-9f617b6a.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-0d5d1b04.js";import"./index-1a500ab3.js";import"./VImg-17513cc0.js";import"./ssrBoot-b02e1060.js";import"./VAvatar-d640487b.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./dialog-transition-f581d50d.js";import"./VCheckboxBtn-ebf12b5d.js";const F=D({__name:"DemoFormLayoutAvanceEdit",setup(b){const i=q().currentRoute.value.params.id,m=v({show:!1,text:"",color:""}),p=c([]);U.getAllEmployees().then(t=>{const r=t.data.results;for(let l=0;l<r.length;l++)p.push({state:r[l].firstName,abbr:r[l].id});console.log(p)}).catch(t=>{t.status=="401"&&console.error(t)});const e=c({RequestDate:null,amountRequested:null,paymentDate:null,paymentMethod:"",ReimbursmentDate:null,employee:null,formErrors:{RequestDate:!1,amountRequested:!1,paymentDate:!1,paymentMethod:!1,ReimbursmentDate:!1,employee:!1}});y.getAvance(i).then(t=>{e.id=t.data.id,e.RequestDate=t.data.RequestDate,e.amountRequested=t.data.amountRequested,e.paymentDate=t.data.paymentDate,e.paymentMethod=t.data.paymentMethod,e.ReimbursmentDate=t.data.ReimbursmentDate,e.employee=t.data.employee.id,console.log(t)}).catch(t=>{t.status==401&&console.error(t)});const h=()=>{console.log(e),y.updateAvance(e).then(t=>{e.formErrors.RequestDate=!1,e.formErrors.amountRequested=!1,e.formErrors.paymentDate=!1,e.formErrors.paymentMethod=!1,e.formErrors.ReimbursmentDate=!1,e.formErrors.employee=!1,m.value={show:!0,text:"Modifié avec succès",color:"green"}}).catch(t=>{t.response.data.RequestDate?(e.formErrors.RequestDate=!0,m.value={show:!0,text:t.response.data.RequestDate,color:"red"}):e.formErrors.RequestDate=!1,t.response.data.amountRequested?(e.formErrors.amountRequested=!0,m.value={show:!0,text:t.response.data.amountRequested,color:"red"}):e.formErrors.amountRequested=!1,t.response.data.paymentDate?(e.formErrors.paymentDate=!0,m.value={show:!0,text:t.response.data.paymentDate,color:"red"}):e.formErrors.paymentDate=!1,t.response.data.paymentMethod?(e.formErrors.paymentMethod=!0,m.value={show:!0,text:t.response.data.paymentMethod,color:"red"}):e.formErrors.paymentMethod=!1,t.response.data.ReimbursmentDate,e.formErrors.ReimbursmentDate=!1,t.response.data.employee?(e.formErrors.employee=!0,m.value={show:!0,text:t.response.data.employee,color:"red"}):e.formErrors.employee=!1,console.log(t)})};return(t,r)=>(V(),x(A,{onSubmit:w(h,["prevent"]),enctype:"multipart/form-data"},{default:s(()=>[o(R,null,{default:s(()=>[o(n,{cols:"12",md:"6"},{default:s(()=>[o(k,{modelValue:a(e).employee,"onUpdate:modelValue":r[0]||(r[0]=l=>a(e).employee=l),label:"Employés",items:a(p),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:a(e).formErrors.employee},null,8,["modelValue","items","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:s(()=>[o(u,{type:"date",modelValue:a(e).RequestDate,"onUpdate:modelValue":r[1]||(r[1]=l=>a(e).RequestDate=l),label:"Date de la demande",placeholder:"Date de la demande",error:a(e).formErrors.RequestDate},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:s(()=>[o(u,{type:"number",modelValue:a(e).amountRequested,"onUpdate:modelValue":r[2]||(r[2]=l=>a(e).amountRequested=l),label:"Montant demandé",placeholder:"Montant demandé",error:a(e).formErrors.amountRequested},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:s(()=>[o(u,{type:"date",modelValue:a(e).paymentDate,"onUpdate:modelValue":r[3]||(r[3]=l=>a(e).paymentDate=l),label:"Date de paie",placeholder:"Date de paie",error:a(e).formErrors.paymentDate},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:s(()=>[o(u,{type:"text",modelValue:a(e).paymentMethod,"onUpdate:modelValue":r[4]||(r[4]=l=>a(e).paymentMethod=l),label:"methode de paie",placeholder:"methode de paie",error:a(e).formErrors.paymentMethod},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:s(()=>[o(u,{type:"date",modelValue:a(e).ReimbursmentDate,"onUpdate:modelValue":r[5]||(r[5]=l=>a(e).ReimbursmentDate=l),label:"Date de remboursement",placeholder:"Date de remboursement",error:a(e).formErrors.ReimbursmentDate},null,8,["modelValue","error"])]),_:1}),o(C,{modelValue:a(m).show,"onUpdate:modelValue":r[7]||(r[7]=l=>a(m).show=l),timeout:3e3,color:a(m).color,top:"top"},{action:s(({attrs:l})=>[o(f,_({text:""},l,{onClick:r[6]||(r[6]=T=>a(m).show=!1)}),{default:s(()=>[o(M,null,{default:s(()=>[d("mdi-close")]),_:1})]),_:2},1040)]),default:s(()=>[d(g(a(m).text)+" ",1)]),_:1},8,["modelValue","color"]),o(n,{cols:"12",class:"d-flex gap-4"},{default:s(()=>[o(f,{type:"submit"},{default:s(()=>[d(" Enregistré ")]),_:1}),o(f,{type:"reset",color:"secondary",variant:"tonal"},{default:s(()=>[d(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),le=D({__name:"avanceEdit",setup(b){return(E,i)=>(V(),S("div",null,[o(R,null,{default:s(()=>[o(n,{cols:"12"},{default:s(()=>[o(B,{title:"Modifier avance"},{default:s(()=>[o(N,null,{default:s(()=>[o(F)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{le as default};
