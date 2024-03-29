/** Import des modules nécessaires */

import Axiosss from './caller-other-service '
import Axios from './caller.service'

let login = (credentials) => {
    return Axiosss.post('auth/login', credentials)
}

let logout = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('role')
    localStorage.removeItem('database')
    localStorage.removeItem('subscription')
    localStorage.removeItem('groups')
}

let getToken = () => {
    return localStorage.getItem('access')
}

let getRole = () => {
    return localStorage.getItem('role')
}

let getGroups = () => {
  return localStorage.getItem('groups')
}
let getDatabase = () => {
  return localStorage.getItem('database')
}
let getSubscription = () => {
  return localStorage.getItem('subscription')
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
    getSubscription,
    getRole,
    getGroups,
    isLogged
}
