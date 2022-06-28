import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/pages/home/home.component';
import { ControlCenterComponent } from './main/pages/control-center/control-center.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './main/components/layout/navbar/navbar.component';
import { FooterComponent } from './main/components/layout/footer/footer.component';
import { ChartComponent } from './main/pages/home/chart/chart.component';
import { ModalChartsComponent } from './main/pages/home/modal-charts/modal-charts.component';
import { RealTimeValuesComponent } from './main/pages/home/real-time-values/real-time-values.component';
import { RealTimeValuesChartComponent } from './main/pages/home/real-time-values-chart/real-time-values-chart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeChartSettingsComponent } from './main/pages/control-center/type-chart-settings/type-chart-settings.component';
import { TimeFrameSettingsComponent } from './main/pages/control-center/time-frame-settings/time-frame-settings.component';
import { AddTypeChartComponent } from './main/pages/control-center/type-chart-settings/add-type-chart/add-type-chart.component';
import { EditTypeChartComponent } from './main/pages/control-center/type-chart-settings/edit-type-chart/edit-type-chart.component';
import { DeleteTypeChartComponent } from './main/pages/control-center/type-chart-settings/delete-type-chart/delete-type-chart.component';
import { LoginComponent } from './main/pages/auth/login/login.component';
import { RegisterComponent } from './main/pages/auth/register/register.component';
import { JwtInterceptor } from './main/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './main/_helpers/error.interceptor';
import { WelcomePageComponent } from './main/pages/guest/welcome-page/welcome-page.component';
import { AccountsComponent } from './main/pages/control-center/accounts/accounts.component';
import { EnviromentSettingsComponent } from './main/pages/control-center/enviroment-settings/enviroment-settings.component';
import { AddAccountComponent } from './main/pages/control-center/accounts/add-account/add-account.component';
import { DeleteAccountComponent } from './main/pages/control-center/accounts/delete-account/delete-account.component';
import { EditAccountComponent } from './main/pages/control-center/accounts/edit-account/edit-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlCenterComponent,
    NavbarComponent,
    FooterComponent,
    ChartComponent,
    ModalChartsComponent,
    RealTimeValuesComponent,
    RealTimeValuesChartComponent,
    TypeChartSettingsComponent,
    TimeFrameSettingsComponent,
    AddTypeChartComponent,
    EditTypeChartComponent,
    DeleteTypeChartComponent,
    LoginComponent,
    RegisterComponent,
    WelcomePageComponent,
    AccountsComponent,
    EnviromentSettingsComponent,
    AddAccountComponent,
    DeleteAccountComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
