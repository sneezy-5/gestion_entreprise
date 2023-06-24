import { importUnwrapRef } from 'vue';
/** Import des modules nécessaires */
import Axios from './caller.service'
const headers = { 'Content-Type': 'multipart/form-data' };

let getAllEmployees = (filter?) => {

    return Axios.get('/employees/?'+filter)
}
let getList = () => {

    return Axios.get('/employe-list/')
}

let getlEmploye  = (cid:number) => {
    return Axios.get('/employees/'+cid+'/')
}

let updateEmploye = (property:object) => {
    return Axios.put('/employees/'+property.id+'/', property,{ headers })
}

let createEmploye = (property:object) => {
     
    return Axios.post('/employees/', property,{ headers })
}

let importEmploye = (property:object) => {
     
    return Axios.post('/employe/import-excel/', property,{ headers })
}
let deleteEmploye = (cid:number) => {
    return Axios.delete('/employees/'+cid)
}

export const employeesService = {
    getAllEmployees,
    getList ,
    getlEmploye,
    updateEmploye,
    createEmploye,
    importEmploye ,
    deleteEmploye,
}
