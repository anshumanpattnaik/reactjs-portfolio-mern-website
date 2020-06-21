import {combineReducers} from 'redux';

import skillSetsReducer from './skillSetsReducer';
import projectReducer from './projectReducer';
import blogsReducer from './blogsReducer';

const rootReducer = combineReducers({
    skills: skillSetsReducer,
    projects: projectReducer,
    blogs: blogsReducer
});

export default rootReducer;