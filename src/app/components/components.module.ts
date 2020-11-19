import { PipesModule } from './../pipes/pipes.module';
import { PosterPipe } from './../pipes/poster.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
   declarations: [
      NavbarComponent,
      SlideshowComponent,
      PeliculasPosterGridComponent
   ],
   exports: [
      NavbarComponent,
      SlideshowComponent,
      PeliculasPosterGridComponent
   ],
   imports: [
      CommonModule,
      RouterModule,
      RatingModule,
      PipesModule
   ]
})
export class ComponentsModule { }
