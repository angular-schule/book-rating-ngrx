import { BookComponent } from './../book/book.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DashboardComponent } from './dashboard.component';
import { BookStoreService } from './../shared/book-store.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [DashboardComponent, BookComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: BookStoreService,
        useValue: { getAll: () => Observable.of([]) }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
