/** Import des modules nécessaires */
import axios from 'axios'
import { accountService } from '@/_services'
import router from '@/router'
//import store from '@/stores'


const Axiosss = axios.create({
    baseURL:  'http://3.83.16.194:8000/api/v1/'
})


Axiosss.interceptors.request.use(request => {
    
    // Si connecté on ajoute le token dans l'entête
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+ accountService.getToken()
        request.headers['database'] = accountService.getDatabase();
    }

    /**
 * Interceptor des réponses de l'API
 */
Axiosss.interceptors.response.use(response => {
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
  
    return request
})







export default Axiosss
