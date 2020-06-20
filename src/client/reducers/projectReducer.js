import { FETCH_PROJECTS } from '../actions/constants';

const initialState = {
    data: '',
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS: {
            const newState = {
                ...state,
                data: action.payload,
            };
            return newState;
        }
        default:
            return state;
    }
};

export default projectReducer;