import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import middlewares, { sagaMiddleware } from './middlewares';

import rootReducers from './../reducers';
import rootSaga from './../sagas';

const reducers = combineReducers(rootReducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
