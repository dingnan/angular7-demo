import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductListService } from '../../service/product-list.service';
import {map, filter, reduce} from 'rxjs/operators';

@Component({
  selector: 'demo-store',
  templateUrl: './demo-store.component.html',
  styleUrls: ['./demo-store.component.sass']
})
export class DemoStoreComponent implements OnInit, OnDestroy {

  products = [];
  orders = [];
  constructor(private productListService: ProductListService) { 
    productListService.getProductList()
     .subscribe(items => {
        let data = <Array<any>>items;
        // todo: if items is empty, use local model

        // add random price to product
        data.forEach(p => {
          this.products.push({
            id: p.id,
            name: 'Item' + p.id,
            price: this.getRandomPrice() 
          });
        })
      },
      err => console.error(err),
      () => console.log('done loading products')
    );

    this.getOrders();
  }

  getRandomPrice() {
    const r = this.getRandomInt(10, 100);
    const price = Math.round((r + Math.random()) * 100) / 100;
    return price;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getOrders() {
    const item = sessionStorage.getItem('orders');
    if (item) {
      this.orders = JSON.parse(item);
    }
  }

  ngOnInit() {
  }

  addToCart(product) {
    this.orders.push(product);
  }

  ngOnDestroy() {
    sessionStorage.setItem('orders', JSON.stringify(this.orders));
  }
}
