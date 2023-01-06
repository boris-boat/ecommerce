import { CartService } from 'src/app/services/cart.service';
import { Product } from './../../../models/product.model';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product = new Product()
  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getOneProduct(this.route.snapshot.params["id"]).subscribe((response: Product) => this.product = new Product(response))
  }
  addToCart(item: Product) {
    this.cartService.addToCart(item)
  }
}
