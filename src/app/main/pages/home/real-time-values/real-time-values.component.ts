import { Component, Input, OnInit } from '@angular/core';
import { RealTimeValuesObj } from '../a-models/real-time-values/real-time-values';
import { GetRealTimeValuesService } from '../a-services/get-real-time-values/get-real-time-values.service';

@Component({
  selector: 'app-real-time-values',
  templateUrl: './real-time-values.component.html',
  styleUrls: ['./real-time-values.component.scss']
})
export class RealTimeValuesComponent implements OnInit {

  avgData!: RealTimeValuesObj;

  constructor(private dataService: GetRealTimeValuesService) { 
    dataService.getAvgData().subscribe(data => { // for real time data in progress bar
      this.avgData = data;
    });
  }

  ngOnInit(): void {
  }

}
