import { FETCH_SKILLS_SETS } from '../actions/constants';

const initialState = {
    data: '',
};

const skillSetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SKILLS_SETS: {
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

export default skillSetsReducer;