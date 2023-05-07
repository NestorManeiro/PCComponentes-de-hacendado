import { TestBed } from '@angular/core/testing';

import { ServicioJositoService } from './servicio-josito.service';

describe('ServicioJositoService', () => {
  let service: ServicioJositoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioJositoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
