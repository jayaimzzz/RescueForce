import axios from "axios";
import { API_DOMAIN } from "../Constants";

export const GET_ALL_HOSTS = "GET_ALL_HOSTS";

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

// export const updateHosts = () => {
//   return function(dispatch, getState) {
//     let token = getState().auth.user.token;
//     axios({
//       method: "PATCH",
//       url: API_DOMAIN + "/api/hosts/",
//       headers: {
//         Authorization: "Bearer " + token,
//         "Content-Type": "application/json",
//         charset: "utf-8"
//       }
//     })
//       .then(res => {
//         if (res.status === 200) {
//           dispatch({
//             type: UPDATE_HOSTS,
//             payload: res.data.data
//           });
//         } else {
//           console.log(res);
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };

