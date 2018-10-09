import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  films: any;
  termino: string = "";

  constructor(private _peliculasService: PeliculasService) { }

  ngOnInit() {

  }

  buscarPelicula() {
    if (this.termino.length) {
      this._peliculasService.buscarPelicula(this.termino).subscribe(data => this.films = data)
    }
  }

}
