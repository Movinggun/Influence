import  { GET_INFLUENCERS, GET_INFLUENCERS_ERROR, SET_LOADING, SET_INFLUENCERS_SEARCH_CONTENT, CLEAR_INFLUENCERS_FILTER, FILTER_INFLUENCERS, SET_INFLUENCERS_CHECK_FILTERS }  from '../actions/types';

const initialState = {
    loading: false,
    influencers: null,
    searchTextContent: '',
    filters: {
        Twitch: false,
        Twitter: false,
        Instagram: false,
        YouTube: false,
        Snapchat: false,
        Tiktok: false,
        Verified: false,
        Rating: 1
    },
    filteredInfluencers: null,
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
        case SET_INFLUENCERS_SEARCH_CONTENT:
            return {
                ...state,
                searchTextContent: action.payload
            }   
        case CLEAR_INFLUENCERS_FILTER:
            return {
                ...state,
                searchTextContent: '',
                filteredInfluencers: null,
                filters: {
                    Twitch: false,
                    Twitter: false,
                    Instagram: false,
                    YouTube: false,
                    Snapchat: false,
                    Tiktok: false,
                    Verified: false,
                    Rating: 1
                }
            }
        case FILTER_INFLUENCERS:
            return {
                ...state,
                filteredInfluencers: state.influencers.filter(i => {
                    const regex = new RegExp(`${state.searchTextContent}`, 'gi');
                    return i.user_info[0].display_name.match(regex) && 
                    (state.filters.Twitch ? i.social_media.includes("Twitch") : i.user_info[0].display_name.match(regex) )  && 
                    (state.filters.Twitter ? i.social_media.includes("Twitter"): i.user_info[0].display_name.match(regex)) &&
                    (state.filters.Instagram ? i.social_media.includes("Instagram"): i.user_info[0].display_name.match(regex)) &&
                    (state.filters.YouTube ? i.social_media.includes("Youtube"): i.user_info[0].display_name.match(regex)) &&
                    (state.filters.Snapchat ? i.social_media.includes("Snapchat"): i.user_info[0].display_name.match(regex)) &&
                    (state.filters.Tiktok ? i.social_media.includes("Tiktok"): i.user_info[0].display_name.match(regex)) &&
                    (state.filters.Verified ? i.verified: i.user_info[0].display_name.match(regex)) &&
                    (state.filters.Rating <= i.rating) 

                })
            }    
        case SET_INFLUENCERS_CHECK_FILTERS:
            return {
                ...state,
                filters: action.payload
            }          
        default:
            return state;
    }
}