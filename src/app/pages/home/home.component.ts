import { Movie } from './../../interfaces/Cartelera';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculaService.getCartelera()
      .subscribe(resp => {
        // console.log(resp.results);
        this.movies = resp.results;
      })
  }

}
