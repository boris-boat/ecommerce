import { Product } from './../models/product.model';
import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartObservable = new BehaviorSubject(new Cart())
  totalPriceObservable = new BehaviorSubject(0)
  cart = new Cart()
  constructor(private notifierService: NotifierService) { }
  getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")!)
    if (cart) {
      this.cart = cart
      this.cartObservable.next(cart)
    }
    this.getTotalPrice()

  }
  addToCart(item: Product) {
    let index = this.cart.items.findIndex((itemInCart) => item.id === itemInCart.id)
    if (index == -1) {
      this.cart.items.push(item)
    }
    if (index >= 0) {
      this.cart.items[index].quantity++
    }
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.notifierService.notify("success", "Item added")

    this.getCart()
  }
  updateCart(cart: Cart) {
    this.cart = cart
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.getCart()
    this.getTotalPrice()
  }
  getTotalPrice() {
    let total = 0
    this.cart.items.forEach((item) =>
      total += (item.price * item.quantity)
    )
    this.totalPriceObservable.next(total)
  }
}
