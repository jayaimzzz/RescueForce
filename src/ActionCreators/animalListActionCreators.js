import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const GET_ANIMALS_LIST = "get_animals_list";

export const getAnimals = filter => (dispatch, getState) => {
  const token = getState().loggedInUser.token;
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
        console.log("res.status 200 => ", res.data);
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
