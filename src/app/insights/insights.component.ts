import { Component, OnInit, Input } from "@angular/core";
import * as Chart from "chart.js";
import { Insight } from "./temp-sample";
import {
  generateGradientCanvas,
  random_rgba
} from "./random-gradient-generator";

@Component({
  selector: "app-insights",
  templateUrl: "./insights.component.html",
  styleUrls: ["./insights.component.scss"]
})
export class InsightsComponent implements OnInit {
  @Input() insightData: any; // the insights data

  // Visits by hour
  barChartVisitHour;
  ctxVisitHour;
  canvasVisitHour;

  // Visits by day
  barChartVisitDay;
  ctxVisitDay;
  canvasVisitDay;

  // Linger time by Hour
  barChartLingerHour;
  ctxLingerHour;
  canvasLingerHour;

  // Linger time by Day
  barChartLingerDay;
  ctxLingerDay;
  canvasLingerDay;

  insightD;
  constructor() {}

  ngOnInit() {
    this.insightD = this.insightData;
    console.log(Insight);
    this.calculateBarChartHourly();
    this.calculateBarChartDaily();
    //   Chart.pluginService.register({
    //     afterUpdate: function(chart) {
    //         for (var i = 0; i < chart.config.data.datasets.length; i++) {
    //             var dataset = chart.getDatasetMeta(i);
    //             for (var j = 0; j < dataset.data.length; j++) {
    //                 var model = dataset.data[j]._model
    //                 var chart = dataset.data[j]._chart

    //                 var start = model.x,
    //                     end = model.x + chart.width,
    //                     gradient = this.canvasDay.createLinearGradient(start, 0, end - 5, 0);
    //                     console.log("log", dataset.dataset.backgroundColor[j])
    //                 gradient.addColorStop(0, dataset.dataset.backgroundColor[j][0]);
    //                 gradient.addColorStop(1, dataset.dataset.backgroundColor[j][1]);

    //                 dataset.dataset. backgroundColor[j] = gradient;
    //             }
    //         }
    //     }
    // });
  }

  calculateBarChartDaily() {
    this.canvasVisitDay = document.getElementById("dailyVisitChart");
    this.ctxVisitDay = this.canvasVisitDay.getContext("2d");
    const dailyAvg = this.insightD.averages.daily;

    let labels = Object.keys(dailyAvg).map(day => {
      return day;
    });

    let data = Object.keys(dailyAvg).map(day => {
      let d = dailyAvg[day];
      return d.visits.mean;
    });

    let gradients = [];

    data.forEach(dataPoint => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      let startColor = "rgb(120,2,6,.5)";
      let stopColor = "rgba(6,17,97,.5)";
      gradients.push(generateGradientCanvas(ctx, startColor, stopColor));
    });

    this.barChartVisitDay = new Chart(this.ctxVisitDay, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: gradients
          },
        ]
      },
      options: {
        title: {
          display: true,
          position: "top",
          fullWidth: true,
          fontSize: 20,
          fontFamily: "Playfair Display",
          //fontColor: ChartColor;
          //fontStyle?: string;
          //padding?: number;
          text: "Daily Visits"
        }
      }
    });
  }

  calculateBarChartHourly() {
    this.canvasVisitHour = document.getElementById("hourlyVisitChart");
    this.ctxVisitHour = this.canvasVisitHour.getContext("2d");
    const hourlyAvg = this.insightD.averages.hourly;

    let labels = Object.keys(hourlyAvg).map(h => {
      let label;
      if (Number(h) > 12) {
        label = (Number(h) % 12) + "pm";
      } else if (Number(h) == 12) {
        label = h + "pm";
      } else {
        label = h + "am";
      }
      return label;
    });
    let data = Object.keys(hourlyAvg).map(h => {
      let hour = hourlyAvg[h];
      return hour.visits.mean;
    });
    let minDataPt = Math.min(Number(data));
    let maxDataPt = Math.max(Number(data));

    let gradients = [];

    data.forEach(dataPoint => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      let startColor = "rgba(182,251,255,.8)";
      let stopColor = "rgba(131,164,212,.8)";
      gradients.push(generateGradientCanvas(ctx, startColor, stopColor));
    });

    this.barChartVisitHour = new Chart(this.ctxVisitHour, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: gradients
          }
        ]
      },
      options: {
        title: {
          display: true,
          position: "top",
          fullWidth: true,
          fontSize: 20,
          fontFamily: "Playfair Display",
          //fontColor: ChartColor;
          //fontStyle?: string;
          //padding?: number;
          text: "Hourly Visits"
        }
      }
    });
  }
}
