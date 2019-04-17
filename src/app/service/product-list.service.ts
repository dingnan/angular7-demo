import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONSTANTS } from '../app.constants';
import { map } from 'rxjs/operators' ;
import { of } from 'rxjs';

@Injectable()
export class ProductListService {
  cache: Map<string, any>;

  constructor(private http: HttpClient) { 
    this.cache = new Map<string, any>();
  }

  getProductList() {
    const data = this.cache.get(CONSTANTS.productListURL);
    if (!data) {
      return this.http.get(CONSTANTS.productListURL).pipe(map(res => {
        this.cache.set(CONSTANTS.productListURL, res);
        return res;
      }));
    } else {
      return of(data);
    }
  }
}