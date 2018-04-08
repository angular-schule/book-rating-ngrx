import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

export const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCurrent = createSelector(
  getCounterState,
  state => state.current
);
