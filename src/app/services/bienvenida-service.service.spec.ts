import { TestBed } from '@angular/core/testing';

import { BienvenidaServiceService } from './bienvenida-service.service';

describe('BienvenidaServiceService', () => {
  let service: BienvenidaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BienvenidaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
