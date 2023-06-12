/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllAvance= (filter?) => {

    return Axios.get('/paydays/?'+filter)
}



let getAvance= (cid:number) => {
    return Axios.get('/paydays/'+cid)
}

let updateAvance = (property:object) => {
    return Axios.put('/paydays/'+property.id+'/', property)
}

let createAvance = (property:object) => {
    return Axios.post('/paydays/', property)
}


let deleteAvance = (cid:number) => {
    return Axios.delete('/paydays/'+cid)
}

export const avanceService = {
    getAllAvance,
    getAvance,
    updateAvance,
    createAvance,
    deleteAvance,
}
