import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { creatLogger } from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(
    creatLogger(),
    thunkMiddleware
  )
);

export default store;
