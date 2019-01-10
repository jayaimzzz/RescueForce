import axios from "axios";
import { push } from "connected-react-router";
import { API_DOMAIN } from "../Constants";

export const GET_ANIMALS_LIST = "get_animals_list";
export const UPDATE_ANIMAL_PHOTOS = "update_animal_photos";
// export const UPDATE_ANIMAL = "update_animal";

// update animal actions
export const UPDATE_ANIMAL = "UPDATE_ANIMAL";
export const UPDATE_ANIMAL_SUCCESS = "UPDATE_ANIMAL_SUCCESS";
export const UPDATE_ANIMAL_FAILURE = "UPDATE_USER_FAILURE";

// ADD animal actions
export const ADD_ANIMAL_STARTED = "add_animal_started";
export const ADD_ANIMAL_SUCCESS = "add_animal_success";
export const ADD_ANIMAL_FAILURE = "add_animal_failure";

export const getAnimals = filter => (dispatch, getState) => {
  const token = getState().auth.user.token;
  const filterString = JSON.stringify(filter);
  return axios
    .get(API_DOMAIN + "/api/animals", {
      headers: {
        Authorization: "Bearer " + token
      },
      params: {
        filter: filterString
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: GET_ANIMALS_LIST,
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

export const updateAnimalPhotos = (animalId, photos) => (
  dispatch,
  getState
) => {
  axios
    .patch(
      `${API_DOMAIN}/api/animals/${animalId}`,
      { photos },
      { headers: { Authorization: `Bearer ${getState().auth.user.token}` } }
    )
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: UPDATE_ANIMAL_PHOTOS,
          payload: {
            id: animalId,
            data: res.data.data
          }
        });
      }
    })
    .catch(err => console.err(err));
};

export const uploadAnimalPhotos = (animalId, photos) => (
  dispatch,
  getState
) => {
  const formData = new FormData();
  for (let photo of photos) {
    formData.append("images", photo);
  }

  axios
    .patch(`${API_DOMAIN}/api/animals/${animalId}/photos`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + getState().auth.user.token
      }
    })
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: UPDATE_ANIMAL_PHOTOS,
          payload: {
            id: animalId,
            data: res.data.data
          }
        });
      }
    })
    .catch(err => console.error(err));
};

export const updateAnimal = updateAnimalData => (dispatch, getState) => {
  const token = getState().auth.user.token;
  dispatch({
    type: UPDATE_ANIMAL,
    payload: {}
  });

  return fetch(`${API_DOMAIN}/api/animals/${updateAnimalData.id}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateAnimalData)
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
        type: UPDATE_ANIMAL_SUCCESS,
        payload: data
      })
    })
    .catch(err => {
      dispatch({
        type: UPDATE_ANIMAL_FAILURE,
        updateResult: "sorry, no can do."
      });
    });
};

export const addAnimal = addAnimalData => (dispatch, getState) => {
  const token = getState().auth.user.token;
  axios
    .post(API_DOMAIN + "/api/animals", addAnimalData, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (res.status === 201) {
        dispatch({
          type: ADD_ANIMAL_SUCCESS,
          payload: res.data.data
        });
      }
    })
    .catch(err => console.error(err));
};
