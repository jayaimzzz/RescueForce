import axios from "axios";
import { push } from "connected-react-router";
import { API_DOMAIN, HOST, SHELTER } from "../Constants";

export const LOGIN_SUCCESSFUL = "login_successful";
export const LOGIN_STARTED = "login_started";
export const LOGIN_UNSUCCESSFUL = "login_unsuccessful";
export const LOGOUT = "logout";

export const login = loginData => {
  const { email, password } = loginData;
  return function(dispatch) {
    dispatch({ type: LOGIN_STARTED });
    axios
      .post(API_DOMAIN + "/signin", {
        email,
        password
      })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          dispatch({ type: LOGIN_SUCCESSFUL, payload: response.data });
          if (response.data.type === HOST) {
            dispatch(push(`/host/${response.data.data._id}`));
          } else if (response.data.type === SHELTER) {
            dispatch(push("/admin"));
          }
        } else {
          dispatch({ type: LOGIN_UNSUCCESSFUL });
        }
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: LOGIN_UNSUCCESSFUL });
      });
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem("auth");
  dispatch(push("/"));
  dispatch({ type: LOGOUT });
};
