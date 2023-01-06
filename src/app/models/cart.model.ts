import { Product } from './product.model';
export class Cart {

    items: Product[];

    constructor(obj?: any) {

        this.items = (obj && obj.items) || [];

    }
}