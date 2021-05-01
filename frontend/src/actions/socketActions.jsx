
import  { SET_USER_SOCKET, REGISTER_SOCKET_EVENTS }  from './types';



// Set Client Socket
export const setSocket = (socket) => {

    
    return {
        type: SET_USER_SOCKET,
        payload: socket
    }
}

// Set RegisteredEventss
export const setEventsRegistered = (done) => async dispatch => {
    dispatch({
        type: REGISTER_SOCKET_EVENTS,
        payload: done
    });
}
