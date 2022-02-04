import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output() toogleSidebarForMe: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void { }

  toggleSideBar(){
    this.toogleSidebarForMe.emit();

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }

}
