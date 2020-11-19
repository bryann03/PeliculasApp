import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'poster'
})
export class PosterPipe implements PipeTransform {

   //PIPE PARA FILTRAR LA IMAGEN, PARA QUE SOLO PASEN LOS PATH QUE TENGAN ALGO
   transform(poster: string): string {
      if(poster){
         return `https://image.tmdb.org/t/p/w500${ poster }`;
      }
      else{
         return './assets/no-image.jpg';
      }
   }

}
