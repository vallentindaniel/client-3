import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeChartComponent } from './add-type-chart.component';

describe('AddTypeChartComponent', () => {
  let component: AddTypeChartComponent;
  let fixture: ComponentFixture<AddTypeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
