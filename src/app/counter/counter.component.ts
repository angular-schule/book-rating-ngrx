import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as counterActions from '../_actions/counter.actions';
import * as reducers from '../_reducers';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent {

  current$: Observable<number>;

  constructor(private store: Store<reducers.State>) {
    this.current$ = store.select(reducers.getCurrent);
  }

  increment() {
    this.store.dispatch(new counterActions.IncrementCounter());
  }

  decrement() {
    this.store.dispatch(new counterActions.DecrementCounter());
  }
}
