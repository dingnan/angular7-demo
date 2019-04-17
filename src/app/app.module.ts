import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { DemoStoreComponent } from './component/demo-store/demo-store.component';
import { ProductComponent } from './component/store/product/product.component';
import { ProductDetailComponent } from './component/store/product-detail/product-detail.component';
import { ShoppingCartComponent } from './component/store/shopping-cart/shopping-cart.component';
import { OrderSummaryComponent } from './component/store/order-summary/order-summary.component';
import { ProductListService } from './service/product-list.service';
import { ProductDetailService } from './service/product-detail.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    DemoStoreComponent,
    ProductComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductListService, ProductDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
