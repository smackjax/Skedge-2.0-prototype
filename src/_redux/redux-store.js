import {applyMiddleware ,createStore} from 'redux';
import Reducers from './reducers';
import FAKEDATA from './redux-store-data-template';
//Middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger';

let reduxStore = createStore(
    Reducers,
    // FAKEDATA,
    applyMiddleware(thunk, logger)
);
export default reduxStore;
