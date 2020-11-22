import { Movie } from './../../interfaces/Cartelera';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

   public movies: Movie[] = [];
   public moviesSlideShow: Movie[] = [];


   //PARA HACER EL 'infinite scroll' NECESITAMOS RECOGER LA INFO DEL SCROLL
   //RECOJEMOS LA POSICIÓN ACTUAL DEL SCROLL Y EL SCROLL MÁXIMO QUE SE PUEDE HACER
   @HostListener('window:scroll', ['$event'])
   onScroll() {
      const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
      const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

      //SI SUPERA EL SCROLL MÁXIMO, LLAMAMOS AL SERVICIO Y TRAEMOS MAS PELÍCULAS
      if (pos > max - 200) {
         //CONTROLAMOS QUE NO HAGA TANTAS PETICIONES A LA API AL HACER EL SCROLL INFINITO
         if (!this.peliculaService.cargando) {
            this.peliculaService.getCartelera()
               .subscribe((resp => {
                  this.movies.push(...resp);
               }))
         }
      }
   }

   constructor(private peliculaService: PeliculasService) { }

   ngOnInit(): void {
      this.peliculaService.getCartelera()
         .subscribe(resp => {
            // console.log(resp.results);
            this.moviesSlideShow = resp;
            this.movies = resp;
         })
   }

   ngOnDestroy() {
      this.peliculaService.resetCarteleraPagination();
   }

}
