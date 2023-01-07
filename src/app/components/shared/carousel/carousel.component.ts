import { Component, OnInit } from '@angular/core';
import { images } from './images';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = images
  constructor() { }

  ngOnInit(): void {
  }

}
