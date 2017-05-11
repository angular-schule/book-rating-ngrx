import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPresentationComponent } from './counter-presentation.component';

describe('CounterPresentationComponent', () => {
  let component: CounterPresentationComponent;
  let fixture: ComponentFixture<CounterPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
