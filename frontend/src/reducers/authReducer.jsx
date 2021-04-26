import  { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS, SET_LOADING, SET_LOGIN_MODAL, SET_SIGNUP_MODAL} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    setLoginModal: false,
    setSignupModal: false,
    user: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
               ...state,
               loading: false 
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case SET_SIGNUP_MODAL:
            return {
                ...state,
                setSignupModal: !state.setSignupModal
            }     
        case SET_LOGIN_MODAL:
            return {
                ...state,
                setLoginModal: !state.setLoginModal
            }   
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            console.error(action.payload);
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            } 
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            } 
        default:
            return state;
    }
}