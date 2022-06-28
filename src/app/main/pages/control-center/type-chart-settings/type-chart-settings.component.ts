import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGlobalService } from 'src/app/main/_services/modal-global/modal-global.service';
import { TypeChart, TypeChartObj } from '../a-models/type-chart/type-chart';
import { ControlCenterService } from '../a-services/control-center-service/control-center.service';

@Component({
  selector: 'app-type-chart-settings',
  templateUrl: './type-chart-settings.component.html',
  styleUrls: ['./type-chart-settings.component.scss']
})
export class TypeChartSettingsComponent implements OnInit {

  typeChartObj!: TypeChartObj;
  typeChartItem!: TypeChart;

  optionAdd: string = "Add Type Chart"; // modal title
  optionEdit: string = "Edit Type Chart"; // modal title
  optionDelete: string = "Are you sure you want to delete this type chart?"; // modal title
  selectedOption: string = ""; // selected modal title
  poz: number = 0; // 1 -> add, 2-> edit, 3-> delete

  constructor(
    private dataService: ControlCenterService,
    private modalService: NgbModal,
    public modalGlobalService: ModalGlobalService
  ) {

    dataService.getChartTypes().subscribe(data => {
      this.typeChartObj = data;
    });

  }

  ngOnInit(): void {
  }

  openXl(poz: number, index: number, selectedTitle: string) {
    this.modalService.open(this.modalGlobalService.get("contentTypeChart"), { size: 'xl' });
    this.poz = poz;
    this.selectedOption = selectedTitle;
    this.typeChartItem = this.typeChartObj.data[index];
  }

}
