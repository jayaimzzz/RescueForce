import axios from "axios";
import { API_DOMAIN, HOST, SHELTER } from "../Constants";

export const UPDATE_HOST_IMAGE_STARTED = "update_host_image_started";
export const UPDATE_HOST_IMAGE_SUCCESS = "update_host_image_success";
export const UPDATE_HOST_IMAGE_FAILURE = "update_host_image_failure";
export const UPDATE_SHELTER_IMAGE_STARTED = "update_shelter_image_started";
export const UPDATE_SHELTER_IMAGE_SUCCESS = "update_shelter_image_success";
export const UPDATE_SHELTER_IMAGE_FAILURE = "update_shelter_image_failure";

export const uploadPhoto = (role, id, photo) => (dispatch, getState) => {
  let domain;
  const role = getState().auth.user.type;
  let actions;
  if (role === SHELTER) {
    domain = `${API_DOMAIN}/api/shelters/${id}/photos`;
    actions = {
      started: UPDATE_SHELTER_IMAGE_STARTED,
      success: UPDATE_SHELTER_IMAGE_SUCCESS,
      failure: UPDATE_SHELTER_IMAGE_FAILURE
    };
  } else if (role === HOST) {
    domain = `${API_DOMAIN}/api/hosts/${id}/photos`;
    actions = {
      started: UPDATE_HOST_IMAGE_STARTED,
      success: UPDATE_HOST_IMAGE_SUCCESS,
      failure: UPDATE_HOST_IMAGE_FAILURE
    };
  } else {
    return console.error("Photo update failed -- Invalid user role");
  }

  dispatch({
    type: actions.started
  });
  const formData = new FormData();
  formData.append("image", photo);
  const token = getState().auth.user.token;
  axios
    .put(domain, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: actions.success,
          payload: {
            id,
            data: res.data.data
          }
        });
      } else {
        console.log("image change action creator -- response != 200", res);
        dispatch({
          type: actions.failure
        });
      }
    })
    .catch(err => {
      console.error(err);
      dispatch({
        type: actions.failure
      });
    });
};
