import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {
  orders = [];
  totalPrice: number;

  constructor() { 
    this.getOrders();
    this.totalPrice = this.getTotalPrice();
  }

  ngOnInit() {
  }

  getOrders() {
    const item = sessionStorage.getItem('orders');
    if (item) {
      this.orders = JSON.parse(item);
    }
  }

  removeOrderItem(order) {
    const index = this.orders.indexOf(order);
    if (index > -1) {
        this.orders.splice(index, 1);
        sessionStorage.setItem('orders', JSON.stringify(this.orders));
        this.totalPrice = this.getTotalPrice();
    }
  }

  getTotalPrice() {
    let total = this.orders.reduce((sum, current) => {
      return sum + current.price}, 0);
    return total;
  }
}

