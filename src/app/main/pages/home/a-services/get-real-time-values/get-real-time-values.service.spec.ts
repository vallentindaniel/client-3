import { TestBed } from '@angular/core/testing';

import { GetRealTimeValuesService } from './get-real-time-values.service';

describe('GetRealTimeValuesService', () => {
  let service: GetRealTimeValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRealTimeValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
