import { Order } from './order.module';
import { Product } from './product.model';
import { Observable, from } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "a", "Cat01", "text 1", 10),
        new Product(2, "b", "Cat01", "text 1", 10),
        new Product(3, "c", "Cat02", "text 2", 20),
        new Product(4, "d", "Cat02", "text 2", 20),
        new Product(5, "e", "Cat03", "text 3", 30),
        new Product(6, "f", "Cat03", "text 3", 30),
        new Product(7, "g", "Cat04", "text 4", 40),
        new Product(8, "h", "Cat04", "text 4", 40)
    ];

    getProducts() : Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(Order: Order) : Observable<Order> {
        console.log(JSON.stringify(Order));

        return from([Order]);
    }

}