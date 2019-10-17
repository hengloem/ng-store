import { Product } from './../../Model/product.model';
import { ProductRepository } from './../../Model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';
import { Router } from '@angular/router';
@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = null;
  public productPerPage = 4;
  public selectedPage = 1;

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router) { }

  ngOnInit() {
  }

  // 
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productPerPage);
  }

  // 
  get categories(): string[] {
    return this.repository.getCategories();
  }

  // 
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  // 
  changePage(newPage: number) {
    this.selectedPage = newPage
  }

  // 
  changePageSize(newSize: number) {
    this.productPerPage = Number(newSize);
    this.changeCategory("1");
  }

  // 
  get pageNumbers(): Number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productPerPage))
      .fill(0).map((x, i) => i + 1);
  }

  // 
  addProductToCart(Product: Product) {
    this.cart.addLine(Product);
    this.router.navigateByUrl("/cart");
  }
}
