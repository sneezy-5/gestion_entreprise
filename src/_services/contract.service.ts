/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllContracts= (filter?) => {

    return Axios.get('/contracts/?'+filter)
}


let getContracts= (cid:number) => {
    return Axios.get('/contracts/'+cid+'/')
}

let updateContracts = (property:object) => {
    return Axios.put('/contracts/'+property.id+'/', property)
}

let createContracts = (property:object) => {
    return Axios.post('/contracts/', property)
}

let deleteContracts = (cid:number) => {
    return Axios.delete('/contracts/'+cid+'/')
}

export const contractService = {
    getAllContracts,
    getContracts,
    updateContracts,
    createContracts,
    deleteContracts,
}
