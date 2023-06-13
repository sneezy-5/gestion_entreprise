/** Import des modules nécessaires */
import Axios from './caller.service'

let getGrandlivreByfiter= (filter) => {

    return Axios.get('/grand-livre/?'+filter)
}



export const grandlivreService = {
  getGrandlivreByfiter,
}
