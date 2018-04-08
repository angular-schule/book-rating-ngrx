import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  IncrementCounter = '[Counter] Increment',
  DecrementCounter = '[Counter] Decrement'
}

export class IncrementCounter implements Action {
  readonly type = CounterActionTypes.IncrementCounter;
}

export class DecrementCounter implements Action {
  readonly type = CounterActionTypes.DecrementCounter;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type CounterActions =
  | IncrementCounter
  | DecrementCounter;
