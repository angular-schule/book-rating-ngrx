import * as si from 'seamless-immutable';

export interface IAppState {
  counter?: Counter;
  // TODO: mehr reducer, mehr actions
};

export type Counter = si.Immutable<{
  current: number;
}>;
