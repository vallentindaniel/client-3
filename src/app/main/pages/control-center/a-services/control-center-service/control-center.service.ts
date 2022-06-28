import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimeFrame } from '../../a-models/time-frame-chart/time-frame-chart';
import { TypeChartObj } from '../../a-models/type-chart/type-chart';

@Injectable({
  providedIn: 'root'
})
export class ControlCenterService {

  url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // get data
  getChartTypes() {
    return this.http.get<TypeChartObj>(this.url + "/getChartTypes");
  }

  getTimeFrame() {
    return this.http.get<TimeFrame[]>(this.url + "/getTimeFrame");
  }


}
