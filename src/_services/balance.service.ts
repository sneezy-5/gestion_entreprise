/** Import des modules nécessaires */
import Axios from './caller.service'

let getBalanceByfiter= (filter) => {

    return Axios.get('/balance/?'+filter)
}



export const balanceService = {
  getBalanceByfiter,
}
