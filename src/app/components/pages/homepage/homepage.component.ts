import { Cart } from './../../../models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { Product } from './../../../models/product.model';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  promotedItems: Product[] = []
  constructor(private productService: ProductService, private cartService: CartService) { }
  tmp: Cart = new Cart()
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res: Product[]) => {

      this.promotedItems = res.map((product) => new Product(product))
      this.promotedItems.length = 4
    })
    this.cartService.getCart()
    this.cartService.cartObservable.subscribe(res => {
      this.tmp = new Cart(res)
    })
  }
  addToCart(item: Product) {
    this.cartService.addToCart(item)
  }
}
