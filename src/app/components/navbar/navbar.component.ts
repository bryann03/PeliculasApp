import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   constructor(private router: Router) { }

   ngOnInit(): void {
   }

   buscarPelicula(textBuscar: string) {
      textBuscar = textBuscar.trim();
      if (textBuscar.length > 0) {
         this.router.navigate(['/buscar', textBuscar]);
      }
   }

}
