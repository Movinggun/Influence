import axios from 'axios'
import SetAuthToken from '../utils/setAuthToken';
import  { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS, SET_LOADING, SET_LOGIN_MODAL, SET_SIGNUP_MODAL} from './types';


// Load User
export const loadUser = () => async dispatch => {
    setLoading();
    if(localStorage.token) {
        SetAuthToken(localStorage.token)
    }
    console.log("JWT TOKEN: " + localStorage.token)
    try {
        const res = await axios.get('/api/auth');     
        dispatch({type: USER_LOADED, payload: res.data});
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
            payload: err.response.data
        })   
    }
}

// Login User
export const login = (formData) => async dispatch => {
    setLoading();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/auth', formData, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        loadUser()
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        }); 
    }
}

    // Register User
export const register = (formData) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/auth/register', formData, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        loadUser()
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response.data.msg
        }); 
    }
}


// Sets the Modal Statew
export const setLoginModal = () => {
    return {
        type: SET_LOGIN_MODAL
    }
}


// Sets the Modal Statew
export const setSignupModal = () => {
    return {
        type: SET_SIGNUP_MODAL
    }
}

// Set Loading To True
export const setLoading  = () => {
    return {
        type: SET_LOADING
    }
}

// Logout
export const logout = () =>  {
    return {
        type: LOGOUT
    }
}
// Clear Errors
export const clearErrors = () =>{
    return {
        type: CLEAR_ERRORS
    }
}
