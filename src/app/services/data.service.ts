import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public action: string = "Some Action";

  public sundayTrafficCount: number;
  public mondayTrafficCount: number;
  public tuesdayTrafficCount: number;
  public wednesdayTrafficCount: number;
  public thursdayTrafficCount: number;
  public fridayTrafficCount: number;
  public saturdayTrafficCount: number;
}
