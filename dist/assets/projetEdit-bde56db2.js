import{d as f,ce as w,r as b,O as h,o as V,c as g,e as t,k as o,i as a,bS as d,N as y,V as k,p as i,t as C,bQ as S,m as j}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{p}from"./projet.service-8c51f1fc.js";import{a as m,V as _}from"./VRow-b4fd1837.js";import{V as c}from"./VTextField-6bab4857.js";import{V as D}from"./VSnackbar-48185565.js";import{V as P}from"./VCounter-f481b6e6.js";import{a as B,V as R}from"./VCard-9f617b6a.js";import"./VImg-17513cc0.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./index-1a500ab3.js";import"./VAvatar-d640487b.js";const T=f({__name:"DemoFormLayoutProjetdit",setup(x){const u=w().currentRoute.value.params.id,s=b({show:!1,text:"",color:""}),e=h({name:null,description:null,formErrors:{name:!1,description:!1}});p.getProject(u).then(r=>{e.id=r.data.id,e.name=r.data.name,e.description=r.data.description}).catch(r=>{r.status==401&&console.error(r)});const v=()=>{console.log(e),p.updateProject(e).then(r=>{e.formErrors.name=!1,e.formErrors.description=!1,s.value={show:!0,text:"Modifié avec succès",color:"green"}}).catch(r=>{r.response.data.name?(e.formErrors.name=!0,s.value={show:!0,text:r.response.data.name,color:"red"}):e.formErrors.name=!1,r.response.data.description?(e.formErrors.description=!0,s.value={show:!0,text:r.response.data.description,color:"red"}):e.formErrors.description=!1,console.log(r)})};return(r,l)=>(V(),g(P,{onSubmit:S(v,["prevent"])},{default:t(()=>[o(_,null,{default:t(()=>[o(m,{cols:"12",md:"6"},{default:t(()=>[o(c,{type:"text",modelValue:a(e).name,"onUpdate:modelValue":l[0]||(l[0]=n=>a(e).name=n),label:"Titre",placeholder:"Description",error:a(e).formErrors.name},null,8,["modelValue","error"])]),_:1}),o(m,{cols:"12",md:"6"},{default:t(()=>[o(c,{type:"text",modelValue:a(e).description,"onUpdate:modelValue":l[1]||(l[1]=n=>a(e).description=n),label:"Description",placeholder:"Description",error:a(e).formErrors.description},null,8,["modelValue","error"])]),_:1}),o(D,{modelValue:a(s).show,"onUpdate:modelValue":l[3]||(l[3]=n=>a(s).show=n),timeout:3e3,color:a(s).color,top:"top"},{action:t(({attrs:n})=>[o(d,y({text:""},n,{onClick:l[2]||(l[2]=F=>a(s).show=!1)}),{default:t(()=>[o(k,null,{default:t(()=>[i("mdi-close")]),_:1})]),_:2},1040)]),default:t(()=>[i(C(a(s).text)+" ",1)]),_:1},8,["modelValue","color"]),o(m,{cols:"12",class:"d-flex gap-4"},{default:t(()=>[o(d,{type:"submit"},{default:t(()=>[i(" Enregistré ")]),_:1}),o(d,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[i(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),W=f({__name:"projetEdit",setup(x){return(E,u)=>(V(),j("div",null,[o(_,null,{default:t(()=>[o(m,{cols:"12"},{default:t(()=>[o(B,{title:"Editer"},{default:t(()=>[o(R,null,{default:t(()=>[o(T)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{W as default};
