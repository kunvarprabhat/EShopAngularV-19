import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { title } from 'process';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule as owlCarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports:[
    CommonModule, 
    CarouselModule,
    owlCarouselModule,
    MatCardModule,
  ]
})
export class HomePageComponent {
  myInterval: number = 1000

  // customOptions:OwalOptions = {
  customOptions:OwlOptions = {
    loop: true,
    mouseDrag: true, 
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
    autoplay:true,
    autoplaySpeed:1000
  };
  slidestore: any[] = [
    {
      id: '6',
      src: 'asset/Wearble Technology.jpg',
      alt: 'Wearble Technology',
      title:'Wearble Technology',
    }
  ]
}
