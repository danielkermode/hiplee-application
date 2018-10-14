import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// Define middlewares here
export default function () {
  return createStore(reducer, applyMiddleware(thunk));
};
