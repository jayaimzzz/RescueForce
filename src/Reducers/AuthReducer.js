import { INITIAL_STATE } from "../Constants";
import {
  LOGIN_STARTED,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT
} from "../ActionCreators";

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || INITIAL_STATE.auth;
};

export const AuthReducer = (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return { ...state, auth_in_progress: true, loginResult: "" };
    case LOGIN_SUCCESSFUL:
      return { user: action.payload, auth_in_progress: false, loginResult: "" };
    case LOGIN_UNSUCCESSFUL:
      return { ...state, auth_in_progress: false, loginResult: action.loginResult };
    case LOGOUT:
      return INITIAL_STATE.auth;
    default:
      return state;
  }
};
