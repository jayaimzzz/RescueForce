import { combineReducers } from "redux";
import { AnimalsReducer } from "./AnimalsReducer";
import { HostsReducer } from "./HostsReducer";
import { SheltersReducer } from "./SheltersReducer";
import { AuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({
  animals: AnimalsReducer,
  hosts: HostsReducer,
  shelters: SheltersReducer,
  auth: AuthReducer
});

export default rootReducer;
