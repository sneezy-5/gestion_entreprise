/** Import des modules nécessaires */

import Axiosss from './caller-other-service '
import Axios from './caller.service'

let login = (credentials) => {
    return Axios.post('auth/login', credentials)
}

let logout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('role')
}

let getToken = () => {
    return localStorage.getItem('access')
}

let getDatabase = () => {
    return localStorage.getItem('role')
}
let saveToken = (name,token) => {
    localStorage.setItem(name, token)
}

let isLogged = () => {
    let token = localStorage.getItem('access')
    return !!token
}


export const accountService = {
    login,
    logout,
    saveToken,
    getToken,
    getDatabase,
    isLogged
}