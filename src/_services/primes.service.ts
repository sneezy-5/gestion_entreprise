/** Import des modules nécessaires */
import Axios from './caller.service'

let getPrimes= () => {

    return Axios.get('/primes/')
}


let getPrime= (cid:number) => {
    return Axios.get('/primes/'+cid+'/')
}

let updatePrime = (property:object) => {
    return Axios.put('/primes/'+property.id+'/', property)
}

let createPrime = (property:object) => {
    return Axios.post('/primes/', property)
}

let deletePrime= (cid:number) => {
    return Axios.delete('/primes/'+cid)
}

export const primeService = {
    getPrimes,
    getPrime,
    updatePrime,
    createPrime,
    deletePrime,
}