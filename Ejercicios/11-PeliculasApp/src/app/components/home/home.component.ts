import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  infantiles: any;

  constructor(private peliculasService: PeliculasService) {
    this.mostrarEstrenos();
    this.mostrarPopulares();
    this.mostrarInfantiles();
  }

  mostrarEstrenos() {
    this.peliculasService.getEstrenos().subscribe(data => this.cartelera = data);
  }

  mostrarPopulares() {
    this.peliculasService.getPopulares().subscribe(data => this.populares = data);
  }

  mostrarInfantiles() {
    this.peliculasService.getInfantiles().subscribe(data => this.infantiles = data);
  }

  ngOnInit() {
  }

}
