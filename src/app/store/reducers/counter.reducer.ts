import { CounterActionTypes, CounterActions } from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

export function counterReducer(state: CounterState = initialState, action: CounterActions): CounterState {

  switch (action.type) {

    case CounterActionTypes.IncrementCounter: {
      return { current: state.current + 1 };
    }

    case CounterActionTypes.DecrementCounter: {
      return { current: state.current - 1 };
    }

    default: {
      return state;
    }
  }
}
