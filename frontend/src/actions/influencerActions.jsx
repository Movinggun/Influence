import axios from 'axios'
import SetAuthToken from '../utils/setAuthToken';
import  { GET_INFLUENCERS, SET_LOADING, GET_INFLUENCERS_ERROR, SET_INFLUENCERS_SEARCH_CONTENT, CLEAR_INFLUENCERS_FILTER, FILTER_INFLUENCERS, SET_INFLUENCERS_CHECK_FILTERS }  from './types';

// Load User
export const loadInfluencers = () => async dispatch => {
    setLoading();
    try {
        const res = await axios.get('/api/influencers');     
        dispatch({type: GET_INFLUENCERS, payload: res.data});
    } catch (err) {
        dispatch({
            type: GET_INFLUENCERS_ERROR,
            payload: err.response
        })   
    }
}

// Set Influencer Search Box
export const setSearchTextBox = (text) => {
    return {
        type: SET_INFLUENCERS_SEARCH_CONTENT,
        payload: text
    }
}

// Set Influencer Search Box
export const setCheckboxFilters = (filters) => {
    return {
        type: SET_INFLUENCERS_CHECK_FILTERS,
        payload: filters
    }
}


//Filter Influencers 
export const filterInfluencers = () => {
    return {
        type: FILTER_INFLUENCERS
    }
}





// Set Loading To True
export const setLoading  = () => {
    return {
        type: SET_LOADING
    }
}


// Clear Filter
export const clearFilters  = () => {
    return {
        type: CLEAR_INFLUENCERS_FILTER
    }
}