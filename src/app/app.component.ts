import { PeliculasService } from './services/peliculas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeliculasApp';

  constructor( private peliculasService: PeliculasService ){
    this.peliculasService.getCartelera()
        .subscribe(resp => {
          console.log(resp);
        })
  }
}
