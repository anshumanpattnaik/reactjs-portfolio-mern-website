import {combineReducers} from 'redux';

import skillSetsReducer from './skillSetsReducer';

const rootReducer = combineReducers({
    skills: skillSetsReducer
});

export default rootReducer;