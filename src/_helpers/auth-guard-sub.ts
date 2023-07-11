import router from '@/router'

export function authSubGuard(){
  const nowdate =  new Date().toISOString().substr(0, 10)
    let subscription = localStorage.getItem('subscription')
    if( !subscription){
      return false
    }
    if(subscription && subscription > nowdate  ){
        return true
    }

    router.push('/subscription')
}
