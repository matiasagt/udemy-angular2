import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  genere: string;
  films: any;

  constructor(private peliculasService: PeliculasService) {
    this.mostrarEstrenos();
  }

  mostrarEstrenos() {
    this.genere = 'estrenos';
    this.peliculasService.getEstrenos().subscribe(data => this.films = data);
  }

  mostrarPopulares() {
    this.genere = 'populares';
    this.peliculasService.getPopulares().subscribe(data => this.films = data);
  }

  mostrarInfantiles() {
    this.genere = 'infantiles';
    this.peliculasService.getInfantiles().subscribe(data => this.films = data);
  }

  ngOnInit() {
  }

}
