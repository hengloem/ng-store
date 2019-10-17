import { Order } from './../../Model/order.module';
import { OrderRepository } from './../../Model/order.repository';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public repository: OrderRepository, public order: Order) { }

  ngOnInit() {
  }

  submitOrder(form : NgForm) {
    this.submitted = true;
    if(form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })
    }
  }
}
