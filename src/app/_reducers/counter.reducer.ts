import * as counterActions from '../_actions/counter.actions';

export interface CounterState {
  current: number;
}

const INITIAL_COUNTER_STATE: CounterState = {
  current: 0
};

export function counterReducer(
  state: CounterState = INITIAL_COUNTER_STATE, action: counterActions.Actions
): CounterState {

  switch (action.type) {

    case counterActions.INCREMENT_COUNTER:
      return {
        current: state.current + 1
      };

    case counterActions.DECREMENT_COUNTER:
      return {
        current: state.current - 1
      };

    default: {
      return state;
    }
  }
}
