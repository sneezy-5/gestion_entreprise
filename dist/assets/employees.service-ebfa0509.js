import{A as t}from"./caller.service-afc094da.js";const l={"Content-Type":"multipart/form-data"};let o=e=>t.get("/employees/?"+e),r=()=>t.get("/employe-list/"),p=e=>t.get("/employees/"+e+"/"),m=e=>t.put("/employees/"+e.id+"/",e,{headers:l}),s=e=>t.post("/employees/",e,{headers:l}),y=e=>t.delete("/employees/"+e);const u={getAllEmployees:o,getList:r,getlEmploye:p,updateEmploye:m,createEmploye:s,deleteEmploye:y};export{u as e};
