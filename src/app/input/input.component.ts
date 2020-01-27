import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeekData } from '../models/week-data';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() { }

  action: string;
  sundayTrafficCount: number = 0;
  mondayTrafficCount: number = 0;
  tuesdayTrafficCount: number = 0;
  wednesdayTrafficCount: number = 0;
  thursdayTrafficCount: number = 0;
  fridayTrafficCount: number = 0;
  saturdayTrafficCount: number = 0;
  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.dataService.action = this.action;
    this.dataService.sundayTrafficCount = this.sundayTrafficCount;
    this.dataService.mondayTrafficCount = this.mondayTrafficCount;
    this.dataService.tuesdayTrafficCount = this.tuesdayTrafficCount;
    this.dataService.wednesdayTrafficCount = this.wednesdayTrafficCount;
    this.dataService.thursdayTrafficCount = this.thursdayTrafficCount;
    this.dataService.fridayTrafficCount = this.fridayTrafficCount;
    this.dataService.saturdayTrafficCount = this.saturdayTrafficCount;

    this.router.navigate(['/']);
  }
}
