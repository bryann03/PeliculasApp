import { Movie } from './../../interfaces/Cartelera';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-peliculas-poster-grid',
   templateUrl: './peliculas-poster-grid.component.html',
   styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

   //RECIBIMOS LAS MOVIES DEL COMPONENTE PADRE, OSEA DEL COMPONENTE DONDE LE ESTEMOS ENVIADO EL LISTADO DE 'movies'
   @Input() movies: Movie[];

   constructor(private router: Router) { }

   ngOnInit(): void {
   }

   verDetalle(id: number){
      this.router.navigate(['/pelicula', id]);
   }

}
