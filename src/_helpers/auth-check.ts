import router from '@/router'

export function checkIfLogged(){
    

    let token = localStorage.getItem('access');

    if(token){
        return  router.push('/dashboard');
    }

   //router.push('/auth/login');
    return false;
}