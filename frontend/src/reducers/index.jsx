import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import searchReducer from './searchReducer';
import influencerReducer from './influencerReducer';
import dashboardReducer from './dashboardReducer';


export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    search: searchReducer,
    influencer: influencerReducer,
    dashboard: dashboardReducer 
});