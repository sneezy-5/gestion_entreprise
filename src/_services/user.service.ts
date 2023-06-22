/** Import des modules nécessaires */
import Axios from './caller.service'

const headers = { 'Content-Type': 'multipart/form-data' };


let getAllUsers = (filter?) => {
    return Axios.get('/users/?'+filter)
}
let getList = () => {
    return Axios.get('/account-list')
}

let getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

let getProfile = () => {
    return Axios.get('/account/profile/')
}

let getParameter = () => {
    return Axios.get('/parameter/')
}
let updateUserProfile = (user) => {
    return Axios.put('/profile/'+user.id+'/', user,{ headers })
}

let updateUser = (user) => {
    return Axios.put('/user/'+user.id+'/', user)
}
let updateParameter = (user) => {
    return Axios.put('/parameter/'+user.id+'/', user,{headers})
}

let changePasswordUser = (user,id) => {
    return Axios.put('/change-password/'+id, user)
}

let changeProfilePasswordUser = (user) => {
    return Axios.put('/profile-password-change/'+user.id+'/', user)
}

let createUser = (user) => {
    return Axios.post('/register/', user)
}

let deleteUser = (uid) => {
    return Axios.delete('/users/'+uid)
}

export const userService = {
    getAllUsers,
    getList ,
    getUser,
    getProfile,
    getParameter,
    updateParameter,
    changePasswordUser,
    changeProfilePasswordUser,
    updateUserProfile ,
    updateUser,
    createUser,
    deleteUser,
}
