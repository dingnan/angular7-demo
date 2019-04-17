import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.sass']
})
export class OrderSummaryComponent implements OnInit {
  constructor() { 
    this.placeOrders();
  }

  ngOnInit() {
  }

  placeOrders(): any {
    //todo: save orders

    sessionStorage.clear();
  }
}