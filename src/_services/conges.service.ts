/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllConges= (filter) => {

    return Axios.get('/conges/?'+filter)
}


let getConge= (cid:number) => {
    return Axios.get('/conges/'+cid)
}

let updateConge = (property:object) => {
    return Axios.put('/conges/'+property.id+'/', property)
}

let createConge = (property:object) => {
    return Axios.post('/conges/', property)
}

let deleteConge = (cid:number) => {
    return Axios.delete('/conges/'+cid)
}

export const congeService = {
    getAllConges,
    getConge,
    updateConge,
    createConge,
    deleteConge,
}
