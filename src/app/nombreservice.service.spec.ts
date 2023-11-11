import { TestBed } from '@angular/core/testing';

import { NombreserviceService } from './nombreservice.service';

describe('NombreserviceService', () => {
  let service: NombreserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombreserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
