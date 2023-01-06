import { Product } from './../models/product.model';
import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartObservable = new BehaviorSubject(new Cart())
  cart = new Cart()
  constructor() { }
  getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")!)
    if (cart) {
      this.cart = cart
      this.cartObservable.next(cart)
    }
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
    this.getCart()
  }
  updateCart(cart: Cart) {
    this.cart = cart
    localStorage.setItem("cart", JSON.stringify(this.cart))
    this.getCart()
  }
}
