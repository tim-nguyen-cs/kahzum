import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import regression from 'regression';
import { WeekData } from '../models/week-data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dataObject: WeekData = {
    sundayTrafficCount: this.dataService.sundayTrafficCount,
    mondayTrafficCount: this.dataService.mondayTrafficCount,
    tuesdayTrafficCount: this.dataService.tuesdayTrafficCount,
    wednesdayTrafficCount: this.dataService.wednesdayTrafficCount,
    thursdayTrafficCount: this.dataService.thursdayTrafficCount,
    fridayTrafficCount: this.dataService.fridayTrafficCount,
    saturdayTrafficCount: this.dataService.saturdayTrafficCount
  };
  action: string = this.dataService.action;

  dataPoints: number[][] = Object.values(this.dataObject).reduce((rows, arrayValue, index) => (rows.push([index, arrayValue])) && rows, []);
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
      data: Object.values(this.dataObject), label: '# of Customers'
    },
  ];

  constructor(private dataService: DataService) { }

  ngOnInit() { }
}
