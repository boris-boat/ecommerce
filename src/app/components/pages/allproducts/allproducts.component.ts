import { Product } from './../../../models/product.model';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  products: Product[] = []
  categories: string[] = []
  @ViewChild('categoryContainer') buttonContainer: any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategories()
  }
  getAllProducts(filter?: string, button?: any) {
    //clearing active from other buttons
    for (let i = 0; i < this.buttonContainer?.nativeElement.children.length; i++) {
      this.buttonContainer.nativeElement.children[i].classList = 'category-button'
    }
    button?.classList.add("active")

    if (filter) {
      this.productService.getAllProducts(`/category/${filter}`).subscribe((response: Product[]) => this.products = response.map((item) => new Product(item)))
    }
    else this.productService.getAllProducts().subscribe((response: Product[]) => this.products = response.map((item) => new Product(item)))
  }
  getCategories() {
    this.productService.getCategories().subscribe((response: string[]) => {
      this.categories = response
    })
  }
}
