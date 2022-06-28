import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeChartService {

  url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addTypeChart(formData: any) {
    this.http.post( this.url+'/addTypeChart', formData).subscribe(response =>{
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  editTypeChart(formData: any, id: number) {
    this.http.post( this.url+'/editTypeChart/'+ id , formData).subscribe(response =>{
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  deleteTypeChart(id: number) {
    this.http.delete( this.url+'/deleteTypeChart/'+ id).subscribe(response =>{
      console.log(response)
    }, error => {
      console.log(error)
    })
  }



}
