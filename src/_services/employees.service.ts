/** Import des modules nécessaires */
import Axios from './caller.service'
const headers = { 'Content-Type': 'multipart/form-data' };
let getAllEmployees = () => {

    return Axios.get('/employees/')
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

let deleteEmploye = (cid:number) => {
    return Axios.delete('/employees/'+cid)
}

export const employeesService = {
    getAllEmployees,
    getlEmploye,
    updateEmploye,
    createEmploye,
    deleteEmploye,
}