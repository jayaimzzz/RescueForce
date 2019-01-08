import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const GET_ANIMALS_LIST = "get_animals_list";
export const UPDATE_ANIMAL_PHOTOS = "update_animal_photos";
export const UPDATE_ANIMAL = "update_animal";

export const getAnimals = filter => (dispatch, getState) => {
  const token = getState().auth.user.token;
  const filterString = JSON.stringify(filter);
  axios
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
          type: UPDATE_ANIMAL,
          payload: {
            id: animalId,
            data: res.data.data
          }
        });
      }
    })
    .catch(err => console.log(err));
};
