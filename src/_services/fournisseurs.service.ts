/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllFournisseurs= (filter) => {

    return Axios.get('/fournisseurs/?'+filter)
}


let getFournisseur= (cid:number) => {
    return Axios.get('/fournisseurs/'+cid+'/')
}

let updateFournisseur = (property:object) => {
    return Axios.put('/fournisseurs/'+property.id+'/', property)
}

let createFournisseur = (property:object) => {
    return Axios.post('/fournisseurs/', property)
}

let deleteFOurnisseur = (cid:number) => {
    return Axios.delete('/fournisseurs/'+cid+'/')
}

export const fournisseurService = {
    getAllFournisseurs,
    getFournisseur,
    updateFournisseur,
    createFournisseur,
    deleteFOurnisseur,
}
