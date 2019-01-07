import { GET_ALL_HOSTS } from '../ActionCreators'

const initState = [];

export const HostsReducer = (state = initState, action) => {
    switch(action.type){
        case GET_ALL_HOSTS:
          return action.payload;
        default: return state;
    }
};
