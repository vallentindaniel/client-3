import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() public chartType: string = 'line';

    @Input() public chartDatasets: Array<any> = [
        { data: [], label: "" },
    ];

    @Input() public chartLabels: any = ['day 1', 'day 2', 'day 3'];

    public chartColors: Array<any> = [
    {
        backgroundColor: 'rgba(31, 64, 81, 0.3)',
        borderColor: 'rgba(31, 64, 81,1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(31, 64, 81, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(31, 64, 81, 1)'
    }
    ];

    public chartOptions: any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }

}
