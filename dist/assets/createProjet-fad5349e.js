import{d as u,r as x,O as E,o as c,c as v,e as r,k as e,i as t,bS as p,N as w,V as b,p as i,t as g,bQ as h,m as y}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{p as j}from"./projet.service-8c51f1fc.js";import{a as m,V as f}from"./VRow-b4fd1837.js";import{V as d}from"./VTextField-6bab4857.js";import{V as k}from"./VSnackbar-48185565.js";import{V as C}from"./VCounter-f481b6e6.js";import{a as S,V as D}from"./VCard-9f617b6a.js";import"./VImg-17513cc0.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./index-1a500ab3.js";import"./VAvatar-d640487b.js";const B=u({__name:"DemoFormLayoutProjet",setup(V){const a=x({show:!1,text:"",color:""}),o=E({name:null,description:null,formErrors:{name:!1,description:!1}}),_=()=>{console.log(o),j.createProeject(o).then(l=>{o.formErrors.name=!1,o.formErrors.description=!1,a.value={show:!0,text:"Enregistré avec succès",color:"success"}}).catch(l=>{l.response.data.name?(o.formErrors.name=!0,a.value={show:!0,text:l.response.data.name,color:"danger"}):o.formErrors.name=!1,l.response.data.description?(o.formErrors.description=!0,a.value={show:!0,text:l.response.data.description,color:"danger"}):o.formErrors.description=!1,console.log(l)})};return(l,s)=>(c(),v(C,{onSubmit:h(_,["prevent"])},{default:r(()=>[e(f,null,{default:r(()=>[e(m,{cols:"12",md:"6"},{default:r(()=>[e(d,{type:"text",modelValue:t(o).name,"onUpdate:modelValue":s[0]||(s[0]=n=>t(o).name=n),label:"Titre",placeholder:"Description",error:t(o).formErrors.name},null,8,["modelValue","error"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(d,{type:"text",modelValue:t(o).description,"onUpdate:modelValue":s[1]||(s[1]=n=>t(o).description=n),label:"Description",placeholder:"Description",error:t(o).formErrors.description},null,8,["modelValue","error"])]),_:1}),e(k,{modelValue:t(a).show,"onUpdate:modelValue":s[3]||(s[3]=n=>t(a).show=n),timeout:3e3,color:t(a).color,top:"top"},{action:r(({attrs:n})=>[e(p,w({text:""},n,{onClick:s[2]||(s[2]=P=>t(a).show=!1)}),{default:r(()=>[e(b,null,{default:r(()=>[i("mdi-close")]),_:1})]),_:2},1040)]),default:r(()=>[i(g(t(a).text)+" ",1)]),_:1},8,["modelValue","color"]),e(m,{cols:"12",class:"d-flex gap-4"},{default:r(()=>[e(p,{type:"submit"},{default:r(()=>[i(" Enregistré ")]),_:1}),e(p,{type:"reset",color:"secondary",variant:"tonal"},{default:r(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),H=u({__name:"createProjet",setup(V){return(a,o)=>(c(),y("div",null,[e(f,null,{default:r(()=>[e(m,{cols:"12"},{default:r(()=>[e(S,{title:"Ajouter un projet"},{default:r(()=>[e(D,null,{default:r(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{H as default};