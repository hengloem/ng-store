import { CheckoutComponent } from './../checkout/checkout.component';
import { CartDetailsComponent } from './../cart-details/cart-details.component';
import { ModelModule } from './../../Model/Model.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailsComponent,
        CheckoutComponent
    ],
    exports: [
        StoreComponent,
        CartDetailsComponent,
        CheckoutComponent
    ]
})
export class StoreModule { }