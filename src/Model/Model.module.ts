import { RestDataSource } from './rest.datasource';
import { OrderRepository } from './order.repository';
import { Order } from './order.module';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './../app/store/cart.model';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository,
        Cart,
        Order,
        OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource },
        RestDataSource, AuthService
    ]
})
export class ModelModule {
    
}