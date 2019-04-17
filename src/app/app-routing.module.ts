import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { ShoppingCartComponent } from "./component/store/shopping-cart/shopping-cart.component";
import { OrderSummaryComponent } from "./component/store/order-summary/order-summary.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
      path: 'shoppingCart',
      component: ShoppingCartComponent
  },
  {
    path: 'orderSummary',
    component: OrderSummaryComponent
  },
  {
    path: 'about',
    component: AboutComponent    
  },    
  // If none of the above, redirect to home page
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
