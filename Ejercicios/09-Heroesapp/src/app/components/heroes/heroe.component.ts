import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface'
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  }

  private nuevo: boolean = false;
  private id: string;

  constructor(private _heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.nuevo = this.id == 'nuevo';
      if (!this.nuevo) {
        this._heroesService.getHeroe(this.id)
          .subscribe(heroe => this.heroe = heroe,
          error => console.error(error));
      }
    })
  }

  ngOnInit() {
  }

  guardar() {
    if (this.nuevo) {
      this._heroesService.nuevoHeroe(this.heroe).subscribe(data => {
        this.router.navigate(['/heroe', data.name]);
      }, error => console.error(error));
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe(heroe => console.log(heroe),
        error => console.error(error));
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }

}
