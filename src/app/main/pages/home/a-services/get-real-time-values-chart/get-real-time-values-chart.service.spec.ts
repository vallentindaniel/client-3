import { TestBed } from '@angular/core/testing';

import { GetRealTimeValuesChartService } from './get-real-time-values-chart.service';

describe('GetRealTimeValuesChartService', () => {
  let service: GetRealTimeValuesChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRealTimeValuesChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
