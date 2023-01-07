import { Product } from './../../../models/product.model';
import { Cart } from './../../../models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cart: Cart = new Cart()
  query: FormControl = new FormControl("")
  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.cartService.getCart()
    this.cartService.cartObservable.subscribe((res: Cart) => this.cart = res)
  }
  changeQuantity(item: Product, action: number) {
    let index = this.cart.items.findIndex((itemInCart) => item.id === itemInCart.id)
    if (item.quantity + action === 0) {
      this.cart.items.splice(index, 1)
      this.cartService.updateCart(this.cart)

      return
    }
    item.quantity = item.quantity + action
    this.cart.items[index] = item
    this.cartService.updateCart(this.cart)
  }
  searchProducts() {
    this.route.navigate(["/search", this.query.value])
    this.query.reset()
    return false
  }
}
