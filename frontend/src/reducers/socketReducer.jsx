import  { SET_USER_SOCKET, REGISTER_SOCKET_EVENTS }  from '../actions/types';

const initialState = {
    socket: null,
    registeredEvents: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_SOCKET:
            return {
                ...state,
                socket: action.payload
            }
        case REGISTER_SOCKET_EVENTS:
            return {
                ...state,
                registeredEvents: action.payload
            }    
        default:
            return state;
    }
}