import { combineReducers } from 'redux';
import { AnimalsReducer } from './AnimalsReducer';
import { HostsReducer } from './HostsReducer';
import { SheltersReducer } from './SheltersReducer';

const rootReducer = combineReducers({
    animals: AnimalsReducer,
    hosts: HostsReducer,
    shelters: SheltersReducer,
});

export default rootReducer;