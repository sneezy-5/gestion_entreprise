/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllTransactions= () => {

    return Axios.get('/transactions/')
}


let getTransaction= (cid:number) => {
    return Axios.get('/transactions/'+cid+'/')
}

let updateTransaction = (property:object) => {
    return Axios.put('/transactions/'+property.id+'/', property)
}

let createTransation = (property:object) => {
    return Axios.post('/transactions/', property)
}

let deleteTransation = (cid:number) => {
    return Axios.delete('/transactions/'+cid+'/')
}

export const transactionService = {
    getAllTransactions,
    getTransaction,
    updateTransaction,
    createTransation,
    deleteTransation,
}