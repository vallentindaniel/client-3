import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGlobalService } from 'src/app/main/_services/modal-global/modal-global.service';
import { TypeChart } from '../../a-models/type-chart/type-chart';
import { TypeChartService } from '../../a-services/type-chart-service/type-chart.service';

@Component({
  selector: 'app-edit-type-chart',
  templateUrl: './edit-type-chart.component.html',
  styleUrls: ['./edit-type-chart.component.scss']
})
export class EditTypeChartComponent implements OnInit {

   @Input() typeChart!: TypeChart;

  formData: any = new FormData();
  editDataForm = this.fb.group({
    title: ['', Validators.required],
    type: ['', Validators.required]
  });

  get title() {
    return this.editDataForm.get("title");
  }

  get type() {
    return this.editDataForm.get("type");
  }

  constructor(
    public modalGlobalService: ModalGlobalService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private typeChartService: TypeChartService
  ) { }

  ngOnInit(): void {
    this.editDataForm.patchValue({
      title: this.typeChart.title,
      type: this.typeChart.type
    });
  }

  onSubmit() {
    console.warn(this.editDataForm.value)

    if (this.title?.valid && this.type?.valid) {

      this.formData.append("title", this.title?.value);
      this.formData.append("type", this.type?.value);

      this.typeChartService.editTypeChart(this.formData, this.typeChart.id);

      this.modalService.dismissAll();
      this.modalService.open(this.modalGlobalService.get("modalControlCenter"), { size: 'xl' });
    }

  }

}
