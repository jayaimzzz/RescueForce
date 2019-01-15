import {
  GET_SHELTER_BY_ID,
  GET_ALL_SHELTERS,
  UPDATE_SHELTER_SUCCESS,
  UPDATE_SHELTER_IMAGE_STARTED,
  UPDATE_SHELTER_IMAGE_SUCCESS,
  UPDATE_SHELTER_IMAGE_FAILURE
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
    case UPDATE_SHELTER_IMAGE_STARTED:
      return state;
    case UPDATE_SHELTER_IMAGE_FAILURE:
      return state;
    case UPDATE_SHELTER_IMAGE_SUCCESS:
      const { id, data } = action.payload;
      return state.map(shelter => (shelter._id === id ? data : shelter));
    default:
      return state;
  }
};
