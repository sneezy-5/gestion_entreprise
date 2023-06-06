/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllPayslips= () => {

    return Axios.get('/payslips/')
}


let getPayslips= (cid:number) => {
    return Axios.get('/payslips/'+cid)
}

let updatePayslips = (property:object) => {
    return Axios.put('/payslips/'+property.id, property)
}

let createPayslips = (property:object) => {
    return Axios.post('/generate-paye/', property)
}

let createPayslipsOne = (property:object) => {
    return Axios.post('/generate-one/', property)
}

let deletePayslips = (cid:number) => {
    return Axios.delete('/payslips/'+cid)
}

export const payslipsService = {
    getAllPayslips,
    getPayslips,
    updatePayslips,
    createPayslips,
    createPayslipsOne,
    deletePayslips,
}