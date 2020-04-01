import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import { outputsReducer } from './outputs';

const store = createStore(
    outputsReducer,
    applyMiddleware(logger)
);

export default store;