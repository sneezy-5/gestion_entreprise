/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllSales= (filter?) => {

    return Axios.get('/sale/?'+filter)
}


let getSale= (cid:number) => {
    return Axios.get('/sale/'+cid+'/')
}

let updateSale = (property:object) => {
    return Axios.put('/sale/'+property.id+'/', property)
}

let createSale = (property:object) => {
    return Axios.post('/sale/', property)
}

let deleteSale = (cid:number) => {
    return Axios.delete('/sale/'+cid+'/')
}

export const saleService = {
  getAllSales,
  getSale,
  updateSale,
  createSale,
  deleteSale,
}
