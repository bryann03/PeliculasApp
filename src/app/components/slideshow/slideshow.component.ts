import { Movie } from './../../interfaces/Cartelera';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
   selector: 'app-slideshow',
   templateUrl: './slideshow.component.html',
   styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

   //RECIBE EL LISTADO DEL COMPONENTE PADRE
   @Input() movies: Movie[];
   private mySwiper: Swiper;

   constructor() { }

   ngOnInit(): void {
      console.log(this.movies[0]);
   }

   ngAfterViewInit() {
      this.mySwiper = new Swiper('.swiper-container', {
         // Optional parameters
         direction: 'horizontal',
         loop: true
      })
   }

   onSlidePrev(){
      this.mySwiper.slidePrev();
      this.mySwiper.slidePrev();
   }

   onSlideNext(){
      this.mySwiper.slideNext();
   }

}
