import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const GET_ALL_HOSTS = "GET_ALL_HOSTS";

export const UPDATE_HOST = "UPDATE_HOST";
export const UPDATE_HOST_SUCCESS = "UPDATE_HOST_SUCCESS";
export const UPDATE_HOST_FAILURE = "UPDATE_HOST_FAILURE";

export const getAllHosts = () => {
  return function(dispatch, getState) {
    let token = getState().auth.user.token;
    axios({
      method: "GET",
      url: API_DOMAIN + "/api/hosts/",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        charset: "utf-8"
      }
    })
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: GET_ALL_HOSTS,
            payload: res.data.data
          });
        } else {
          console.log(res);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateHost = updateHostData => (dispatch, getState) => {
  const token = getState().auth.user.token;
  dispatch({
    type: UPDATE_HOST
  });

  return fetch(`${API_DOMAIN}/api/hosts/${updateHostData._id}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateHostData)
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(data => {
      dispatch({
        type: UPDATE_HOST_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_HOST_FAILURE,
        payload: "Unable to update.  Please try again later."
      });
    });
};