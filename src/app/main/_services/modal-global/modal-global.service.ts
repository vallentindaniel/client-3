import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalGlobalService {

  template: any = {};
  content: any = {};

  add(name: string, ref: TemplateRef<any>, modalContentType: any) {
    this.template[name] = ref;
    this.content[name] = modalContentType;
  }

  editContent(name: string, modalContentType: any) {
    this.content[name] = modalContentType;
  }

  get(name: string) {
    return this.template[name];
  }


  getContent(name: string) {
    return this.content[name];
  }

  constructor() { }
}
