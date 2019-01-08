import {
  GET_ANIMALS_LIST,
  UPDATE_ANIMAL
} from "../ActionCreators/animalListActionCreators";

const initState = [];

export const AnimalsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ANIMALS_LIST:
      return action.payload;
    case UPDATE_ANIMAL:
      const { id, data } = action.payload;
      return state.map(animal => (animal._id === id ? data : animal));
    default:
      return state;
  }
};
