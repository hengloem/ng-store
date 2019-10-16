import { Product } from './../../Model/product.model';
import { ProductRepository } from './../../Model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repository: ProductRepository) { }

  ngOnInit() {
  }

  get products() : Product[] {
    return this.repository.getProducts();
  }

  get categories() : string[] {
    return this.repository.getCategories();
  }

}
