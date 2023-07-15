/** Import des modules nécessaires */
import Axios from './caller.service'

let getDashboardByfiter= (start_date:string, end_date:string) => {

    return Axios.get('/dashboard/?start_date='+start_date+'&'+'end_date='+end_date)
}

let getSaleBymorth= (start_date:string, end_date:string) => {

  return Axios.get('/revenu_week/?start_date='+start_date+'&'+'end_date='+end_date)
}

let getSaleByYear= (start_date:string, end_date:string) => {

  return Axios.get('/revenu_morth/?start_date='+start_date+'&'+'end_date='+end_date)
}
export const dashboardService = {
    getDashboardByfiter,
    getSaleBymorth,
    getSaleByYear,
}
