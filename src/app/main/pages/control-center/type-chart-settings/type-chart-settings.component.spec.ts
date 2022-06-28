import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChartSettingsComponent } from './type-chart-settings.component';

describe('TypeChartSettingsComponent', () => {
  let component: TypeChartSettingsComponent;
  let fixture: ComponentFixture<TypeChartSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeChartSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeChartSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
