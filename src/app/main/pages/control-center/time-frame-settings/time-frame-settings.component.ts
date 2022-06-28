import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGlobalService } from 'src/app/main/_services/modal-global/modal-global.service';
import { TimeFrame, TimeFrameObj } from '../a-models/time-frame-chart/time-frame-chart';
import { ControlCenterService } from '../a-services/control-center-service/control-center.service';

@Component({
  selector: 'app-time-frame-settings',
  templateUrl: './time-frame-settings.component.html',
  styleUrls: ['./time-frame-settings.component.scss']
})
export class TimeFrameSettingsComponent implements OnInit {

  timeFrameArr!: TimeFrame[];
  timeFrameItem!: TimeFrame;


  optionEdit: string = "Edit Time Frame"; // modal title
  selectedOption: string = ""; // selected modal title
  poz: number = 0; // 1 -> add, 2-> edit, 3-> delete


  constructor(
    private dataService: ControlCenterService,
    private modalService: NgbModal,
    public modalGlobalService: ModalGlobalService
    ) { 
      dataService.getTimeFrame().subscribe( data =>{
        this.timeFrameArr = data;
      })
    }

  ngOnInit(): void {
  }

  openXl(poz: number, index: number, selectedTitle: string) {
    this.modalService.open(this.modalGlobalService.get("contentTimeFrame"), { size: 'xl' });
    this.poz = poz;
    this.selectedOption = selectedTitle;
    this.timeFrameItem = this.timeFrameArr[index];
  }

}
