import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const GET_ANIMALS_LIST = "get_animals_list";
// update animal actions
export const UPDATE_ANIMAL = "UPDATE_USER";
export const UPDATE_ANIMAL_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_ANIMAL_FAILURE = "UPDATE_USER_FAILURE";

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

export const updateAnimal = updateAnimalData => (dispatch, getState) => {
  const token = getState().auth.user.token;

    dispatch({
      type: UPDATE_ANIMAL
    });
  
    fetch(`${API_DOMAIN}/animals`, {
    //  should thie be fetch(`${API_DOMAIN}/api/animals`, { instead?  See James' reference in axios above.
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
        // dispatch here on success -- data is everything server sent back in its response
        dispatch({
          type: UPDATE_ANIMAL_SUCCESS,
          animalData: data
          // 'animalData' is the name we're going to call it in the redux state?
        });
      })
      .catch(err => {
        // dispatch here on fail --
        dispatch({
          type: UPDATE_ANIMAL_FAILURE,
          updateResult: "sorry, no can do."
        });
      });
  };