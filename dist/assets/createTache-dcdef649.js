import{d as _,r as h,ba as f,bW as v,db as w,o as b,c as j,e as s,k as a,i as r,bV as p,N as y,V as S,p as m,t as T,bS as C,dd as U,m as k}from"./index-bfa2d538.js";import{a as n,V as E}from"./VRow-18416828.js";import{V}from"./VSelect-afd81524.js";import{V as c}from"./VTextField-62f011eb.js";import{V as D}from"./VTextarea-04772fba.js";import{V as B}from"./VSnackbar-7c821870.js";import{V as F}from"./VCounter-9deabfc9.js";import{a as L,V as N}from"./VCard-7877ac97.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-11b1e763.js";import"./index-c03b3b8a.js";import"./VImg-d7e6df3b.js";import"./ssrBoot-b114fef2.js";import"./VAvatar-b5327750.js";import"./VOverlay-b657f991.js";import"./lazy-98d5b0cb.js";import"./easing-9f15041e.js";import"./dialog-transition-44bf92b2.js";import"./VCheckboxBtn-efb2e629.js";const P=_({__name:"DemoFormLayoutTache",setup(g){const d=h({show:!1,text:"",color:""}),i=f([]),u=f([]);v.getList().then(l=>{const o=l.data.data;for(let t=0;t<o.length;t++)i.push({state:o[t].username,abbr:o[t].id});console.log(i)}).catch(l=>{l.status=="401"&&console.error(l)}),w.getProjetList().then(l=>{const o=l.data.data;for(let t=0;t<o.length;t++)u.push({state:o[t].name,abbr:o[t].id});console.log(u)}).catch(l=>{l.status=="401"&&console.error(l)});const e=f({title:"",description:"",start_date:null,end_date:null,user:null,project:null,formErrors:{title:!1,description:!1,start_date:!1,end_date:!1,user:!1,project:!1}}),x=()=>{console.log(e),U.createtache(e).then(l=>{e.formErrors.title=!1,e.formErrors.description=!1,e.formErrors.start_date=!1,e.formErrors.end_date=!1,e.formErrors.user=!1,e.formErrors.project=!1,d.value={show:!0,text:"Enregistré avec succès",color:"success"}}).catch(l=>{l.response.data.title?(e.formErrors.title=!0,d.value={show:!0,text:l.response.data.title,color:"danger"}):e.formErrors.title=!1,l.response.data.start_date?(e.formErrors.start_date=!0,d.value={show:!0,text:l.response.data.start_date,color:"danger"}):e.formErrors.start_date=!1,l.response.data.end_date?(e.formErrors.end_date=!0,d.value={show:!0,text:l.response.data.end_date,color:"danger"}):e.formErrors.end_date=!1,l.response.data.user?(e.formErrors.user=!0,d.value={show:!0,text:l.response.data.user,color:"danger"}):e.formErrors.user=!1,console.log(l)})};return(l,o)=>(b(),j(F,{onSubmit:C(x,["prevent"])},{default:s(()=>[a(E,null,{default:s(()=>[a(n,{cols:"12",md:"6"},{default:s(()=>[a(V,{modelValue:r(e).user,"onUpdate:modelValue":o[0]||(o[0]=t=>r(e).user=t),label:"Compte Employé",items:r(i),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:r(e).formErrors.user},null,8,["modelValue","items","error"])]),_:1}),a(n,{cols:"12",md:"6"},{default:s(()=>[a(V,{modelValue:r(e).project,"onUpdate:modelValue":o[1]||(o[1]=t=>r(e).project=t),label:"Projets",items:r(u),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:r(e).formErrors.project},null,8,["modelValue","items","error"])]),_:1}),a(n,{cols:"12",md:"6"},{default:s(()=>[a(c,{type:"text",modelValue:r(e).title,"onUpdate:modelValue":o[2]||(o[2]=t=>r(e).title=t),label:"Titre",placeholder:"Titre",error:r(e).formErrors.title},null,8,["modelValue","error"])]),_:1}),a(n,{cols:"12",md:"6"},{default:s(()=>[a(D,{modelValue:r(e).description,"onUpdate:modelValue":o[3]||(o[3]=t=>r(e).description=t),label:"Description",placeholder:"Description",error:r(e).formErrors.description},null,8,["modelValue","error"])]),_:1}),a(n,{cols:"12",md:"6"},{default:s(()=>[a(c,{type:"date",modelValue:r(e).start_date,"onUpdate:modelValue":o[4]||(o[4]=t=>r(e).start_date=t),label:"Debut",placeholder:"Debut",error:r(e).formErrors.start_date},null,8,["modelValue","error"])]),_:1}),a(n,{cols:"12",md:"6"},{default:s(()=>[a(c,{type:"date",modelValue:r(e).end_date,"onUpdate:modelValue":o[5]||(o[5]=t=>r(e).end_date=t),label:"Fin",error:r(e).formErrors.end_date},null,8,["modelValue","error"])]),_:1}),a(B,{modelValue:r(d).show,"onUpdate:modelValue":o[7]||(o[7]=t=>r(d).show=t),timeout:3e3,color:r(d).color,top:"top"},{action:s(({attrs:t})=>[a(p,y({text:""},t,{onClick:o[6]||(o[6]=R=>r(d).show=!1)}),{default:s(()=>[a(S,null,{default:s(()=>[m("mdi-close")]),_:1})]),_:2},1040)]),default:s(()=>[m(T(r(d).text)+" ",1)]),_:1},8,["modelValue","color"]),a(n,{cols:"12",class:"d-flex gap-4"},{default:s(()=>[a(p,{type:"submit"},{default:s(()=>[m(" Enregistré ")]),_:1}),a(p,{type:"reset",color:"secondary",variant:"tonal"},{default:s(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),oe=_({__name:"createTache",setup(g){return(d,i)=>(b(),k("div",null,[a(E,null,{default:s(()=>[a(n,{cols:"12"},{default:s(()=>[a(L,{title:"Ajouter Tache"},{default:s(()=>[a(N,null,{default:s(()=>[a(P)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{oe as default};
