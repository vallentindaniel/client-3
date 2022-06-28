import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TypeChartService } from '../../a-services/type-chart-service/type-chart.service';
import { ModalGlobalService } from 'src/app/main/_services/modal-global/modal-global.service';


@Component({
  selector: 'app-add-type-chart',
  templateUrl: './add-type-chart.component.html',
  styleUrls: ['./add-type-chart.component.scss']
})
export class AddTypeChartComponent implements OnInit {

  formData: any = new FormData();

  addDataForm = this.fb.group({
    title: ['', Validators.required],
    type: ['', Validators.required]
  });

  get title() {
    return this.addDataForm.get("title");
  }

  get type() {
    return this.addDataForm.get("type");
  }

  constructor(
    public modalGlobalService: ModalGlobalService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private typeChartService: TypeChartService
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.addDataForm.value)

    if (this.title?.valid && this.type?.valid) {

      this.formData.append("title", this.title?.value);
      this.formData.append("type", this.type?.value);

      this.typeChartService.addTypeChart(this.formData);

      this.modalService.dismissAll();
      this.modalService.open(this.modalGlobalService.get("modalControlCenter"), { size: 'xl' });
    }

  }

}
