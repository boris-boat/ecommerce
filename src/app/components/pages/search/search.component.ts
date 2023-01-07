import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products?: Product[]
  filter: string = ""
  searching: boolean = true
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.filter = params["query"]
      this.getFilteredItems()

    })

  }
  getFilteredItems() {
    this.productService.getAllProducts().subscribe((response: Product[]) =>
      this.products = response.filter((product) => {

        if (product.title.toLowerCase().includes(this.filter.toLowerCase())) return product
        else {
          return null
        }

      })
    )
  }
}
