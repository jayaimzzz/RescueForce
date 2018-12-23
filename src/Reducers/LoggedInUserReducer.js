import { loggedInUser } from '../dummyData';

const initState = loggedInUser

export const LoggedInUserReducer = (state = initState, action) => {
    switch(action.type){
        default: return state
    }
}