import  { TERM_ADDED , TERM_FAIL, TERM_GET, SET_LOADING, SET_TERM_TEXT }  from '../actions/types';

const initialState = {
    searchText: '',
    loading: false,
    terms: null,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case TERM_GET:
            return {
                ...state,
                terms: action.payload,
                loading: false
            }
        case TERM_ADDED:
            return {
                ...state,
                error: action.payload
            }
        case TERM_FAIL:
            console.error(action.payload);
            return {
                ...state,
                terms: null,
                loading: false,
                error: action.payload
            };
        case SET_TERM_TEXT:
            return {
                ...state,
                searchText: action.payload
            }    
        default:
            return state;
    }
}