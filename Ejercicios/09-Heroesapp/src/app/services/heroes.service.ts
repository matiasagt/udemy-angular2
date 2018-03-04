import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {

  heroesURL: string = "https://heroesapp-3ed6e.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-3ed6e.firebaseio.com/heroes/";

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesURL, body, { headers }).map(
      res => {
        return res;
      })
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${ this.heroeURL }/${ key$ }.json`

    return this.http.put(url , body, { headers }).map(
      res => {
        return res;
      })
  }

  getHeroe(key$: string) {
    let url = `${ this.heroeURL }/${ key$ }.json`
    return this.http.get<Heroe>(url).map(
      res => {
        return res;
      })
  }

  getHeroes() {
    return this.http.get<any[]>( this.heroesURL ).map(
      res => {
        return res;
      })
  }

  borrarHeroe(key$: string) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${ this.heroeURL }/${ key$ }.json`

    return this.http.delete(url , { headers }).map(
      res => {
        return res;
      })
  }


}
