import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map
import { DatePipe } from '@angular/common';

@Injectable()
export class PeliculasService {

  private to: string;
  private from: string;
  private apikey: string = "705475a24de9f7c5e412754571d15df5";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  pipe = new DatePipe('en-US');

  constructor(private jsonp: Jsonp) {
    const now: Date = new Date();
    this.from = this.pipe.transform(now, 'yyyy-MM-dd');
    now.setMonth(now.getMonth() - 1);
    this.to = this.pipe.transform(now, 'yyyy-MM-dd');
  }

  getEstrenos() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=primary_release_date.desc&primary_release_date.gte=${this.to}&primary_release_date.lte=${this.from}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  getInfantiles() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=SP&with_genres=16&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  findFilm(vid: string) {
    let url = `${this.urlMoviedb}/movie/${vid}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

  getElenco(vid: string) {
    let url = `${this.urlMoviedb}/movie/${vid}/credits?api_key=${this.apikey}&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }


  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

}
