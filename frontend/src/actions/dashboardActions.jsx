
import  { SET_SUB_PAGE }  from './types';



// Set Dashboard Sub Page
export const setDashboardSubPage = (page) => {
    return {
        type: SET_SUB_PAGE,
        payload: page
    }
}
