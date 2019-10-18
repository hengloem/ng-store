import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
//import { StaticDataSource } from './static.datasource';
import { Order } from './order.module';
import { Injectable } from "@angular/core";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) {

    }

    loadOrder() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => this.orders = orders);
    }

    getOrder(): Order[] {
        if (!this.loaded) {
            return this.orders;
        }
        return this.orders;
    }

    saveOrder(Order: Order): Observable<Order> {
        return this.dataSource.saveOrder(Order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order)
            .subscribe(order => {
                this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
            });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id)
            .subscribe(order => {
                this.orders.splice(this.orders.findIndex(o => o.id == id), 1);
            });
    }
}