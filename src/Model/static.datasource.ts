import { Product } from './product.model';
import { Observable, from } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Baby", "Cat01", "plan, etc.", 1000),
        new Product(2, "T-shirt", "Cat01", "Beer", 200),
        new Product(3, "Trouser", "Cat01", "Beer", 200),
        new Product(4, "Cupple", "Cat01", "Sand", 20),
        new Product(5, "Sandwitch", "Cat01", "Sand", 50),
        new Product(6, "Cupple", "Cat01", "Sand", 2),
        new Product(7, "Soy Soy", "Cat04", "Sand", 2)
    ];

    getProducts() : Observable<Product[]> {
        return from([this.products]);
    }

}