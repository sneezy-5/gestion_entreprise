import{d as E,ce as H,r as g,O as y,o as _,c as x,e as s,k as l,i as o,bS as i,N as S,V as w,p as u,t as C,bQ as U,m as h}from"./index-54e10577.js";import"./caller.service-afc094da.js";import{e as P}from"./employees.service-ebfa0509.js";import{p as v}from"./presences.service-7fab686a.js";import{a as d,V}from"./VRow-b4fd1837.js";import{V as k}from"./VSelect-d3819a80.js";import{V as n}from"./VTextField-6bab4857.js";import{V as D}from"./VSnackbar-48185565.js";import{V as F}from"./VCounter-f481b6e6.js";import{a as B,V as N}from"./VCard-9f617b6a.js";import"./forwardRefs-a29b5f65.js";import"./VMenu-0d5d1b04.js";import"./index-1a500ab3.js";import"./VImg-17513cc0.js";import"./ssrBoot-b02e1060.js";import"./VAvatar-d640487b.js";import"./VOverlay-0a4d3386.js";import"./lazy-c224c8a4.js";import"./easing-9f15041e.js";import"./dialog-transition-f581d50d.js";import"./VCheckboxBtn-ebf12b5d.js";const R=E({__name:"DemoFormLayoutPresenceEdit",setup(c){const f=H().currentRoute.value.params.id,m=g({show:!1,text:"",color:""}),p=y([]);P.getAllEmployees().then(r=>{const a=r.data.results;for(let t=0;t<a.length;t++)p.push({state:a[t].firstName,abbr:a[t].id});console.log(p)}).catch(r=>{r.status=="401"&&console.error(r)});const e=y({periodStart:null,periodEnd:null,absentdays:null,presentdays:null,delays:null,normalHours:null,normalHoursComplementary:null,Overtime_15:null,Overtime_50:null,Overtime_75:null,Overtime_100:null,employee:null,formErrors:{periodStart:!1,periodEnd:!1,absentdays:!1,presentdays:!1,delays:!1,normalHours:!1,normalHoursComplementary:!1,Overtime_15:!1,Overtime_50:!1,Overtime_75:!1,Overtime_100:!1,employee:!1}});v.getPresence(f).then(r=>{e.id=r.data.id,e.periodStart=r.data.periodStart,e.periodEnd=r.data.periodEnd,e.absentdays=r.data.absentdays,e.presentdays=r.data.presentdays,e.delays=r.data.delays,e.normalHours=r.data.normalHours,e.normalHoursComplementary=r.data.normalHoursComplementary,e.Overtime_15=r.data.Overtime_15,e.Overtime_50=r.data.Overtime_50,e.Overtime_75=r.data.Overtime_75,e.Overtime_100=r.data.Overtime_100,e.employee=r.data.employee.id,console.log(r)}).catch(r=>{r.status==401&&console.error(r)});const b=()=>{console.log(e),v.updatePresence(e).then(r=>{e.formErrors.periodStart=!1,e.formErrors.periodEnd=!1,e.formErrors.absentdays=!1,e.formErrors.presentdays=!1,e.formErrors.delays=!1,e.formErrors.normalHours=!1,e.formErrors.normalHoursComplementary=!1,e.formErrors.Overtime_15=!1,e.formErrors.Overtime_50=!1,e.formErrors.Overtime_75=!1,e.formErrors.Overtime_100=!1,e.formErrors.employee=!1,m.value={show:!0,text:"Modifié avec succès",color:"success"}}).catch(r=>{r.response.data.periodStart?(e.formErrors.periodStart=!0,m.value={show:!0,text:r.response.data.periodStart,color:"danger"}):e.formErrors.periodStart=!1,r.response.data.periodEnd?(e.formErrors.periodEnd=!0,m.value={show:!0,text:r.response.data.periodEnd,color:"danger"}):e.formErrors.periodEnd=!1,r.response.data.absentdays?(e.formErrors.absentdays=!0,m.value={show:!0,text:r.response.data.absentdays,color:"danger"}):e.formErrors.absentdays=!1,r.response.data.presentdays?(e.formErrors.presentdays=!0,m.value={show:!0,text:r.response.data.presentdays,color:"danger"}):e.formErrors.presentdays=!1,r.response.data.delays,e.formErrors.delays=!1,r.response.data.normalHours?(e.formErrors.normalHours=!0,m.value={show:!0,text:r.response.data.normalHours,color:"danger"}):e.formErrors.normalHours=!1,r.response.data.normalHoursComplementary?(e.formErrors.normalHoursComplementary=!0,m.value={show:!0,text:r.response.data.normalHoursComplementary,color:"danger"}):e.formErrors.normalHoursComplementary=!1,r.response.data.Overtime_15?(e.formErrors.Overtime_15=!0,m.value={show:!0,text:r.response.data.Overtime_15,color:"danger"}):e.formErrors.Overtime_50=!1,r.response.data.Overtime_50?(e.formErrors.Overtime_50=!0,m.value={show:!0,text:r.response.data.Overtime_50,color:"danger"}):e.formErrors.Overtime_75=!1,r.response.data.Overtime_75?(e.formErrors.Overtime_15=!0,m.value={show:!0,text:r.response.data.Overtime_75,color:"danger"}):e.formErrors.Overtime_100=!1,r.response.data.Overtime_100?(e.formErrors.Overtime_100=!0,m.value={show:!0,text:r.response.data.Overtime_100,color:"danger"}):e.formErrors.Overtime_100=!1,r.response.data.employee?(e.formErrors.employee=!0,m.value={show:!0,text:r.response.data.employee,color:"danger"}):e.formErrors.employee=!1,console.log(r)})};return(r,a)=>(_(),x(F,{onSubmit:U(b,["prevent"]),enctype:"multipart/form-data"},{default:s(()=>[l(V,null,{default:s(()=>[l(d,{cols:"12",md:"6"},{default:s(()=>[l(k,{modelValue:o(e).employee,"onUpdate:modelValue":a[0]||(a[0]=t=>o(e).employee=t),label:"Employés",items:o(p),"item-title":"state","item-value":"abbr","persistent-hint":"","single-line":"",error:o(e).formErrors.employee},null,8,["modelValue","items","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"date",modelValue:o(e).periodStart,"onUpdate:modelValue":a[1]||(a[1]=t=>o(e).periodStart=t),label:"Debut",placeholder:"Debut",error:o(e).formErrors.periodStart},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"date",modelValue:o(e).periodEnd,"onUpdate:modelValue":a[2]||(a[2]=t=>o(e).periodEnd=t),label:"Fin",placeholder:"Fin",error:o(e).formErrors.periodEnd},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).presentdays,"onUpdate:modelValue":a[3]||(a[3]=t=>o(e).presentdays=t),label:"Presence",placeholder:"Presence",error:o(e).formErrors.presentdays},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).absentdays,"onUpdate:modelValue":a[4]||(a[4]=t=>o(e).absentdays=t),label:"Absence",placeholder:"Absence",error:o(e).formErrors.absentdays},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).delays,"onUpdate:modelValue":a[5]||(a[5]=t=>o(e).delays=t),label:"Delay",placeholder:"Delay",error:o(e).formErrors.delays},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).normalHours,"onUpdate:modelValue":a[6]||(a[6]=t=>o(e).normalHours=t),label:"Heure normal",placeholder:"Heure normal",error:o(e).formErrors.normalHours},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).normalHoursComplementary,"onUpdate:modelValue":a[7]||(a[7]=t=>o(e).normalHoursComplementary=t),label:"Heure normal complementaire",placeholder:"Heure normal complementaire",error:o(e).formErrors.normalHoursComplementary},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).Overtime_15,"onUpdate:modelValue":a[8]||(a[8]=t=>o(e).Overtime_15=t),label:"Heure sup",placeholder:"Heure sup",error:o(e).formErrors.Overtime_15},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).Overtime_50,"onUpdate:modelValue":a[9]||(a[9]=t=>o(e).Overtime_50=t),label:"Heure sup",placeholder:"Heure sup",error:o(e).formErrors.Overtime_50},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).Overtime_75,"onUpdate:modelValue":a[10]||(a[10]=t=>o(e).Overtime_75=t),label:"Heure sup 75",placeholder:"Heure sup 75",error:o(e).formErrors.Overtime_75},null,8,["modelValue","error"])]),_:1}),l(d,{cols:"12",md:"6"},{default:s(()=>[l(n,{type:"number",modelValue:o(e).Overtime_100,"onUpdate:modelValue":a[11]||(a[11]=t=>o(e).Overtime_100=t),label:"Heure sup 100",placeholder:"Heure sup 100",error:o(e).formErrors.Overtime_100},null,8,["modelValue","error"])]),_:1}),l(D,{modelValue:o(m).show,"onUpdate:modelValue":a[13]||(a[13]=t=>o(m).show=t),timeout:3e3,color:o(m).color,top:"top"},{action:s(({attrs:t})=>[l(i,S({text:""},t,{onClick:a[12]||(a[12]=A=>o(m).show=!1)}),{default:s(()=>[l(w,null,{default:s(()=>[u("mdi-close")]),_:1})]),_:2},1040)]),default:s(()=>[u(C(o(m).text)+" ",1)]),_:1},8,["modelValue","color"]),l(d,{cols:"12",class:"d-flex gap-4"},{default:s(()=>[l(i,{type:"submit"},{default:s(()=>[u(" Enregistré ")]),_:1}),l(i,{type:"reset",color:"secondary",variant:"tonal"},{default:s(()=>[u(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}}),te=E({__name:"presenceEdit",setup(c){return(O,f)=>(_(),h("div",null,[l(V,null,{default:s(()=>[l(d,{cols:"12"},{default:s(()=>[l(B,{title:"Editer Présence"},{default:s(()=>[l(N,null,{default:s(()=>[l(R)]),_:1})]),_:1})]),_:1})]),_:1})]))}});export{te as default};
