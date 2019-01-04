import { INITIAL_STATE } from '../Constants';
import { LOGIN } from '../ActionCreators';

export const LoggedInUserReducer = (state = INITIAL_STATE.user, action) => {
    switch(action.type){
        case LOGIN: 
            return action.payload
        default: return state
    }
}