import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const GET_SHELTER_BY_ID = "GET_SHELTER_BY_ID";
export const GET_ALL_SHELTERS = "GET_ALL_SHELTERS";
export const UPDATE_SHELTER_STARTED = "update_shelter_started";
export const UPDATE_SHELTER_SUCCESS = "update_shelter_success";
export const UPDATE_SHELTER_FAILURE = "update_shelter_failure";

export const getShelterById = shelterId => {
  return function(dispatch) {
    axios
      .get(API_DOMAIN + "/api/shelters/" + shelterId)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: GET_SHELTER_BY_ID,
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

export const getAllShelters = () => {
  return function(dispatch) {
    axios
      .get(API_DOMAIN + "/api/shelters/")
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: GET_ALL_SHELTERS,
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

export const updateShelter = shelterInfo => (dispatch, getState) => {
  dispatch({
    type: UPDATE_SHELTER_STARTED
  });
  const token = getState().auth.user.token;
  axios.patch(`${API_DOMAIN}/api/shelters/${shelterInfo._id}`, shelterInfo, {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.status === 200) {
      dispatch({
        type: UPDATE_SHELTER_SUCCESS,
        payload: res.body.body
      });
    } else {
      console.log('error updating shelter');
      console.log(res.body);
      dispatch({
        type: UPDATE_SHELTER_FAILURE
      });
    }
  }).catch(err => {
    console.error(err);
    dispatch({
      type: UPDATE_SHELTER_FAILURE
    });
  }).then(() => dispatch(getAllShelters()));
};
