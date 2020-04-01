import { SET_OUTPUTS } from './constants';

export const setOutputs = (outputs) => {
    return {
        type: SET_OUTPUTS,
        outputs
    }
};

export const resetOutputs = () => {
    return {
        type: SET_OUTPUTS,
        outputs: []
    }
};