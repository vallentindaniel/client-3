import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentSettingsComponent } from './enviroment-settings.component';

describe('EnviromentSettingsComponent', () => {
  let component: EnviromentSettingsComponent;
  let fixture: ComponentFixture<EnviromentSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviromentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
