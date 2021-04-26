import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import searchReducer from './searchReducer';
import influencerReducer from './influencerReducer';


export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    search: searchReducer,
    influencer: influencerReducer
});