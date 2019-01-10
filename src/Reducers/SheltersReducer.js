import { GET_SHELTER_BY_ID, GET_ALL_SHELTERS } from '../ActionCreators'

const initState = [];

export const SheltersReducer = (state = initState, action) => {
    switch(action.type){
        case GET_SHELTER_BY_ID:
        return action.payload
        case GET_ALL_SHELTERS:
        return action.payload
        default: return state
    }
}