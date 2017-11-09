import { Action } from '@ngrx/store';

export const INCREMENT_COUNTER = '[Counter] Increment';
export const DECREMENT_COUNTER = '[Counter] Decrement';

export class IncrementCounter implements Action {
  readonly type = INCREMENT_COUNTER;
}

export class DecrementCounter implements Action {
  readonly type = DECREMENT_COUNTER;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = IncrementCounter | DecrementCounter;
