/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllComptes= () => {

    return Axios.get('/comptes/')
}


let getCompte= (cid:number) => {
    return Axios.get('/comptes/'+cid+'/')
}

let updateCompte = (property:object) => {
    return Axios.put('/comptes/'+property.id+'/', property)
}

let createCompte = (property:object) => {
    return Axios.post('/comptes/', property)
}

let deleteCompte = (cid:number) => {
    return Axios.delete('/comptes/'+cid+'/')
}

export const compteService = {
    getAllComptes,
    getCompte,
    updateCompte,
    createCompte,
    deleteCompte,
}