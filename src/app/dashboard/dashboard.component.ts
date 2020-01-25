import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import regression from 'regression';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dataSet: number[] = [65, 59, 80, 81, 56, 55, 140];


  dataPoints: number[][] = this.dataSet.reduce((rows, arrayValue, index) => (rows.push([index, arrayValue])) && rows, []);
  result = regression.linear(this.dataPoints);
  slope: number = this.result.equation[0];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  barChartData: ChartDataSets[] = [
    {
      data: this.dataSet, label: '# of Customers'
    },
  ];

  openModal() {
    console.log("I got clicked!");
  }

}
