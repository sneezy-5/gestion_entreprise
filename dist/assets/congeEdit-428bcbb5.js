import{d as V,ce as b,r as k,O as c,o as D,c as x,e as r,k as o,i as a,bS as d,N as h,V as w,p as u,t as C,bQ as S,m as R}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{e as U}from"./employees.service-ebfa0509.js";import{c as y}from"./conges.service-6534682a.js";import{a as n,V as v}from"./VRow-b4fd1837.js";import{V as B}from"./VSelect-d3819a80.js";import{V as p}from"./VTextField-6bab4857.js";import{V as J}from"./VSnackbar-48185565.js";import{V as M}from"./VCounter-f481b6e6.js";import{a as N,V as F}from"./VCard-9f617b6a.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-0d5d1b04.js";import"./index-1a500ab3.js";import"./VImg-17513cc0.js";import"./ssrBoot-b02e1060.js";import"./VAvatar-d640487b.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./dialog-transition-f581d50d.js";import"./VCheckboxBtn-ebf12b5d.js";const T=V({__name:"DemoFormLayoutCongeEdit",setup(E){const f=b().currentRoute.value.params.id,m=k({show:!1,text:"",color:""}),i=c([]);U.getAllEmployees().then(t=>{const l=t.data.results;for(let s=0;s<l.length;s++)i.push({state:l[s].firstName,abbr:l[s].id});console.log(i)}).catch(t=>{t.status=="401"&&console.error(t)});const e=c({montant:null,cumulativeDay:null,tekanDay:null,employee:null,formErrors:{montant:!1,cumulativeDay:!1,tekanDay:!1,employee:!1}});y.getConge(f).then(t=>{e.id=t.data.id,e.montant=t.data.montant,e.cumulativeDay=t.data.cumulativeDay,e.tekanDay=t.data.tekanDay,e.employee=t.data.employee.id,console.log(t)}).catch(t=>{t.status==401&&console.error(t)});const g=()=>{console.log(e),y.updateConge(e).then(t=>{e.formErrors.montant=!1,e.formErrors.cumulativeDay=!1,e.formErrors.tekanDay=!1,e.formErrors.employee=!1,m.value={show:!0,text:"Modifé avec succès",color:"green"}}).catch(t=>{t.response.data.RequestDate?(e.formErrors.montant=!0,m.value={show:!0,text:t.response.data.montant,color:"red"}):e.formErrors.montant=!1,t.response.data.amount?(e.formErrors.cumulativeDay=!0,m.value={show:!0,text:t.response.data.cumulativeDay,color:"red"}):e.formErrors.cumulativeDay=!1,t.response.data.tekanDay?(e.formErrors.tekanDay=!0,m.value={show:!0,text:t.response.data.tekanDay,color:"red"}):e.formErrors.tekanDay=!1,console.log(t)})};return(t,l)=>(D(),x(M,{onSubmit:S(g,["prevent"]),enctype:"multipart/form-data"},{default:r(()=>[o(v,null,{default:r(()=>[o(n,{cols:"12",md:"6"},{default:r(()=>[o(B,{modelValue:a(e).employee,"onUpdate:modelValue":l[0]||(l[0]=s=>a(e).employee=s),label:"Employés",items:a(i),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:a(e).formErrors.employee},null,8,["modelValue","items","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:r(()=>[o(p,{type:"number",modelValue:a(e).montant,"onUpdate:modelValue":l[1]||(l[1]=s=>a(e).montant=s),label:"Montant",placeholder:"Montant",error:a(e).formErrors.montant},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:r(()=>[o(p,{type:"number",modelValue:a(e).cumulativeDay,"onUpdate:modelValue":l[2]||(l[2]=s=>a(e).cumulativeDay=s),label:"Jour cumulé",placeholder:"Jour cumulé",error:a(e).formErrors.cumulativeDay},null,8,["modelValue","error"])]),_:1}),o(n,{cols:"12",md:"6"},{default:r(()=>[o(p,{type:"number",modelValue:a(e).tekanDay,"onUpdate:modelValue":l[3]||(l[3]=s=>a(e).tekanDay=s),label:"Jour pris",placeholder:"Jour pris",error:a(e).formErrors.tekanDay},null,8,["modelValue","error"])]),_:1}),o(J,{modelValue:a(m).show,"onUpdate:modelValue":l[5]||(l[5]=s=>a(m).show=s),timeout:3e3,color:a(m).color,top:"top"},{action:r(({attrs:s})=>[o(d,h({text:""},s,{onClick:l[4]||(l[4]=P=>a(m).show=!1)}),{default:r(()=>[o(w,null,{default:r(()=>[u("mdi-close")]),_:1})]),_:2},1040)]),default:r(()=>[u(C(a(m).text)+" ",1)]),_:1},8,["modelValue","color"]),o(n,{cols:"12",class:"d-flex gap-4"},{default:r(()=>[o(d,{type:"submit"},{default:r(()=>[u(" Enregistré ")]),_:1}),o(d,{type:"reset",color:"secondary",variant:"tonal"},{default:r(()=>[u(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),le=V({__name:"congeEdit",setup(E){return(_,f)=>(D(),R("div",null,[o(v,null,{default:r(()=>[o(n,{cols:"12"},{default:r(()=>[o(N,{title:"Editer congé"},{default:r(()=>[o(F,null,{default:r(()=>[o(T)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{le as default};