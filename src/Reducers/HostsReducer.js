import {
  GET_ALL_HOSTS,
  UPDATE_HOST,
  UPDATE_HOST_SUCCESS,
  UPDATE_HOST_FAILURE,
  UPDATE_HOST_IMAGE_STARTED,
  UPDATE_HOST_IMAGE_SUCCESS,
  UPDATE_HOST_IMAGE_FAILURE
} from "../ActionCreators";

const initState = [];

export const HostsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_HOSTS:
      return action.payload;
    case UPDATE_HOST:
      return state;
    case UPDATE_HOST_SUCCESS:
      return state.map(host =>
        host._id === action.payload.data._id ? action.payload.data : host
      );
    case UPDATE_HOST_FAILURE:
      return state;
    case UPDATE_HOST_IMAGE_STARTED:
      return state;
    case UPDATE_HOST_IMAGE_FAILURE:
      return state;
    case UPDATE_HOST_IMAGE_SUCCESS:
      const { id, data } = action.payload;
      const index = state.indexOf(host => host._id === id);
      if (index < 1) {
        return [...state, data]
      } else {
        return state.map(host => (host._id === id ? data : host));
      }
    default:
      return state;
  }
};
