import axios from 'axios'
import  { TERM_ADDED , TERM_FAIL, TERM_GET, SET_LOADING, SET_TERM_TEXT }  from './types';

// Get Terms
export const getTerms = () => async dispatch => {
    setLoading();
    try {
        const res = await axios.get('/api/query/landing');     
        dispatch({type: TERM_GET, payload: res.data});
    } catch (err) {
        dispatch({
            type: TERM_FAIL,
            payload: err.response
        })   
    }
}

// Add Term
export const addTerm = (term) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/query/landing', term, config);
        dispatch({
            type: TERM_ADDED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TERM_FAIL,
            payload: err.response
        }); 
    }
}


// Set Search Text
export const setSearchText  = (term) => {
    return {
        type: SET_TERM_TEXT,
        payload: term
    }
}


// Set Loading To True
export const setLoading  = () => {
    return {
        type: SET_LOADING
    }
}