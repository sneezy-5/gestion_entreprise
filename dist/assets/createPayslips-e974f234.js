import{d as p,r as x,ba as b,o as i,c as y,e as a,k as t,i as r,bV as u,N as v,V as w,p as n,t as E,bS as g,cq as h,m as k}from"./index-548d44d1.js";import{a as m,V as _}from"./VRow-4f92fdd1.js";import{V as f}from"./VTextField-f85f9694.js";import{V as C}from"./VSnackbar-7e8d4438.js";import{V as S}from"./VCounter-3543cf5b.js";import{a as F,V as B}from"./VCard-fc59d69e.js";import"./VImg-a20b01d5.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-3b2ac0ae.js";import"./lazy-4c34a0b5.js";import"./easing-9f15041e.js";import"./index-d9ad5dd9.js";import"./VAvatar-2a93fb47.js";const D=p({__name:"DemoFormLayoutPayslips",setup(c){const o=x({show:!1,text:"",color:""}),e=b({start_date:null,end_date:null,formErrors:{start_date:!1,end_date:!1}}),V=()=>{console.log(e),h.createPayslips(e).then(s=>{e.formErrors.start_date=!1,e.formErrors.end_date=!1,o.value={show:!0,text:"Généré avec succès",color:"green"}}).catch(s=>{s.response.data.message&&(e.formErrors.start_date=!0,o.value={show:!0,text:s.response.data.message,color:"red"}),s.response.data.start_date?(e.formErrors.start_date=!0,o.value={show:!0,text:s.response.data.start_date,color:"red"}):e.formErrors.start_date=!1,s.response.data.end_date?(e.formErrors.end_date=!0,o.value={show:!0,text:s.response.data.end_date,color:"red"}):e.formErrors.end_date=!1,console.log(s)})};return(s,l)=>(i(),y(S,{onSubmit:g(V,["prevent"]),enctype:"multipart/form-data"},{default:a(()=>[t(_,null,{default:a(()=>[t(m,{cols:"12",md:"6"},{default:a(()=>[t(f,{type:"date",modelValue:r(e).start_date,"onUpdate:modelValue":l[0]||(l[0]=d=>r(e).start_date=d),label:"Debut",placeholder:"Debut",error:r(e).formErrors.start_date},null,8,["modelValue","error"])]),_:1}),t(m,{cols:"12",md:"6"},{default:a(()=>[t(f,{type:"date",modelValue:r(e).end_date,"onUpdate:modelValue":l[1]||(l[1]=d=>r(e).end_date=d),label:"Fin",placeholder:"Fin",error:r(e).formErrors.end_date},null,8,["modelValue","error"])]),_:1}),t(C,{modelValue:r(o).show,"onUpdate:modelValue":l[3]||(l[3]=d=>r(o).show=d),timeout:3e3,color:r(o).color,top:"top"},{action:a(({attrs:d})=>[t(u,v({text:""},d,{onClick:l[2]||(l[2]=P=>r(o).show=!1)}),{default:a(()=>[t(w,null,{default:a(()=>[n("mdi-close")]),_:1})]),_:2},1040)]),default:a(()=>[n(E(r(o).text)+" ",1)]),_:1},8,["modelValue","color"]),t(m,{cols:"12",class:"d-flex gap-4"},{default:a(()=>[t(u,{type:"submit"},{default:a(()=>[n(" Générer ")]),_:1}),t(u,{type:"reset",color:"secondary",variant:"tonal"},{default:a(()=>[n(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),H=p({__name:"createPayslips",setup(c){return(o,e)=>(i(),k("div",null,[t(_,null,{default:a(()=>[t(m,{cols:"12"},{default:a(()=>[t(F,{title:"Genérer"},{default:a(()=>[t(B,null,{default:a(()=>[t(D)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{H as default};