import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeValuesComponent } from './real-time-values.component';

describe('RealTimeValuesComponent', () => {
  let component: RealTimeValuesComponent;
  let fixture: ComponentFixture<RealTimeValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
