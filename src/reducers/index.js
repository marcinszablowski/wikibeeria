import isLogged from './isLogged';
import counter from './counter';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
  isLogged,
  counter,
})
