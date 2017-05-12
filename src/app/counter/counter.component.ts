import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { select } from '@angular-redux/store';

import { CounterActions } from '../_actions/counter.action';
import { CounterState } from 'app/_reducers/types';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent {

  @select()
  counterState$: Observable<CounterState>;

  constructor(public counterActions: CounterActions) {}

}
