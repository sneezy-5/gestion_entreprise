import{d as E,r as j,ba as f,cj as w,bW as y,db as S,dd as _,o as b,c as T,e as l,k as s,i as o,bV as c,N as U,V as k,p as u,t as C,bS as D,m as B}from"./index-548d44d1.js";import{a as n,V as g}from"./VRow-4f92fdd1.js";import{V}from"./VSelect-881b3fd7.js";import{V as m}from"./VTextField-f85f9694.js";import{V as F}from"./VSnackbar-7e8d4438.js";import{V as P}from"./VCounter-3543cf5b.js";import{a as R,V as L}from"./VCard-fc59d69e.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-528d0b92.js";import"./index-d9ad5dd9.js";import"./VImg-a20b01d5.js";import"./ssrBoot-595446f4.js";import"./VAvatar-2a93fb47.js";import"./VOverlay-3b2ac0ae.js";import"./lazy-4c34a0b5.js";import"./easing-9f15041e.js";import"./dialog-transition-ec6f11a2.js";import"./VCheckboxBtn-172bb155.js";const N=E({__name:"DemoFormLayoutTacheEdit",setup(h){const d=j({show:!1,text:"",color:""}),i=f([]),p=f([]),x=w().currentRoute.value.params.id;y.getList().then(t=>{const a=t.data.data;for(let r=0;r<a.length;r++)i.push({state:a[r].username,abbr:a[r].id});console.log(i)}).catch(t=>{t.status=="401"&&console.error(t)}),S.getProjetList().then(t=>{const a=t.data.data;for(let r=0;r<a.length;r++)p.push({state:a[r].name,abbr:a[r].id});console.log(p)}).catch(t=>{t.status=="401"&&console.error(t)});const e=f({title:"",description:"",start_date:null,end_date:null,user:null,project:null,formErrors:{title:!1,description:!1,start_date:!1,end_date:!1,user:!1,project:!1}});_.getTache(x).then(t=>{e.id=t.data.id,e.title=t.data.title,e.description=t.data.description,e.end_date=t.data.end_date,e.start_date=t.data.start_date,e.project=t.data.project.id,e.user=t.data.user.username,console.log(t)}).catch(t=>{t.status==401&&console.error(t)});const v=()=>{console.log(e),_.updateTache(e).then(t=>{e.formErrors.title=!1,e.formErrors.description=!1,e.formErrors.start_date=!1,e.formErrors.end_date=!1,e.formErrors.user=!1,e.formErrors.project=!1,d.value={show:!0,text:"modifié avec succès",color:"success"}}).catch(t=>{t.response.data.title?(e.formErrors.title=!0,d.value={show:!0,text:t.response.data.title,color:"danger"}):e.formErrors.title=!1,t.response.data.start_date?(e.formErrors.start_date=!0,d.value={show:!0,text:t.response.data.start_date,color:"danger"}):e.formErrors.start_date=!1,t.response.data.end_date?(e.formErrors.end_date=!0,d.value={show:!0,text:t.response.data.end_date,color:"danger"}):e.formErrors.end_date=!1,t.response.data.user?(e.formErrors.user=!0,d.value={show:!0,text:t.response.data.user,color:"danger"}):e.formErrors.user=!1,console.log(t)})};return(t,a)=>(b(),T(P,{onSubmit:D(v,["prevent"])},{default:l(()=>[s(g,null,{default:l(()=>[s(n,{cols:"12",md:"6"},{default:l(()=>[s(V,{modelValue:o(e).user,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).user=r),label:"Employés",items:o(i),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:o(e).formErrors.user},null,8,["modelValue","items","error"])]),_:1}),s(n,{cols:"12",md:"6"},{default:l(()=>[s(V,{modelValue:o(e).project,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).project=r),label:"Projets",items:o(p),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:o(e).formErrors.project},null,8,["modelValue","items","error"])]),_:1}),s(n,{cols:"12",md:"6"},{default:l(()=>[s(m,{type:"text",modelValue:o(e).title,"onUpdate:modelValue":a[2]||(a[2]=r=>o(e).title=r),label:"Titre",placeholder:"Titre",error:o(e).formErrors.title},null,8,["modelValue","error"])]),_:1}),s(n,{cols:"12",md:"6"},{default:l(()=>[s(m,{type:"text",modelValue:o(e).description,"onUpdate:modelValue":a[3]||(a[3]=r=>o(e).description=r),label:"Description",placeholder:"Description",error:o(e).formErrors.description},null,8,["modelValue","error"])]),_:1}),s(n,{cols:"12",md:"6"},{default:l(()=>[s(m,{type:"date",modelValue:o(e).start_date,"onUpdate:modelValue":a[4]||(a[4]=r=>o(e).start_date=r),label:"Debut",error:o(e).formErrors.start_date},null,8,["modelValue","error"])]),_:1}),s(n,{cols:"12",md:"6"},{default:l(()=>[s(m,{type:"date",modelValue:o(e).end_date,"onUpdate:modelValue":a[5]||(a[5]=r=>o(e).end_date=r),label:"Fin",error:o(e).formErrors.end_date},null,8,["modelValue","error"])]),_:1}),s(F,{modelValue:o(d).show,"onUpdate:modelValue":a[7]||(a[7]=r=>o(d).show=r),timeout:3e3,color:o(d).color,top:"top"},{action:l(({attrs:r})=>[s(c,U({text:""},r,{onClick:a[6]||(a[6]=I=>o(d).show=!1)}),{default:l(()=>[s(k,null,{default:l(()=>[u("mdi-close")]),_:1})]),_:2},1040)]),default:l(()=>[u(C(o(d).text)+" ",1)]),_:1},8,["modelValue","color"]),s(n,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[s(c,{type:"submit"},{default:l(()=>[u(" Enregistré ")]),_:1}),s(c,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[u(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),ae=E({__name:"tacheEdit",setup(h){return(d,i)=>(b(),B("div",null,[s(g,null,{default:l(()=>[s(n,{cols:"12"},{default:l(()=>[s(R,{title:"Editer"},{default:l(()=>[s(L,null,{default:l(()=>[s(N)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{ae as default};