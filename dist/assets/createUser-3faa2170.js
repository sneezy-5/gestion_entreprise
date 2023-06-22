import{d as V,r as b,O as f,o as E,c as v,e as l,k as o,i as r,bS as i,N as h,V as g,p,t as U,bQ as S,m as k}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{u as C}from"./user.service-1e743d10.js";import{e as N}from"./employees.service-ebfa0509.js";import{a as u,V as w}from"./VRow-b4fd1837.js";import{V as c}from"./VSelect-d3819a80.js";import{V as n}from"./VTextField-6bab4857.js";import{V as B}from"./VSnackbar-48185565.js";import{V as F}from"./VCounter-f481b6e6.js";import{a as M,V as R}from"./VCard-9f617b6a.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-0d5d1b04.js";import"./index-1a500ab3.js";import"./VImg-17513cc0.js";import"./ssrBoot-b02e1060.js";import"./VAvatar-d640487b.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./dialog-transition-f581d50d.js";import"./VCheckboxBtn-ebf12b5d.js";const T=V({__name:"DemoFormLayoutUser",setup(y){const m=b({show:!1,text:"",color:""}),d=f([]);N.getList().then(s=>{const a=s.data.data;for(let t=0;t<a.length;t++)d.push({state:a[t].firstName,abbr:a[t].id});console.log(d,a)}).catch(s=>{s.status=="401"&&console.error(s)});const x=["admin","comptable","drh","editeur"],e=f({username:"",email:"",password:"",role:"",employee:"",formErrors:{username:!1,email:!1,password:!1,role:!1,employee:!1}}),_=()=>{console.log(e),C.createUser(e).then(s=>{e.formErrors.username=!1,e.formErrors.email=!1,e.formErrors.employee=!1,e.formErrors.password=!1,e.formErrors.role=!1,m.value={show:!0,text:"Enregistré avec succès",color:"success"}}).catch(s=>{s.response.data.data.username?(e.formErrors.username=!0,m.value={show:!0,text:s.response.data.data.username,color:"error"}):e.formErrors.username=!1,s.response.data.data.email?(e.formErrors.email=!0,m.value={show:!0,text:s.response.data.data.email,color:"error"}):e.formErrors.email=!1,s.response.data.data.employee?(e.formErrors.employee=!0,m.value={show:!0,text:s.response.data.data.employee,color:"error"}):e.formErrors.employee=!1,s.response.data.data.password?(e.formErrors.password=!0,m.value={show:!0,text:s.response.data.data.password,color:"error"}):e.formErrors.password=!1,console.log(s)})};return(s,a)=>(E(),v(F,{onSubmit:S(_,["prevent"])},{default:l(()=>[o(w,null,{default:l(()=>[o(u,{cols:"12",md:"6"},{default:l(()=>[o(c,{modelValue:r(e).employee,"onUpdate:modelValue":a[0]||(a[0]=t=>r(e).employee=t),label:"Employés",items:r(d),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:r(e).formErrors.employee},null,8,["modelValue","items","error"])]),_:1}),o(u,{cols:"12",md:"6"},{default:l(()=>[o(n,{type:"text",modelValue:r(e).username,"onUpdate:modelValue":a[1]||(a[1]=t=>r(e).username=t),label:"Nom Utilisateur",placeholder:"Nom Utilisateur",error:r(e).formErrors.username},null,8,["modelValue","error"])]),_:1}),o(u,{cols:"12",md:"6"},{default:l(()=>[o(n,{type:"text",modelValue:r(e).email,"onUpdate:modelValue":a[2]||(a[2]=t=>r(e).email=t),label:"Email",placeholder:"Email",error:r(e).formErrors.email},null,8,["modelValue","error"])]),_:1}),o(u,{cols:"12",md:"6"},{default:l(()=>[o(n,{type:"text",modelValue:r(e).password,"onUpdate:modelValue":a[3]||(a[3]=t=>r(e).password=t),label:"Mot de passe",placeholder:"Mot de passe",error:r(e).formErrors.password},null,8,["modelValue","error"])]),_:1}),o(u,{cols:"12",md:"6"},{default:l(()=>[o(c,{modelValue:r(e).role,"onUpdate:modelValue":a[4]||(a[4]=t=>r(e).role=t),items:x,attach:"",chips:"",label:"Rôle",multiple:""},null,8,["modelValue"])]),_:1}),o(B,{modelValue:r(m).show,"onUpdate:modelValue":a[6]||(a[6]=t=>r(m).show=t),timeout:3e3,color:r(m).color,top:"top"},{action:l(({attrs:t})=>[o(i,h({text:""},t,{onClick:a[5]||(a[5]=D=>r(m).show=!1)}),{default:l(()=>[o(g,null,{default:l(()=>[p("mdi-close")]),_:1})]),_:2},1040)]),default:l(()=>[p(U(r(m).text)+" ",1)]),_:1},8,["modelValue","color"]),o(u,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[o(i,{type:"submit"},{default:l(()=>[p(" Enregistré ")]),_:1}),o(i,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),ae=V({__name:"createUser",setup(y){return(m,d)=>(E(),k("div",null,[o(w,null,{default:l(()=>[o(u,{cols:"12"},{default:l(()=>[o(M,{title:"Ajouter un utlisateur"},{default:l(()=>[o(R,null,{default:l(()=>[o(T)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{ae as default};