import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['term'];
      this.heroes = this._heroesService.buscarHeroes( this.termino );
    })
  }

}
