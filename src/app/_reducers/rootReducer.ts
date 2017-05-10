import { combineReducers } from 'redux-seamless-immutable'; // this is NOT import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { IAppState } from './types';
import { counterReducer } from './counter.reducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  router: routerReducer
} as IAppState);
