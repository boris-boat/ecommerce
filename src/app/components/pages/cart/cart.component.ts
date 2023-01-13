import { NotifierService } from 'angular-notifier';
import { stores } from './../locations/stores';
import { CartService } from 'src/app/services/cart.service';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartmodalcontentComponent } from '../../shared/cartmodalcontent/cartmodalcontent.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Cart = new Cart()
  totalPrice?: number
  constructor(private cartService: CartService, private modalService: NgbModal, private notifierService: NotifierService) { }
  forma: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    contact: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
  })
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
  formSubmit() {
    if (this.forma.valid) {

      const modalRef = this.modalService.open(CartmodalcontentComponent, { size: 'lg' })
      modalRef.componentInstance.total = this.totalPrice
      modalRef.componentInstance.formData = this.forma.value
      modalRef.componentInstance.cart = this.cartItems
      modalRef.componentInstance.close = this.modalService.dismissAll
    }
    else {
      this.notifierService.notify("error", "Please fill in all fields !")
    }

  }
}
