import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datasource';
import { Order } from './order.module';
import { Injectable } from "@angular/core";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource) {

    }

    getOrder() : Order[] {
        return this.orders;
    }

    saveOrder(Order: Order): Observable<Order> {
        return this.dataSource.saveOrder(Order);
    }
}