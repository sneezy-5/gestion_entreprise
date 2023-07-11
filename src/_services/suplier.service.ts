/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllSupliers= (filter?) => {

    return Axios.get('/supplier/?'+filter)
}


let getSuplier= (cid:number) => {
    return Axios.get('/supplier/'+cid+'/')
}

let updateSuplier = (property:object) => {
    return Axios.put('/supplier/'+property.id+'/', property)
}

let createSuplier = (property:object) => {
    return Axios.post('/supplier/', property)
}

let deleteSuplier = (cid:number) => {
    return Axios.delete('/supplier/'+cid+'/')
}

export const supplierService = {
  getAllSupliers,
  getSuplier,
  updateSuplier,
  createSuplier,
  deleteSuplier,
}
