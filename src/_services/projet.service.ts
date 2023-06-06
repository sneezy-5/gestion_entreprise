/** Import des modules nécessaires */
import Axios from './caller.service'

let getProjects= () => {

    return Axios.get('/projects/')
}


let getProject= (cid:number) => {
    return Axios.get('/projects/'+cid+'/')
}

let updateProject = (property:object) => {
    return Axios.put('/projects/'+property.id+'/', property)
}

let createProeject = (property:object) => {
    return Axios.post('/projects/', property)
}

let deleteProejct = (cid:number) => {
    return Axios.delete('/projects/'+cid)
}

export const projetService = {
    getProjects,
    getProject,
    updateProject,
    createProeject,
    deleteProejct,
}