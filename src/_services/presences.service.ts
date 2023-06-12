/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllPresences= (filter?) => {

    return Axios.get('/presences/?'+filter)
}


let getPresence= (cid:number) => {
    return Axios.get('/presences/'+cid)
}

let updatePresence = (property:object) => {
    return Axios.put('/presences/'+property.id+'/', property)
}

let createresence = (property:object) => {
    return Axios.post('/presences/', property)
}

let deletePresence = (cid:number) => {
    return Axios.delete('/presences/'+cid)
}

export const presenceService = {
    getAllPresences,
    getPresence,
    updatePresence,
    createresence,
    deletePresence,
}
