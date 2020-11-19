import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-buscar',
   templateUrl: './buscar.component.html',
   styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

   constructor(private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService) { }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
         console.log(params.texto);
         this.peliculasService.buscarPeliculas(params.texto)
            .subscribe((movies => {
               console.log(movies[0].title);
            }))
      })
   }

}
