import { Cartelera } from './../interfaces/Cartelera';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  //HACEMOS QUE DEVUELVA LA RESPUESTA TIPO 'Cartelera' PARA PODER MANEJARLA DIRECTAMENTE CON SUS ATRIBUTOS
  getCartelera(): Observable<Cartelera> {
    return this.http.get<Cartelera>('https://api.themoviedb.org/3/movie/now_playing?api_key=dabb287e2325d95d2f8076ecbf9f3096&language=en-ES&page=1');
  }
}
