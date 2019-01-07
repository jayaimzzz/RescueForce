export const DOG = "dog";
export const CAT = "cat";
export const EXOTIC = "exotic";
export const HOST = "host";
export const SHELTER = "shelter";

export const API_DOMAIN = "http://localhost:3000";

export const INITIAL_STATE = {
  auth: {
    auth_in_progress: false,
    user: {
      token: "",
      type: "",
      data: {}
    }
  }
};
