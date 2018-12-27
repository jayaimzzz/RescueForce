import { shelters } from '../dummyData';
import { GET_SHELTER_BY_ID } from '../ActionCreators'

const initState = [];

export const SheltersReducer = (state = initState, action) => {
    console.log(action.payload)
    switch(action.type){
        case GET_SHELTER_BY_ID:
        state = state.slice()
        return state.push(action.payload)
        default: return state
    }
}