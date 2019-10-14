import { Product } from './product.model'

@Injectable()
export class StaticDatasource {
    private products: Product[] = [
        new Product(1, "Heng", "Cat01", "Beer", "12000$")
    ]

}