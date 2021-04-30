import  { SET_SUB_PAGE  }  from '../actions/types';

const initialState = {
    currentSubPage: 0
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_SUB_PAGE:
            return {
                ...state,
                currentSubPage: action.payload
            }
        default:
            return state;
    }
}