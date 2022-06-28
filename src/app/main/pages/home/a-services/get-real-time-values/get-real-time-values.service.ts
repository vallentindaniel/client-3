import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { RealTimeValuesObj } from '../../a-models/real-time-values/real-time-values';

@Injectable({
  providedIn: 'root'
})
export class GetRealTimeValuesService {

  url: string = environment.apiUrl;
  interval: number = environment.interval;

  constructor(private http: HttpClient) { }

  getAvgData() {
    let id = 1;
    return interval(this.interval).pipe(
      startWith(0),
      switchMap(() => this.http.get<RealTimeValuesObj>(this.url + "/getAvgData/" + id))
    );
  }

}
