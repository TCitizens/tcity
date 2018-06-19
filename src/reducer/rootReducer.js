import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  modal: modalReducer
});

export default rootReducer;