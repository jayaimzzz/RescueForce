import {
  GET_ALL_HOSTS,
  UPDATE_HOST,
  UPDATE_HOST_SUCCESS,
  UPDATE_HOST_FAILURE,
  REGISTER_HOST_STARTED,
  REGISTER_HOST_SUCCESS,
  REGISTER_HOST_FAILURE,
  UPDATE_HOST_IMAGE_STARTED,
  UPDATE_HOST_IMAGE_SUCCESS,
  UPDATE_HOST_IMAGE_FAILURE,
  GET_HOST_SUCCESS
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
    case UPDATE_HOST_IMAGE_STARTED:
      return state;
    case UPDATE_HOST_IMAGE_FAILURE:
      return state;
    case UPDATE_HOST_IMAGE_SUCCESS: {
      const { id, data } = action.payload;
      const index = state.indexOf(host => host._id === id);
      if (index < 1) {
        return [...state, data];
      } else {
        return state.map(host => (host._id === id ? data : host));
      }
    }
    case GET_HOST_SUCCESS: {
      const copiedState = [...state];
      const index = copiedState.findIndex(
        host => host._id === action.payload._id
      );
      if (index < 0) {
        copiedState.push(action.payload);
      } else {
        copiedState[index] = action.payload;
      }
      return copiedState;
    }
    default:
      return state;
  }
};
