export const DOG = "dog";
export const CAT = "cat";
export const EXOTIC = "exotic";
export const HOST = "host";
export const SHELTER = "shelter";
export const ADOPTABLE = "adoptable";
export const FOSTER_ONLY = "foster-only";
export const NEED_FOSTER = "need-foster";

export const API_DOMAIN = "http://localhost:3000";

export const INITIAL_STATE = {
  auth: {
    auth_in_progress: false,
    loginResult: "",
    user: {
      token: "",
      type: "",
      data: {}
    }
  },
  inProgress: {
    registration: false,
    hostProfileUpdate: false,
    animalProfileUpdate: false,
    shelterProfileUpdate: false,
    addAnimal: false,
    changeHostPhoto: false,
    changeShelterPhoto: false,
    addAnimalPhotos: false
  }
};
