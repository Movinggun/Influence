import  { GET_INFLUENCERS, GET_INFLUENCERS_ERROR, SET_LOADING }  from '../actions/types';

const initialState = {
    loading: false,
    influencers: null,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
            ...state,
            loading: true 
            }
        case GET_INFLUENCERS:
            return {
                ...state,
                influencers: action.payload,
                loading: false
            } 
        case GET_INFLUENCERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}