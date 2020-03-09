import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phones from './phones';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    phones,
  });

export default createRootReducer;
