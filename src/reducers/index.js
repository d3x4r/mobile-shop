import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phones from './phones';
import phonesPage from './phones-page';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage,
  });

export default createRootReducer;
