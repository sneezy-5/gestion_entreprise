import{d as E,ce as b,r as h,O as f,o as _,c as g,e as a,k as r,i as s,bS as n,N as U,V as S,p as i,t as k,bQ as C,m as N}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{u as c}from"./user.service-1e743d10.js";import{e as B}from"./employees.service-ebfa0509.js";import{a as u,V as y}from"./VRow-b4fd1837.js";import{V as R}from"./VSelect-d3819a80.js";import{V}from"./VTextField-6bab4857.js";import{V as F}from"./VSnackbar-48185565.js";import{V as T}from"./VCounter-f481b6e6.js";import{a as D,V as L}from"./VCard-9f617b6a.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-0d5d1b04.js";import"./index-1a500ab3.js";import"./VImg-17513cc0.js";import"./ssrBoot-b02e1060.js";import"./VAvatar-d640487b.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./dialog-transition-f581d50d.js";import"./VCheckboxBtn-ebf12b5d.js";const M=E({__name:"DemoFormLayoutUserEdit",setup(x){const p=b().currentRoute.value.params.id,m=h({show:!1,text:"",color:""}),d=f([]);B.getList().then(o=>{const t=o.data.data;for(let l=0;l<t.length;l++)d.push({state:t[l].firstName,abbr:t[l].id});console.log(d,t)}).catch(o=>{o.status=="401"&&console.error(o)});const e=f({username:"",email:"",is_superuser:null,role:null,employee:null,formErrors:{username:!1,email:!1,password:!1,role:!1,employee:!1}});c.getUser(p).then(o=>{e.id=o.data.id,e.username=o.data.username,e.email=o.data.email,e.is_superuser=o.data.is_superuser,e.employee=o.data.employee.id,console.log(o)}).catch(o=>{o.status==401&&console.error(o)});const v=()=>{console.log(e),c.updateUser(e).then(o=>{e.formErrors.username=!1,e.formErrors.email=!1,e.formErrors.employee=!1,e.formErrors.role=!1,m.value={show:!0,text:"Modifié avec succès",color:"green"}}).catch(o=>{o.response.data.data.username?(e.formErrors.username=!0,m.value={show:!0,text:o.response.data.data.username,color:"red"}):e.formErrors.username=!1,o.response.data.data.email?(e.formErrors.email=!0,m.value={show:!0,text:o.response.data.data.email,color:"red"}):e.formErrors.email=!1,o.response.data.data.employee?(e.formErrors.employee=!0,m.value={show:!0,text:o.response.data.data.employee,color:"red"}):e.formErrors.employee=!1,o.response.data.data.password?(e.formErrors.password=!0,m.value={show:!0,text:o.response.data.data.password,color:"red"}):e.formErrors.password=!1,console.log(o)})};return(o,t)=>(_(),g(T,{onSubmit:C(v,["prevent"])},{default:a(()=>[r(y,null,{default:a(()=>[r(u,{cols:"12",md:"6"},{default:a(()=>[r(R,{modelValue:s(e).employee,"onUpdate:modelValue":t[0]||(t[0]=l=>s(e).employee=l),label:"Employés",items:s(d),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:s(e).formErrors.employee},null,8,["modelValue","items","error"])]),_:1}),r(u,{cols:"12",md:"6"},{default:a(()=>[r(V,{type:"text",modelValue:s(e).username,"onUpdate:modelValue":t[1]||(t[1]=l=>s(e).username=l),label:"Nom Utilisateur",placeholder:"Nom Utilisateur",error:s(e).formErrors.username},null,8,["modelValue","error"])]),_:1}),r(u,{cols:"12",md:"6"},{default:a(()=>[r(V,{type:"text",modelValue:s(e).email,"onUpdate:modelValue":t[2]||(t[2]=l=>s(e).email=l),label:"Email",placeholder:"Email",error:s(e).formErrors.email},null,8,["modelValue","error"])]),_:1}),r(F,{modelValue:s(m).show,"onUpdate:modelValue":t[4]||(t[4]=l=>s(m).show=l),timeout:3e3,color:s(m).color,top:"top"},{action:a(({attrs:l})=>[r(n,U({text:""},l,{onClick:t[3]||(t[3]=P=>s(m).show=!1)}),{default:a(()=>[r(S,null,{default:a(()=>[i("mdi-close")]),_:1})]),_:2},1040)]),default:a(()=>[i(k(s(m).text)+" ",1)]),_:1},8,["modelValue","color"]),r(u,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[r(n,{type:"submit"},{default:a(()=>[i(" Enregistré ")]),_:1}),r(n,{type:"reset",color:"secondary",variant:"tonal"},{default:a(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),se=E({__name:"userEdit",setup(x){return(w,p)=>(_(),N("div",null,[r(y,null,{default:a(()=>[r(u,{cols:"12"},{default:a(()=>[r(D,{title:"Editer"},{default:a(()=>[r(L,null,{default:a(()=>[r(M)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{se as default};