import axios from "axios";
import { API_DOMAIN  } from "../Constants";

export const GET_SHELTER_BY_ID = "GET_SHELTER_BY_ID"
export const GET_ALL_SHELTERS = "GET_ALL_SHELTERS"

export const getShelterById = shelterId => {
    return function(dispatch) {
        axios
            .get(API_DOMAIN + "/api/shelters/" + shelterId)
            .then(res =>  {
                if (res.status === 200) {
                    dispatch({
                        type: GET_SHELTER_BY_ID,
                        payload: res.data.data
                    })
                } else {
                    console.log(res);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const getAllShelters = () => {
    return function(dispatch) {
        axios
            .get(API_DOMAIN + "/api/shelters/")
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: GET_ALL_SHELTERS,
                        payload: res.data.data
                    })
                } else {
                    console.log(res)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
}