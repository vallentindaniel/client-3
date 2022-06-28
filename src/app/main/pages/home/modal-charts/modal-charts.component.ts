import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ModalGlobalService } from 'src/app/main/_services/modal-global/modal-global.service';
import { ChartType } from '../a-models/real-time-values-chart/real-time-values-chart';
import { GetRealTimeValuesChartService } from '../a-services/get-real-time-values-chart/get-real-time-values-chart.service';


@Component({
  selector: 'app-modal-charts',
  templateUrl: './modal-charts.component.html',
  styleUrls: ['./modal-charts.component.scss']
})
export class ModalChartsComponent implements OnInit {

  typeChart!: ChartType;

  @Input() dataChartsModal: Array<any> = [];

  @Input() title!: string ;

  constructor( public modalGlobalService: ModalGlobalService, private dataService: GetRealTimeValuesChartService) {
    dataService.getChartType().subscribe(data => {
      this.typeChart = data;
    });
  }

  ngOnInit(): void {
  }

}
