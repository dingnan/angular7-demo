import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONSTANTS } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  cache: Map<string, any>;

  constructor(private http: HttpClient) { 
    this.cache = new Map<string, any>();
  }

  getProductDetail(id:number) {
    const url = CONSTANTS.productDetailURL.replace('{id}', id.toString());
    const result = this.http.get(url);
    this.cache.set(url, result);
    return result;
  }
}
