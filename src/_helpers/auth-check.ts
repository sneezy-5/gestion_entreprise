import router from '@/router'

export function checkIfLogged(){
    

    let token = localStorage.getItem('access');
    const nowdate =  new Date().toISOString().substr(0, 10)
    let subscription = localStorage.getItem('subscription')
    if(token && subscription<nowdate){
        return  router.push('/dashboard');
    }

   //router.push('/auth/login');
    return false;
}
