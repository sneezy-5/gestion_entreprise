/** Import des modules nécessaires */
import axios from 'axios'
import { accountService } from '@/_services'
import router from '@/router'
//import store from '@/stores'

const Axios = axios.create({
    baseURL:  'http://127.0.0.1:8000/api/v0/'
})



/**
 * Interceptor pour injection token
 */
Axios.interceptors.request.use(request => {
    
    // Si connecté on ajoute le token dans l'entête
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+ accountService.getToken()
        request.headers['database'] = accountService.getDatabase();
    }
  
    return request
})


/**
 * Interceptor des réponses de l'API
 */
Axios.interceptors.response.use(response => {
    return response
}, error => {

   
    console.log(error)
    

    if(!error.response){
        // Erreur rzo
      //  store.commit('displayNotif', {d: true, mes: error})
        return Promise.reject(error)
    }else{
        if(error.response.status == 401){
            accountService.logout()
            router.push('/auth/login')
        }else{
            // Erreur de l'API
           // store.commit('displayNotif', {d: true, mes: error.response.data.message})
            return Promise.reject(error)
        }
    }
})

export default Axios
