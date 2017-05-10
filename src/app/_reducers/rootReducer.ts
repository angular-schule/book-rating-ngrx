import { combineReducers } from 'redux-seamless-immutable';

import { IAppState } from './types';
import { counterReducer } from './counter.reducer';

export const rootReducer = combineReducers({
  counter: counterReducer
} as IAppState);
