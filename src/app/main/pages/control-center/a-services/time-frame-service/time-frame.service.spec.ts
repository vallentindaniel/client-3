import { TestBed } from '@angular/core/testing';

import { TimeFrameService } from './time-frame.service';

describe('TimeFrameService', () => {
  let service: TimeFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
