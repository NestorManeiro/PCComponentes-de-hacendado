import { TestBed } from '@angular/core/testing';

import { AlmacénService } from './almacén.service';

describe('AlmacénService', () => {
  let service: AlmacénService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacénService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
