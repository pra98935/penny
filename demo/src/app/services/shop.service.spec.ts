import { TestBed } from '@angular/core/testing';

import { shopService } from './shop.service';

describe('ProductListService', () => {
  let service: shopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(shopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
