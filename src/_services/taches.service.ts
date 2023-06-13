/** Import des modules nécessaires */
import Axios from './caller.service'
import Axiosss from './caller-other-service '

let getAllTaches = (filter) => {

    return Axios.get('/taks/?'+filter)
}

let getTache = (cid:number) => {
    return Axios.get('/taks/'+cid)
}

let updateTache = (property:object) => {
    return Axios.put('/taks/'+property.id+'/', property)
}


let createtache = (property:object) => {
    return Axios.post('/taks/', property)
}

let deleteTache = (cid:number) => {
    return Axios.delete('/taks/'+cid)
}

export const tacheService = {
    getAllTaches,
    getTache,
    updateTache,
    createtache,
    deleteTache,
}
