import {
  GET_ANIMALS_LIST,
  UPDATE_ANIMAL,
  UPDATE_ANIMAL_FAILURE,
  UPDATE_ANIMAL_SUCCESS,
  UPDATE_ANIMAL_PHOTOS,
  ADD_ANIMAL,
  ADD_ANIMAL_FAILURE,
  ADD_ANIMAL_SUCCESS
} from "../ActionCreators";
const initState = [];

export const AnimalsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ANIMALS_LIST:
      return action.payload;

    case UPDATE_ANIMAL_SUCCESS:
      return [...state, action.payload]

    case UPDATE_ANIMAL_FAILURE:
      return state;

    case UPDATE_ANIMAL_PHOTOS:
      const { id, data } = action.payload;
      return state.map(animal => (animal._id === id ? data : animal));

    default:
      return state;
  }
};
