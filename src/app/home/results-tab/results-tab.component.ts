import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

// *For horizontal bar chart working
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-results-tab',
  templateUrl: './results-tab.component.html',
  styleUrls: ['./results-tab.component.css'],
})
export class ResultsTabComponent implements OnInit {
  @Input() chartData;
  @Input() question;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var name = data.labels[tooltipItem.index];
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          return ` ${name}: ${currentValue}%`;
        },
      },
    },
    // plugins: {
    //   datalabels: {
    //     formatter: (value, ctx) => {
    //       const label = ctx.chart.data.labels[ctx.dataIndex];
    //       return label;
    //     },
    //   },
    // },
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];
  //

  constructor() {}

  ngOnInit() {
    console.log(this.chartData);
    console.log(this.question);
    this.setLabels(); //*For setting labels of the chart
    this.setData();
  }

  setLabels() {
    let label = [];
    this.chartData.forEach((element) => {
      label.push(element.OptionText);
    });
    this.pieChartLabels = label;
  }

  setData() {
    // console.log(this.chartData);
    let data = [];
    this.chartData.forEach((element) => {
      let pct = Number(element.Pct);
      data.push(pct);
    });
    // console.log(data);
    this.pieChartData = data;
  }

  changeLegendPosition() {
    this.pieChartOptions.legend.position =
      this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }
  // addSlice() {
  //   this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
  //   this.pieChartData.push(400);
  //   this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  // }

  // removeSlice() {
  //   this.pieChartLabels.pop();
  //   this.pieChartData.pop();
  //   this.pieChartColors[0].backgroundColor.pop();
  // }

  // *For horizontal bar chart which is working fine.
  // public barChartOptions: ChartOptions = {
  //   // title: { display: true, text: ['Dilshad', 'Saddam'] },
  //   layout: {
  //     padding: {
  //       left: 0,
  //       right: 20,
  //       top: 0,
  //       bottom: 0,
  //     },
  //   },
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   // responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     yAxes: [
  //       {
  //         gridLines: {
  //           display: false,
  //         },
  //       },
  //     ],
  //     xAxes: [
  //       {
  //         ticks: {
  //           stepSize: 10,
  //           beginAtZero: true,
  //           max: 100,
  //         },
  //       },
  //     ],
  //   },
  //   animation: {
  //     onComplete: function () {
  //       var chartInstance = this.chart,
  //         // console.log();

  //         ctx = chartInstance.ctx;
  //       ctx.textAlign = 'center';
  //       ctx.textBaseline = 'bottom';
  //       this.data.datasets.forEach(function (dataset, i) {
  //         var meta = chartInstance.controller.getDatasetMeta(i);
  //         meta.data.forEach(function (bar, index) {
  //           var data = dataset.data[index];
  //           ctx.fillText(data, bar._model.x + 10, bar._model.y + 5);
  //         });
  //       });
  //     },
  //   },
  // };
  // public barChartLabels: Label[] = [];
  // public barChartType: ChartType = 'horizontalBar';
  // public barChartLegend = true;

  // public barChartData: ChartDataSets[] = [
  //   {
  //     barPercentage: 0.5,
  //     barThickness: 15,
  //     maxBarThickness: 15,
  //     minBarLength: 2,
  //     data: [],
  //     label: 'Your Selection',
  //     backgroundColor: 'rgb(92, 145, 200)',
  //     hoverBackgroundColor: 'rgb(33, 80, 230)',
  //     // barThickness: 40,
  //     // backgroundColor: [],
  //   },
  // ];
  // *Working fine

  // ngOnInit(): void {
  //   this.setLabels(); //*For setting labels of the chart
  //   this.setData(); //*For setting the data
  // }
  // setLabels() {
  //   let label = [];
  //   this.chartData.forEach((element) => {
  //     label.push(element.OptionText);
  //   });
  //   this.barChartLabels = label;
  // }
  // setData() {
  //   console.log(this.chartData);
  //   let data = [];
  //   this.chartData.forEach((element) => {
  //     data.push(Number(element.Pct));
  //   });
  //   console.log(data);
  //   this.barChartData[0].data = data;
  // }
}
