import { Product } from './product.model';
import { Cart } from './../app/store/cart.model';
import { Order } from './order.module';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = 4210;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    // User authentication
    authenticate(user: string, pass: string): Observable<boolean> {
        console.log(user, pass);
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

    // Dealing with Product and Returning Observable<Product>
    // ---> CRUD Operation <---
    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>
            (this.baseUrl + "products", product, this.getOptions());
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>
            (this.baseUrl + "products");
    }

    updateProduct(product): Observable<Product> {
        return this.http.put<Product>
            (`${this.baseUrl}products/${product.i}`, product, this.getOptions());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>
            (`${this.baseUrl}products/${id}`, this.getOptions());
    }

    // Dealing with Order and Returning Observable<Order>
    // ---> CRUD Operation <---
    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>
            (this.baseUrl + "orders", this.getOptions());
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>
            (this.baseUrl + "orders", order);
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>
            (`${this.baseUrl}orders/${order.id}`, this.getOptions());
    }

    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>
            (`${this.baseUrl}orders/${id}`, this.getOptions());
    }
    // Request Header
    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }
}