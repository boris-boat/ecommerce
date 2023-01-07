import { Store } from './../../../models/store.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { stores } from './stores';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  stores = stores
  activeStore: Store = stores[0]
  @ViewChild('buttonWrapper') buttonContainer: any

  constructor() { }

  ngOnInit(): void {

  }
  getStore(index: number, button?: any) {
    for (let i = 0; i < this.buttonContainer?.nativeElement.children.length; i++) {
      this.buttonContainer.nativeElement.children[i].classList = 'loc-button'
    }
    button?.classList.add("active")
    this.activeStore = stores[index]
  }
}
