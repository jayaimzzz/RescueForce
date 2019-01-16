import { combineReducers } from "redux";
import { AnimalsReducer } from "./AnimalsReducer";
import { HostsReducer } from "./HostsReducer";
import { SheltersReducer } from "./SheltersReducer";
import { AuthReducer } from "./AuthReducer";
import { ProgressReducer } from "./ProgressReducer";

const rootReducer = combineReducers({
  animals: AnimalsReducer,
  hosts: HostsReducer,
  shelters: SheltersReducer,
  auth: AuthReducer,
  inProgress: ProgressReducer
});

export default rootReducer;
