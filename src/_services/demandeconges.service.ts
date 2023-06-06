/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllDeamndeConges= () => {

    return Axios.get('/demandeconges/')
}


let getDemandeConge= (cid:number) => {
    return Axios.get('/demandeconges/'+cid)
}

let updateDemandeConge = (property:object,id) => {
    return Axios.patch('/demandeconges/'+id+'/', property)
}

let createDemandeConge = (property:object) => {
    return Axios.post('/demandeconges/', property)
}

let deleteDemandeConge = (cid:number) => {
    return Axios.delete('/demandeconges/'+cid)
}

export const demandeCongeService = {
    getAllDeamndeConges,
    deleteDemandeConge,
    getDemandeConge,
    updateDemandeConge,
    createDemandeConge,
}