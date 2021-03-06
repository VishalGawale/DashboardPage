import { Component, OnInit } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [] as any;
  cards =[] as any;

  constructor(private dashboardService : DashboardService) { }

  ngOnInit() {
  
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();

  }

}
