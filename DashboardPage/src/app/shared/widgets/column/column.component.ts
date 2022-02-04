import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  chartOptions = {};

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions= {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Task Status'
      },
      xAxis: {
          categories: ['Task-1', 'Task-2', 'Task-3', 'Task-4']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Ravi',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Ankit',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Vishal',
          data: [3, 4, 4, -2, 5]
      }]
  };

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  },300);
  }

}
