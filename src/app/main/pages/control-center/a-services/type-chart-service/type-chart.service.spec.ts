import { TestBed } from '@angular/core/testing';

import { TypeChartService } from './type-chart.service';

describe('TypeChartService', () => {
  let service: TypeChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
