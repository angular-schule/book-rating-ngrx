import { Component } from '@angular/core';
import { select } from '@angular-redux/store';

import { CounterActions } from '../_actions/counter.action';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @select() counter$: any;

  constructor(private counterActions: CounterActions) {}

}
