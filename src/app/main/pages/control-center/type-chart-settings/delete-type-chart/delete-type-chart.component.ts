import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGlobalService } from 'src/app/main/_services/modal-global/modal-global.service';
import { TypeChartService } from '../../a-services/type-chart-service/type-chart.service';

@Component({
  selector: 'app-delete-type-chart',
  templateUrl: './delete-type-chart.component.html',
  styleUrls: ['./delete-type-chart.component.scss']
})
export class DeleteTypeChartComponent implements OnInit {

  constructor(
    public modalGlobalService: ModalGlobalService,
    private modalService: NgbModal,
    private typeChartService: TypeChartService
  ) { }

  @Input() chart_id!: number;

  ngOnInit(): void {
  }

  deleteItem() {
    this.typeChartService.deleteTypeChart(this.chart_id);
    setTimeout(() => {
      this.modalService.dismissAll();
      this.modalService.open(this.modalGlobalService.get("modalControlCenter"), { size: 'xl' });
    }, 2000);
  }

}
