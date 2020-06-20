import {combineReducers} from 'redux';

import skillSetsReducer from './skillSetsReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
    skills: skillSetsReducer,
    projects: projectReducer
});

export default rootReducer;