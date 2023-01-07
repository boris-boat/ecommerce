import { stores } from './../locations/stores';
import { CartService } from 'src/app/services/cart.service';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart = new Cart()
  totalPrice?: number
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartObservable.subscribe((res: Cart) => {
      this.cartItems = res
    })
    this.cartService.totalPriceObservable.subscribe((res) => this.totalPrice = res)

  }
  changeQuantity(item: Product, action: number) {
    let index = this.cartItems.items.findIndex((itemInCart) => item.id === itemInCart.id)
    if (item.quantity + action === 0) {
      this.cartItems.items.splice(index, 1)
      this.cartService.updateCart(this.cartItems)

      return
    }
    item.quantity = item.quantity + action
    this.cartItems.items[index] = item
    this.cartService.updateCart(this.cartItems)
  }

}
