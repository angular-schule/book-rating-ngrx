import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'br-counter-presentation',
  templateUrl: './counter-presentation.component.html',
  styleUrls: ['./counter-presentation.component.css']
})
export class CounterPresentationComponent {

  @Input() counter: any;
  @Output() increment = new EventEmitter<any>();
  @Output() decrement = new EventEmitter<any>();
}
