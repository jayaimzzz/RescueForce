import { INITIAL_STATE } from "../Constants";
import {
  UPDATE_HOST,
  UPDATE_HOST_SUCCESS,
  UPDATE_HOST_FAILURE,
  UPDATE_ANIMAL,
  UPDATE_ANIMAL_SUCCESS,
  UPDATE_ANIMAL_FAILURE,
  UPDATE_ANIMAL_PHOTOS,
  UPDATE_ANIMAL_PHOTOS_SUCCESS,
  UPDATE_ANIMAL_PHOTOS_FAILURE,
  ADD_ANIMAL_STARTED,
  ADD_ANIMAL_SUCCESS,
  ADD_ANIMAL_FAILURE,
  UPDATE_SHELTER_STARTED,
  UPDATE_SHELTER_SUCCESS,
  UPDATE_SHELTER_FAILURE,
  REGISTER_HOST_STARTED,
  REGISTER_HOST_SUCCESS,
  REGISTER_HOST_FAILURE,
  UPDATE_HOST_IMAGE_STARTED,
  UPDATE_HOST_IMAGE_SUCCESS,
  UPDATE_HOST_IMAGE_FAILURE,
  UPDATE_SHELTER_IMAGE_STARTED,
  UPDATE_SHELTER_IMAGE_SUCCESS,
  UPDATE_SHELTER_IMAGE_FAILURE
} from "../ActionCreators";

export const ProgressReducer = (state = INITIAL_STATE.inProgress, action) => {
  switch (action.type) {
    case UPDATE_HOST:
      return { ...state, hostProfileUpdate: true };
    case UPDATE_HOST_SUCCESS:
    case UPDATE_HOST_FAILURE:
      return { ...state, hostProfileUpdate: false };
    case UPDATE_ANIMAL:
      return { ...state, animalProfileUpdate: true };
    case UPDATE_ANIMAL_SUCCESS:
    case UPDATE_ANIMAL_FAILURE:
      return { ...state, animalProfileUpdate: false };
    case ADD_ANIMAL_STARTED:
      return { ...state, addAnimal: true };
    case ADD_ANIMAL_SUCCESS:
    case ADD_ANIMAL_FAILURE:
      return { ...state, addAnimal: false };
    case UPDATE_ANIMAL_PHOTOS:
      return { ...state, addAnimalPhotos: true };
    case UPDATE_ANIMAL_PHOTOS_SUCCESS:
    case UPDATE_ANIMAL_PHOTOS_FAILURE:
      return { ...state, addAnimalPhotos: false };
    case UPDATE_SHELTER_STARTED:
      return { ...state, shelterProfileUpdate: true };
    case UPDATE_SHELTER_SUCCESS:
    case UPDATE_SHELTER_FAILURE:
      return { ...state, shelterProfileUpdate: false };
    case REGISTER_HOST_STARTED:
      return { ...state, registration: true };
    case REGISTER_HOST_SUCCESS:
    case REGISTER_HOST_FAILURE:
      return { ...state, registration: false };
    case UPDATE_HOST_IMAGE_STARTED:
      return { ...state, changeHostPhoto: true };
    case UPDATE_HOST_IMAGE_SUCCESS:
    case UPDATE_HOST_IMAGE_FAILURE:
      return { ...state, changeHostPhoto: false };
    case UPDATE_SHELTER_IMAGE_STARTED:
      return { ...state, changeShelterPhoto: true };
    case UPDATE_SHELTER_IMAGE_SUCCESS:
    case UPDATE_SHELTER_IMAGE_FAILURE:
      return { ...state, changeShelterPhoto: false };
    default:
      return state;
  }
};
