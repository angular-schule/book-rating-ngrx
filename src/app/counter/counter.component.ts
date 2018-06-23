import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../store/reducers/index';
import { getCurrent } from '../store/selectors/counter.selectors';
import { IncrementCounter, DecrementCounter } from '../store/actions/counter.actions';


@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  current$: Observable<number>;

  constructor(private store: Store<State>) {
    this.current$ = store.pipe(select(getCurrent));
  }

  increment() {
    this.store.dispatch(new IncrementCounter());
  }

  decrement() {
    this.store.dispatch(new DecrementCounter());
  }
}
