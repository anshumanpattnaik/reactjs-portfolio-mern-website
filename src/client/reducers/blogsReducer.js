import { FETCH_BLOGS } from '../actions/constants';

const initialState = {
    data: '',
};

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOGS: {
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

export default blogsReducer;