/** Import des modules nécessaires */
import Axios from './caller.service'

let getProjects= (filter?) => {

    return Axios.get('/projects/?'+filter)
}

let getProjetList= () => {

    return Axios.get('/projet-list/')
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
    getProjetList,
    getProject,
    updateProject,
    createProeject,
    deleteProejct,
}
