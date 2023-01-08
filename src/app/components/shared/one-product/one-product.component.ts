import { CartService } from 'src/app/services/cart.service';
import { Product } from './../../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {
  @Input() item: Product = new Product()
  constructor(private cartService: CartService,) { }

  ngOnInit(): void {
  }
  addToCart(item: Product) {
    this.cartService.addToCart(new Product(item))
  }
}
