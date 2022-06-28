import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeChartComponent } from './delete-type-chart.component';

describe('DeleteTypeChartComponent', () => {
  let component: DeleteTypeChartComponent;
  let fixture: ComponentFixture<DeleteTypeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTypeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
