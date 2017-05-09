import { TestBed, inject } from '@angular/core/testing';

import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookStoreService]
    });
  });

  it('should ...', inject([BookStoreService], (service: BookStoreService) => {
    expect(service).toBeTruthy();
  }));
});
