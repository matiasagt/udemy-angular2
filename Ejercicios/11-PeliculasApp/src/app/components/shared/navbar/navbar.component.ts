import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) {

  }

  ngOnInit() {
  }

  buscarPelicula(texto: string) {
    if (texto.length) {
      this._router.navigate(['search', texto]);
    }
  }

}
