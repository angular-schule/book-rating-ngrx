import * as si from 'seamless-immutable';

import { CounterActions } from '../_actions/counter.action';
import { counterReducer } from './counter.reducer';
import { CounterState } from './types';
import { Book } from 'app/shared/book';

describe('Quotes Reducer', () => {
  let initState: CounterState;
  let nextState: CounterState;

  beforeEach(() => {
    initState = counterReducer(undefined, { type: 'TEST_INIT' });
    nextState = undefined;
  });

  afterEach(() => {
    expect(si.isImmutable(nextState)).toBe(true);
  });

  it('should have an immutable initial state', () => {
    nextState = initState;
  });

  it('should increment the index (INCREMENT_COUNTER)', () => {

    nextState = counterReducer(initState, { type: CounterActions.INCREMENT_COUNTER });

    expect(nextState.current).toBe(initState.current + 1);
  });

  it('should decrement the index (DECREMENT_COUNTER)', () => {

    nextState = counterReducer(initState, { type: CounterActions.DECREMENT_COUNTER });

    expect(nextState.current).toBe(initState.current - 1);
  });
});
