import { INITIAL_STATE } from "../Constants";
import {
  LOGIN_STARTED,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT
} from "../ActionCreators";

INITIAL_STATE.auth.user.token = localStorage.getItem("token") || "";

export const AuthReducer = (state = INITIAL_STATE.auth, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return { ...state, auth_in_progress: true };
    case LOGIN_SUCCESSFUL:
      return { user: action.payload, auth_in_progress: false };
    case LOGIN_UNSUCCESSFUL:
      return { ...state, auth_in_progress: false };
    case LOGOUT:
      return {
        user: { ...INITIAL_STATE.auth.user, ...{ token: "" } },
        auth_in_progress: false
      };
    default:
      return state;
  }
};
