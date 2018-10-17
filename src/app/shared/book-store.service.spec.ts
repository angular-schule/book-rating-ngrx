import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { of } from 'rxjs';

import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http,
          useValue: {
            get: () => of({
              json: () => []
            })
          }
        },
        BookStoreService
      ]
    });
  });

  it('should ...', inject([BookStoreService], (service: BookStoreService) => {
    expect(service).toBeTruthy();
  }));
});
