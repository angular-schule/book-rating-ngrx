import { Action } from 'redux';
import * as si from 'seamless-immutable';

import { CounterActions } from '../_actions/counter.action';
import { CounterState } from './types';

const INITIAL_COUNTER_STATE: CounterState = si.from({
  current: 0
});

export function counterReducer(
  state: CounterState = INITIAL_COUNTER_STATE, action: Action
): CounterState {

  switch (action.type) {

    case CounterActions.INCREMENT_COUNTER:
      return state.set('current', state.current + 1);

    case CounterActions.DECREMENT_COUNTER:
      return state.set('current', state.current - 1);

  default:
    return state;
  }
}
