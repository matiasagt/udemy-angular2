import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: any;
  tracks: any[];

  constructor(private _activatedRoute: ActivatedRoute,
    private _peliculasService: PeliculasService,
    private _location: Location) { }

  ngOnInit() {
    this._activatedRoute.params.map(param => param['id'])
      .subscribe(id => {
        this._peliculasService.findFilm(id).subscribe(data => {
          this.movie = data;
          this._peliculasService.getElenco(id).subscribe(elenco => {
            this.movie.cast = elenco.cast;
          })
        });
      })
  }

}
