import{d as p,r as x,ba as E,o as c,c as b,e as r,k as e,i as t,bV as d,N as v,V as w,p as i,t as g,bS as h,db as y,m as j}from"./index-bfa2d538.js";import{a as m,V as f}from"./VRow-18416828.js";import{V as u}from"./VTextField-62f011eb.js";import{V as k}from"./VSnackbar-7c821870.js";import{V as C}from"./VCounter-9deabfc9.js";import{a as S,V as D}from"./VCard-7877ac97.js";import"./VImg-d7e6df3b.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-b657f991.js";import"./lazy-98d5b0cb.js";import"./easing-9f15041e.js";import"./index-c03b3b8a.js";import"./VAvatar-b5327750.js";const B=p({__name:"DemoFormLayoutProjet",setup(V){const a=x({show:!1,text:"",color:""}),o=E({name:null,description:null,formErrors:{name:!1,description:!1}}),_=()=>{console.log(o),y.createProeject(o).then(l=>{o.formErrors.name=!1,o.formErrors.description=!1,a.value={show:!0,text:"Enregistré avec succès",color:"success"}}).catch(l=>{l.response.data.name?(o.formErrors.name=!0,a.value={show:!0,text:l.response.data.name,color:"danger"}):o.formErrors.name=!1,l.response.data.description?(o.formErrors.description=!0,a.value={show:!0,text:l.response.data.description,color:"danger"}):o.formErrors.description=!1,console.log(l)})};return(l,s)=>(c(),b(C,{onSubmit:h(_,["prevent"])},{default:r(()=>[e(f,null,{default:r(()=>[e(m,{cols:"12",md:"6"},{default:r(()=>[e(u,{type:"text",modelValue:t(o).name,"onUpdate:modelValue":s[0]||(s[0]=n=>t(o).name=n),label:"Titre",placeholder:"Description",error:t(o).formErrors.name},null,8,["modelValue","error"])]),_:1}),e(m,{cols:"12",md:"6"},{default:r(()=>[e(u,{type:"text",modelValue:t(o).description,"onUpdate:modelValue":s[1]||(s[1]=n=>t(o).description=n),label:"Description",placeholder:"Description",error:t(o).formErrors.description},null,8,["modelValue","error"])]),_:1}),e(k,{modelValue:t(a).show,"onUpdate:modelValue":s[3]||(s[3]=n=>t(a).show=n),timeout:3e3,color:t(a).color,top:"top"},{action:r(({attrs:n})=>[e(d,v({text:""},n,{onClick:s[2]||(s[2]=P=>t(a).show=!1)}),{default:r(()=>[e(w,null,{default:r(()=>[i("mdi-close")]),_:1})]),_:2},1040)]),default:r(()=>[i(g(t(a).text)+" ",1)]),_:1},8,["modelValue","color"]),e(m,{cols:"12",class:"d-flex gap-4"},{default:r(()=>[e(d,{type:"submit"},{default:r(()=>[i(" Enregistré ")]),_:1}),e(d,{type:"reset",color:"secondary",variant:"tonal"},{default:r(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),H=p({__name:"createProjet",setup(V){return(a,o)=>(c(),j("div",null,[e(f,null,{default:r(()=>[e(m,{cols:"12"},{default:r(()=>[e(S,{title:"Ajouter un projet"},{default:r(()=>[e(D,null,{default:r(()=>[e(B)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{H as default};
