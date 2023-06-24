import router from '@/router'

export function authGuard(){
    let token = localStorage.getItem('access')
    let subscription = localStorage.getItem('subscription')
    if(token && subscription ){
        return true
    }

    router.push('/auth/login')
}
