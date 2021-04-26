import axios from 'axios'
import SetAuthToken from '../utils/setAuthToken';
import  { GET_INFLUENCERS, SET_LOADING, GET_INFLUENCERS_ERROR }  from './types';

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

// Set Loading To True
export const setLoading  = () => {
    return {
        type: SET_LOADING
    }
}