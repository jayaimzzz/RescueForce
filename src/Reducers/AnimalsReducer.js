import { animals } from "../dummyData";
import { GET_ANIMALS_LIST } from "../ActionCreators/animalListActionCreators";

const initState = animals;

export const AnimalsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ANIMALS_LIST:
      return action.payload;
    default:
      return state;
  }
};
