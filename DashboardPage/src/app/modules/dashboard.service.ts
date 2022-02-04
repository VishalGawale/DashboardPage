import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart(){
    return [{
      name: 'Ravi',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Ankit',
      data: [2, -2, -3, 2, 1]
  }, {
      name: 'Vishal',
      data: [3, 4, 4, -2, 5]
  }];
 }

 cards(){
    return  [10,15,20,25];
 }
}
