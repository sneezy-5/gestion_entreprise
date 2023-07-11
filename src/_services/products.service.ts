/** Import des modules nécessaires */
import Axios from './caller.service'

let getAllProducts= (filter?:string) => {

    return Axios.get('/products/?'+filter)
}

let getList= () => {

  return Axios.get('/product-list/')
}

let getProduct= (cid:number) => {
    return Axios.get('/products/'+cid+'/')
}

let updateProduct = (property:object) => {
    return Axios.put('/products/'+property.id+'/', property)
}

let createProduct = (property:object) => {
    return Axios.post('/products/', property)
}

let deleteProduct = (cid:number) => {
    return Axios.delete('/products/'+cid+'/')
}

export const productService = {
  getAllProducts,
  getProduct,
  getList,
  updateProduct,
  createProduct,
  deleteProduct,
}
