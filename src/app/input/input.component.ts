import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeekData } from '../models/week-data';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  sampleData = new WeekData(0, 0, 0, 0, 0, 0, 0);

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.sampleData);
    this.router.navigate(['/']);
  }

}
