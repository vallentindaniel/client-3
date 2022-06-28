import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeValuesChartComponent } from './real-time-values-chart.component';

describe('RealTimeValuesChartComponent', () => {
  let component: RealTimeValuesChartComponent;
  let fixture: ComponentFixture<RealTimeValuesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeValuesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeValuesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
