/** Import des modules nécessaires */
import Axios from './caller.service'

let getTresorerie= (start_date:Date, end_date:Date) => {

    return Axios.get('/tresorerie/?start_date='+start_date+'&'+'end_date='+end_date)
}


export const tresorieService = {
    getTresorerie
}