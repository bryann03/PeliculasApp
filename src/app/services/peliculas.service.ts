import { Cast } from './../interfaces/Cast';
import { MovieDetails } from './../interfaces/MovieDetails';
import { Cartelera, Movie } from './../interfaces/Cartelera';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
   providedIn: 'root'
})
export class PeliculasService {

   private baseUrl = "https://api.themoviedb.org/3";
   private pagination = 1;
   public cargando: boolean = false

   get params() {
      return {
         api_key: 'dabb287e2325d95d2f8076ecbf9f3096',
         language: 'es-Es',
         page: this.pagination.toString()
      }
   }

   resetCarteleraPagination() {
      this.pagination = 1;
   }
   constructor(private http: HttpClient) { }

   //HACEMOS QUE DEVUELVA LA RESPUESTA TIPO 'Cartelera' PARA PODER MANEJARLA DIRECTAMENTE CON SUS ATRIBUTOS
   getCartelera(): Observable<Movie[]> {

      if (this.cargando) {
         //CON EL 'of()' TRANSFORMAMOS EL OBSERVABLE PARA QUE EMITA ESE ARRAY VACIO PARA PODER DEVOLVERLO
         return of([]);
      }

      this.cargando = true;
      return this.http.get<Cartelera>(`${this.baseUrl}/movie/now_playing?`, {
         params: this.params
      }).pipe(
         map((resp) => resp.results),
         // EL 'tap' EJECUTA EL CÓDIGO CADA VEZ QUE EL 'observable' EMITE UN VALOR
         tap(() => {
            this.pagination++;
            this.cargando = false;
         })
      )
   }

   buscarPeliculas(textPelicula: string): Observable<Movie[]> {
      //DESESTRUCTURAMOS LOS PARAMETROS PARA DECIRLE QUE EL 'page' SEA SOLO '1'
      const params = { ...this.params, page: '1', query: textPelicula }

      return this.http.get<Cartelera>(`${this.baseUrl}/search/movie`, {
         params
      }).pipe(
         map((resp) => resp.results)
      )
      //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
   }

   getPelicula(id: number) {
      return this.http.get<MovieDetails>(`${this.baseUrl}/movie/${id}`, {
         params: this.params
      }).pipe(
         catchError(error => of(null))
      )
   }

   getCast(id: number) {
      //https://api.themoviedb.org/3/movie/531219/credits?api_key=dabb287e2325d95d2f8076ecbf9f3096&language=en-US
      return this.http.get<Cast>(`${this.baseUrl}/movie/${id}/credits`, {
         params: this.params
      }).pipe(
         map(resp => resp.cast),
         catchError(error => of([]))
      )
   }
}
