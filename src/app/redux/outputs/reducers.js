import { SET_OUTPUTS } from './constants';

const initState = [];

export const outputsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_OUTPUTS:
            return action.outputs;
        default:
            return state;
    }
};