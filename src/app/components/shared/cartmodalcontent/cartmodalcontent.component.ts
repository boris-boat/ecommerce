import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartmodalcontent',
  templateUrl: './cartmodalcontent.component.html',
  styleUrls: ['./cartmodalcontent.component.scss']
})
export class CartmodalcontentComponent implements OnInit {
  @Input() total: number = 0
  @Input() formData: any
  @Input() cart: Cart = new Cart()
  constructor() { }

  ngOnInit(): void {

  }

}
