import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { TooltipModule } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};
  
  @Input() data =[];

  constructor() { }

  ngOnInit(): void {
    
    this.chartOptions= {
      chart: {
          type: 'column',
          backgroundColor:null,
          borderWidth:0,
          margin :[2,2,2,2]        
      },
      title: {
          text: null
      },
      xAxis: {
          categories: []
      },
      credits: {
          enabled: false
      },
      series: [{
        name: 'Work',
        data: this.data
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
