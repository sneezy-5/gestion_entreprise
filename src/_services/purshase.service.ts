/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllPursharses= (filter) => {

    return Axios.get('/purshase/?'+filter)
}

let getList= () => {

  return Axios.get('/supplier-list/')
}

let getPursharse= (cid:number) => {
    return Axios.get('/purshase/'+cid)
}

let updatePursharse = (property:object) => {
    return Axios.put('/purshase/'+property.id+'/', property)
}

let createPursharse = (property:object) => {
    return Axios.post('/purshase/', property)
}

let deletePursharse = (cid:number) => {
    return Axios.delete('/purshase/'+cid)
}

export const purshaseService = {
  getAllPursharses,
  getPursharse,
  getList,
  updatePursharse,
  createPursharse,
  deletePursharse,
}
