import { TestBed } from '@angular/core/testing';

import { RxDigitalService } from './rx-digital.service';

describe('RxDigitalService', () => {
  let service: RxDigitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxDigitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
