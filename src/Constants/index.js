export const DOG = "dog";
export const CAT = "cat";
export const EXOTIC = "exotic";
export const HOST = "host";
export const SHELTER = "shelter";
export const ADOPTABLE = "adoptable";
export const FOSTER_ONLY = "foster-only";
export const NEED_FOSTER = "need-foster";

// export const colors = {
//   a:"#3D6B85",
//   b:"#344A4E",
//   c:"pink",
//   button:"#3D6B85",
//   backgroundA:"#CFE0BB", //Medium
//   backgroundB:"#B0ACAC", //Darkest
//   backgroundC:"FDFCF9", //Lightest
//   textA:"#4A2E37", //dark
//   textB:"#EEE5D9" //light
// }

export const colors = {
  a:"#A74542",
  b:"#BF8845",
  c:"EEE5D9",
  button:"#A74542",
  backgroundA:"#EEE5D9", //Medium
  backgroundB:"#CEB06E", //Darkest
  backgroundC:"#EFEDE7", //Lightest
  textA:"#4A2E37", //dark
  textB:"#E8E8E8" //light
}

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
