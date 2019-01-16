import {
  GET_ALL_HOSTS,
  UPDATE_HOST,
  UPDATE_HOST_SUCCESS,
  UPDATE_HOST_FAILURE,
  REGISTER_HOST_STARTED,
  REGISTER_HOST_SUCCESS,
  REGISTER_HOST_FAILURE
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
    case REGISTER_HOST_STARTED:
    case REGISTER_HOST_SUCCESS:
    case REGISTER_HOST_FAILURE:
      return state;
    default:
      return state;
  }
};
