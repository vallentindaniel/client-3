import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ChartType, RealTimeValuesChartObj } from '../../a-models/real-time-values-chart/real-time-values-chart';
import { ModalChartArr } from '../../a-models/modal-chart-arr/modal-chart-arr';

@Injectable({
  providedIn: 'root'
})
export class GetRealTimeValuesChartService {
  
  url: string = environment.apiUrl;
  interval: number = environment.interval;

  constructor(private http: HttpClient) { }

  getChartData() {
    let id = 1;
    return interval(this.interval).pipe(
      startWith(0),
      switchMap(() => this.http.get<RealTimeValuesChartObj>(this.url + "/getData/" + id))
    );
  }


  getChartType() {
    return  this.http.get<ChartType>(this.url + "/getChartTypes");
  }


  getDataChartsTemperatureModal() {
    return this.http.get<ModalChartArr>(this.url + "/getDataArrChartTemperature");
  }

  getDataChartsHumidityModal() {
    return this.http.get<ModalChartArr>(this.url + "/getDataArrChartHumidity");
  }

  getDataChartsLuminosityModal() {
    return this.http.get<ModalChartArr>(this.url + "/getDataArrChartLuminosity");
  }



}
