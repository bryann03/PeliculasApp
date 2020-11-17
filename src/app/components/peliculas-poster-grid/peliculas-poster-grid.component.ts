import { Movie } from './../../interfaces/Cartelera';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
   selector: 'app-peliculas-poster-grid',
   templateUrl: './peliculas-poster-grid.component.html',
   styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

   //RECIBIMOS LAS MOVIES DEL COMPONENTE PADRE
   @Input() movies: Movie[];

   constructor(private peliculasService: PeliculasService) { }

   ngOnInit(): void {
   }

}
