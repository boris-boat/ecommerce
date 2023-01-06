import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "https://fakestoreapi.com/products"
  constructor(private http: HttpClient) { }

  getAllProducts(filter?: string): Observable<Product[]> {
    if (filter) {
      return this.http.get<Product[]>(this.baseUrl + filter)
    }
    return this.http.get<Product[]>(this.baseUrl)

  }
  getOneProduct(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
  getCategories() {
    return this.http.get<string[]>(`https://fakestoreapi.com/products/categories`)

  }
}
