import { shelters } from '../dummyData';
import { GET_SHELTER_BY_ID } from '../ActionCreators'

const initState = [
    // {
    //     photos: []
    // }
];

export const SheltersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_SHELTER_BY_ID:
        return action.payload
        default: return state
    }
}