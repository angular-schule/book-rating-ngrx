import { Action } from 'redux';

export interface IActionPayload<T> extends Action {
  payload?: T;
}
