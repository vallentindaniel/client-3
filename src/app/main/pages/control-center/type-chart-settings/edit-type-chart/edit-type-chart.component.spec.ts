import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeChartComponent } from './edit-type-chart.component';

describe('EditTypeChartComponent', () => {
  let component: EditTypeChartComponent;
  let fixture: ComponentFixture<EditTypeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
