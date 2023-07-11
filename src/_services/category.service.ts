/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllCategorie= (filter) => {

    return Axios.get('/category/?'+filter)
}

let getLst= () => {

    return Axios.get('/caterory-list/')
}


let getCategory= (cid:number) => {
    return Axios.get('/category/'+cid)
}

let updateCategory = (property:object) => {
    return Axios.patch('/category/'+property.id+'/', property)
}

let createCategory = (property:object) => {
    return Axios.post('/category/', property)
}

let deleteCategory = (cid:number) => {
    return Axios.delete('/category/'+cid)
}

export const categoryService = {
  getAllCategorie,
  getLst,
  getCategory,
  updateCategory,
  createCategory,
  deleteCategory,
}
