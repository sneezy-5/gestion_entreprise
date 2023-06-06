import router from '@/router'

export function authGuard(){
    let token = localStorage.getItem('access')

    if(token){
        return true
    }

    router.push('/auth/login')
}