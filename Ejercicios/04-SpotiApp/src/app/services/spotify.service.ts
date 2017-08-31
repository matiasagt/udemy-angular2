import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];

  urlBusqueda: string = "https://api.spotify.com/v1/search";
  urlArtista: string = "https://api.spotify.com/v1/artists";
  token: string = 'Bearer BQBr9qJPLfdTbTPwKLCl4g7RWiDPjiSlJ1dzOwYrbSLiO5rFbbU0kuV8zMU70MdfaPrYpdvIz2BRXNiLHoEqKQ';

  constructor( private _http: Http ) { }

  getArtistas( termino: string ) {
    let headers = new Headers();
    headers.append('Authorization', this.token);

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;
    return this._http.get(url, { headers }).map(response => {
      this.artists = response.json().artists.items;
      return this.artists;
    })
  }

  getArtista( id: string ) {
    let headers = new Headers();
    headers.append('Authorization', this.token);

    let query = `/${ id }`;
    let url = this.urlArtista + query;
    return this._http.get(url, { headers }).map(response => {
      console.log(response.json());
       return response.json();
    })
  }

  getTopTracks( id: string ) {
    let headers = new Headers();
    headers.append('Authorization', this.token);

    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;
    return this._http.get(url, { headers }).map(response => {
       console.log(response.json().tracks);
       return response.json().tracks;
    })
  }

}
