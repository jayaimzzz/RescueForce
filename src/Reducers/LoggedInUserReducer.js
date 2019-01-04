// import { loggedInUser } from '../dummyData';
import { INITIAL_STATE } from '../Constants';
import { LOGIN } from '../ActionCreators';

// const initState = loggedInUser


export const LoggedInUserReducer = (state = INITIAL_STATE.user, action) => {
    console.log(action.payload)
    switch(action.type){
        case LOGIN: 
            return action.payload
        default: return state
    }
}