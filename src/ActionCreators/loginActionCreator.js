import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const LOGIN = "login";

export const login = loginData => {
  const { email, password } = loginData;
  return function(dispatch) {
    axios
      .post(API_DOMAIN + "/signin", {
        email,
        password
      })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          dispatch({ type: LOGIN, payload: response.data });
        }
      })
      .catch(err => console.error(err));
  };
};
