import { Cast, CastElement } from './../../interfaces/Cast';
import { MovieDetails } from './../../interfaces/MovieDetails';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { combineLatest } from 'rxjs/operators';

@Component({
   selector: 'app-pelicula',
   templateUrl: './pelicula.component.html',
   styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

   movie: MovieDetails;
   cast: CastElement[] = [];

   constructor(private activatedRoute: ActivatedRoute,
      private peliculasService: PeliculasService,
      private location: Location,
      private router: Router) { }

   ngOnInit(): void {
      //EXISTEN DOS FORMAS DE EXTRAER EL PARÁMETRO QUE VIENE EN LA RUTA

      //FORMA 1: ACCEDIENDO DIRECTAMENTE
      /* const id = this.activatedRoute.snapshot.params.id; */

      //FORMA 2: DESESTRUCTURANDO --> ESTO NOS FACILITA CUÁNDO TENEMOS VARIOS PARÁMETROS
      const { id } = this.activatedRoute.snapshot.params;

      //AGRUPACIÓN DE OVSERVABLES, DEVUELVE TODA LA INFO DE TODOS LOS OVSERVABLES EN FORMA DE ARRAY DE OBJETOS
      // --> DEPRECATED
      /*combineLatest([

         this.peliculasService.getPelicula(id),
         this.peliculasService.getCast(id)

      ]).subscribe( ( [pelicula, cast] ) => {
         console.log(pelicula, cast);
      })*/

      this.peliculasService.getPelicula(id)
         .subscribe(movieResp => {
            if(!movieResp){
               //REDIRIGIMOS A LA PANTALLA 'home'
               this.router.navigateByUrl('/home');
               return;
            }
            this.movie = movieResp;
         });

      this.peliculasService.getCast(id)
         .subscribe(castResp => {
            this.cast = castResp;
         });
   }

   volver() {
      //CON ESTA INTRUCCIÓN REGRESAMOS A LA PANTALLA ANTERIOR, INDEPENDIENTEMENTE DE CUÁL HAYA SIDO
      this.location.back();
   }
}
