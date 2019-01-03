import axios from "axios";
import { API_DOMAIN  } from "../Constants";

export const GET_SHELTER_BY_ID = "GET_SHELTER_BY_ID"

export const getShelterById = shelterId => {
    return function(dispatch) {
        axios
            .get(API_DOMAIN + "/shelters/" + shelterId)
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