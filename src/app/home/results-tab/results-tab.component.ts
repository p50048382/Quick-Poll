import { Component, OnInit, Output, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css'],
})
export class ResultsTabComponent implements OnInit {
  @Input() chartLables;
  public barChartOptions: ChartOptions = {
    // title: { display: true, text: ['Dilshad', 'Saddam'] },
    layout: {
      padding: {
        left: 0,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    // responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            stepSize: 10,
            beginAtZero: true,
            max: 100,
          },
        },
      ],
    },
    animation: {
      onComplete: function () {
        var chartInstance = this.chart,
          // console.log();

          ctx = chartInstance.ctx;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x + 10, bar._model.y + 5);
          });
        });
      },
    },
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    {
      barPercentage: 0.5,
      barThickness: 15,
      maxBarThickness: 15,
      minBarLength: 2,
      data: [10, 70, 40, 20],
      label: 'Your Selection',
      // backgroundColor: 'rgb(92, 145, 200)',
      hoverBackgroundColor: 'rgb(33, 80, 230)',
      // barThickness: 40,
      backgroundColor: [
        'rgb(92, 145, 2)',
        'rgb(92, 145, 200)',
        'rgb(92, 145, 200)',
        'rgb(92, 145, 200)',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {
    // console.log(this.chartLables);
    // console.log();
    let lebel = [];
    this.chartLables.forEach((element) => {
      lebel.push(element.value);
    });
    // console.log(lebel);
    this.barChartLabels = lebel;
  }

  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  // }
}
