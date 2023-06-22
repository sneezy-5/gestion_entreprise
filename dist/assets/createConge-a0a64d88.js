import{d as c,r as E,O as d,o as y,c as _,e as r,k as o,i as t,bS as i,N as b,V as g,p,t as k,bQ as x,m as w}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{e as h}from"./employees.service-ebfa0509.js";import{c as C}from"./conges.service-6534682a.js";import{a as n,V}from"./VRow-b4fd1837.js";import{V as S}from"./VSelect-d3819a80.js";import{V as f}from"./VTextField-6bab4857.js";import{V as U}from"./VSnackbar-48185565.js";import{V as B}from"./VCounter-f481b6e6.js";import{a as J,V as N}from"./VCard-9f617b6a.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-0d5d1b04.js";import"./index-1a500ab3.js";import"./VImg-17513cc0.js";import"./ssrBoot-b02e1060.js";import"./VAvatar-d640487b.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./dialog-transition-f581d50d.js";import"./VCheckboxBtn-ebf12b5d.js";const F=c({__name:"DemoFormLayoutConge",setup(v){const m=E({show:!1,text:"",color:""}),u=d([]);h.getAllEmployees().then(a=>{const l=a.data.results;for(let s=0;s<l.length;s++)u.push({state:l[s].firstName,abbr:l[s].id});console.log(u)}).catch(a=>{a.status=="401"&&console.error(a)});const e=d({montant:null,cumulativeDay:null,tekanDay:null,employee:null,formErrors:{montant:!1,cumulativeDay:!1,tekanDay:!1,employee:!1}}),D=()=>{console.log(e),C.createConge(e).then(a=>{e.formErrors.montant=!1,e.formErrors.cumulativeDay=!1,e.formErrors.tekanDay=!1,e.formErrors.employee=!1,m.value={show:!0,text:"Enregistré avec succès",color:"green"}}).catch(a=>{a.response.data.RequestDate?(e.formErrors.montant=!0,m.value={show:!0,text:a.response.data.montant,color:"red"}):e.formErrors.montant=!1,a.response.data.amount?(e.formErrors.cumulativeDay=!0,m.value={show:!0,text:a.response.data.cumulativeDay,color:"red"}):e.formErrors.cumulativeDay=!1,a.response.data.tekanDay?(e.formErrors.tekanDay=!0,m.value={show:!0,text:a.response.data.tekanDay,color:"red"}):e.formErrors.tekanDay=!1,a.response.data.employee?(e.formErrors.employee=!0,m.value={show:!0,text:a.response.data.employee,color:"red"}):e.formErrors.employee=!1,console.log(a)})};return(a,l)=>(y(),_(B,{onSubmit:x(D,["prevent"]),enctype:"multipart/form-data"},{default:r(()=>[o(V,null,{default:r(()=>[o(n,{cols:"12",md:"6"},{default:r(()=>[o(S,{modelValue:t(e).employee,"onUpdate:modelValue":l[0]||(l[0]=s=>t(e).employee=s),label:"Employés",items:t(u),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:t(e).formErrors.employee},null,8,["modelValue","items","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:r(()=>[o(f,{type:"number",modelValue:t(e).montant,"onUpdate:modelValue":l[1]||(l[1]=s=>t(e).montant=s),label:"Montant",placeholder:"Montant",error:t(e).formErrors.montant},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:r(()=>[o(f,{type:"number",modelValue:t(e).cumulativeDay,"onUpdate:modelValue":l[2]||(l[2]=s=>t(e).cumulativeDay=s),label:"Jour cumulé",placeholder:"Jour cumulé",error:t(e).formErrors.cumulativeDay},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:r(()=>[o(f,{type:"number",modelValue:t(e).tekanDay,"onUpdate:modelValue":l[3]||(l[3]=s=>t(e).tekanDay=s),label:"Jour pris",placeholder:"Jour pris",error:t(e).formErrors.tekanDay},null,8,["modelValue","error"])]),_:1}),o(U,{modelValue:t(m).show,"onUpdate:modelValue":l[5]||(l[5]=s=>t(m).show=s),timeout:3e3,color:t(m).color,top:"top"},{action:r(({attrs:s})=>[o(i,b({text:""},s,{onClick:l[4]||(l[4]=M=>t(m).show=!1)}),{default:r(()=>[o(g,null,{default:r(()=>[p("mdi-close")]),_:1})]),_:2},1040)]),default:r(()=>[p(k(t(m).text)+" ",1)]),_:1},8,["modelValue","color"]),o(n,{cols:"12",class:"d-flex gap-4"},{default:r(()=>[o(i,{type:"submit"},{default:r(()=>[p(" Enregistré ")]),_:1}),o(i,{type:"reset",color:"secondary",variant:"tonal"},{default:r(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),te=c({__name:"createConge",setup(v){return(m,u)=>(y(),w("div",null,[o(V,null,{default:r(()=>[o(n,{cols:"12"},{default:r(()=>[o(J,{title:"Créé congé"},{default:r(()=>[o(N,null,{default:r(()=>[o(F)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{te as default};