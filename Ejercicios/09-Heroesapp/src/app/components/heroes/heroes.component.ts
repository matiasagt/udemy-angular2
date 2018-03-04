import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface'
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading:boolean = true;

  constructor(private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this._heroesService.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
        this.loading = false;
      })
  }

  ngOnInit() {
  }

  borrarHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$)
      .subscribe(res => {
        if( res ){
          console.error( res )
        }else{
          delete this.heroes[key$];
        }
      });
  }

}
