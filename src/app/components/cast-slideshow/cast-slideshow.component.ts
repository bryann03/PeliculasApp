import { Swiper } from 'swiper';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CastElement } from 'src/app/interfaces/Cast';

@Component({
   selector: 'app-cast-slideshow',
   templateUrl: './cast-slideshow.component.html',
   styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

   @Input() cast: CastElement[];
   private mySwiper: Swiper;
   constructor() { }

   ngOnInit(): void {
   }

   ngAfterViewInit(){
      this.mySwiper = new Swiper('.swiper-container', {
         slidesPerView: 5,
         freeMode: true,
         spaceBetween: 15
      })
   }
}
