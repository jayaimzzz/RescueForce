import { animals } from '../dummyData'

const initState = animals

export const AnimalsReducer = (state = initState, action) => {
    switch(action.type){
        default: return state
    }
}