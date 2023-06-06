/** Import des modules nécessaires */
import Axios from './caller.service'

const headers = { 'Content-Type': 'multipart/form-data' };


let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (uid) => {
    return Axios.get('/users/'+uid)
}

let getProfile = () => {
    return Axios.get('/account/profile/')
}

let updateUserProfile = (user) => {
    return Axios.put('/profile/'+user.id+'/', user,{ headers })
}

let updateUser = (user) => {
    return Axios.put('/user/'+user.id+'/', user)
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
    getUser,
    getProfile,
    changePasswordUser,
    changeProfilePasswordUser,
    updateUserProfile ,
    updateUser,
    createUser,
    deleteUser,
}