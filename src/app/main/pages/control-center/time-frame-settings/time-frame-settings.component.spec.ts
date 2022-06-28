import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFrameSettingsComponent } from './time-frame-settings.component';

describe('TimeFrameSettingsComponent', () => {
  let component: TimeFrameSettingsComponent;
  let fixture: ComponentFixture<TimeFrameSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeFrameSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeFrameSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
