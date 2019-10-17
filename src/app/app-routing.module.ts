import { StoreFirstGuard } from './storefirst.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  {path: "store", component:StoreComponent, canActivate: [StoreFirstGuard]},
  {path: "cart", component: CartDetailsComponent, canActivate: [StoreFirstGuard]},
  {path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
  {path: "admin",
    loadChildren: "./admin/admin.module#AdminModule",
    canActivate: [StoreFirstGuard]
  },
  {path: "**", redirectTo:"/store"}
];

@NgModule({
  imports: [BrowserModule, StoreModule,  RouterModule.forRoot(routes)],
  providers: [StoreFirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
