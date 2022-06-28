import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGlobalService } from 'src/app/main/_services/modal-global/modal-global.service';
import { ChartType, RealTimeValuesChartObj } from '../a-models/real-time-values-chart/real-time-values-chart';
import { GetRealTimeValuesChartService } from '../a-services/get-real-time-values-chart/get-real-time-values-chart.service';

@Component({
  selector: 'app-real-time-values-chart',
  templateUrl: './real-time-values-chart.component.html',
  styleUrls: ['./real-time-values-chart.component.scss']
})
export class RealTimeValuesChartComponent implements OnInit {

  typeChart!: ChartType;

  typeChartArr: Array<string> = ['line', 'line', 'line'];

  chartDataObj!: RealTimeValuesChartObj;

  template1!: TemplateRef<any>;

  dataCharts: Array<any> = [];
  selectedTitle: string = "";



  constructor(private dataService: GetRealTimeValuesChartService, public modalGlobalService: ModalGlobalService, private modalServ: NgbModal) {

    dataService.getChartData().subscribe(data => { // for real time data in progress bar
      this.chartDataObj = data;
    });

    dataService.getChartType().subscribe(data => {
      this.typeChart = data;
    });

  }

  ngOnInit(): void {
  }

  open(data: string) {
    this.modalServ.open(this.modalGlobalService.get("template1"), { size: 'xl' });
    this.selectedTitle = data;
    if (data == "Temperature")
      this.dataForModalTemperature();
    else if (data == "Humidity")
      this.dataForModalHumidity();
    else if (data == "Luminosity")
      this.dataForModalLuminosity();

  }


  dataForModalTemperature() {
    this.dataService.getDataChartsTemperatureModal().subscribe(result => {
      this.dataCharts = [];
      result.data.forEach(element => {
        this.dataCharts.push(element);
      });
    });
  }

  dataForModalHumidity() {
    this.dataService.getDataChartsHumidityModal().subscribe(result => {
      this.dataCharts = [];
      result.data.forEach(element => {
        this.dataCharts.push(element);
      });
    });
  }

  dataForModalLuminosity() {
    this.dataService.getDataChartsLuminosityModal().subscribe(result => {
      this.dataCharts = [];
      result.data.forEach(element => {
        this.dataCharts.push(element);
      });
    });
  }

}
