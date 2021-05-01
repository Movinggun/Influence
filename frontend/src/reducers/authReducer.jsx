import  { DELETE_ERROR, DELETE_NOTIFICATION, SET_NOTIFICATION_READ, SAVE_BRANCH, SET_ACCOUNT_BRANCH, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS, SET_LOADING, SET_LOGIN_MODAL, SET_SIGNUP_MODAL, SET_BRANCH_MODAL, GET_AVATAR} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    setLoginModal: false,
    setSignupModal: false,
    branchModalState: false,
    selectedAccountBranch: 'influencer',
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
        case SAVE_BRANCH:
            return {
                ...state,
                branchModalState: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case SET_NOTIFICATION_READ:
            return {
                ...state,
                user: {
                    ...state.user,
                    notifications: state.user.notifications.map(notif => notif._id === action.payload.id ? action.payload : notif)
                },
                loading: false
            }  
        case DELETE_NOTIFICATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    notifications: state.user.notifications.filter(notif => notif._id !== action.payload)
                },
                loading: false
            }      
        case SET_SIGNUP_MODAL:
            return {
                ...state,
                setSignupModal: !state.setSignupModal
            }     
        case SET_BRANCH_MODAL:
            return {
                ...state,
                branchModalState: action.payload
            }   
        case SET_LOGIN_MODAL:
            return {
                ...state,
                setLoginModal: !state.setLoginModal
            }  
        case SET_ACCOUNT_BRANCH:
            return {
                ...state,
                selectedAccountBranch: action.payload
            }
        case DELETE_ERROR:
            return {
                ...state,
                error: action.payload
            }            
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
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