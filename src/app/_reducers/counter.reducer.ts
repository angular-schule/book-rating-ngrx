import { Action } from 'redux';
import * as si from 'seamless-immutable';

import { CounterActions } from '../_actions/counter.action';
import { Counter } from './types';

const INITIAL_COUNTER_STATE: Counter = si.from({
  current: 0
});

export function counterReducer(
  state: Counter = INITIAL_COUNTER_STATE, action: Action
): Counter {

  switch (action.type) {

    case CounterActions.INCREMENT_COUNTER:
      return state.set('current', state.current + 1);

  default:
    return state;
  }
}
