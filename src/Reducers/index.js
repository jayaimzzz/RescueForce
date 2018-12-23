import { combineReducers } from 'redux';
import { AnimalsReducer } from './AnimalsReducer';
import { HostsReducer } from './HostsReducer';
import { SheltersReducer } from './SheltersReducer';
import { LoggedInUserReducer } from './LoggedInUserReducer';

const rootReducer = combineReducers({
    animals: AnimalsReducer,
    hosts: HostsReducer,
    shelters: SheltersReducer,
    loggedInUser: LoggedInUserReducer
});

export default rootReducer;