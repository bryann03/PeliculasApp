import { Cartelera } from './../interfaces/Cartelera';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
   providedIn: 'root'
})
export class PeliculasService {

   private baseUrl = "https://api.themoviedb.org/3";
   private pagination = 1;

   get params() {
      return{
         api_key: 'dabb287e2325d95d2f8076ecbf9f3096',
         language: 'es-Es',
         page: this.pagination.toString()
      }
   }

   constructor(private http: HttpClient) { }

   //HACEMOS QUE DEVUELVA LA RESPUESTA TIPO 'Cartelera' PARA PODER MANEJARLA DIRECTAMENTE CON SUS ATRIBUTOS
   getCartelera(): Observable<Cartelera> {
      return this.http.get<Cartelera>(`${this.baseUrl}/movie/now_playing?`, {
         params: this.params
      }).pipe(
         // EL 'tap' EJECUTA EL CÓDIGO CADA VEZ QUE EL 'obervable' EMITE UN VALOR
         tap( () => {
            this.pagination++;
         })
      )
   }
}
