import { Product } from './product.model';
import { Observable, from } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Milk", "Cat01", "Fresh", 12000),
        new Product(2, "ABC", "Cat02", "Beer", 2000),
        new Product(3, "Anchor", "Cat02", "Beer", 2500)
    ];

    getProducts() : Observable<Product[]> {
        return from([this.products]);
    }

}