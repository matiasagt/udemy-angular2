import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: any;
  backTo: string = '';
  busqueda: string;


  constructor(private _activatedRoute: ActivatedRoute,
    private _peliculasService: PeliculasService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.backTo = params['pag'];
      if (params['busqueda']) {
        this.busqueda = params['busqueda'];
      }
      this._peliculasService.findFilm(params['id']).subscribe(data => {
        this.movie = data;
      });
    })
  }

}
