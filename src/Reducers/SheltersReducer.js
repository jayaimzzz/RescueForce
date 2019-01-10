import {
  GET_SHELTER_BY_ID,
  GET_ALL_SHELTERS,
  UPDATE_SHELTER_SUCCESS
} from "../ActionCreators";

const initState = [];

export const SheltersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SHELTER_BY_ID:
      return action.payload;
    case GET_ALL_SHELTERS:
      return action.payload;
    case UPDATE_SHELTER_SUCCESS:
      return state.map(shelter =>
        shelter._id === action.payload._id ? action.payload : shelter
      );
    default:
      return state;
  }
};
