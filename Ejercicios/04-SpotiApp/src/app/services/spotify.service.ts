import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists: any[] = [];
  token: string = 'Bearer BQAUIMNOslVemiINeLVrOTYcewiR0nlVkHqcXw3L3dzUsDl6Vx8VgwDlGn4f0hYiQyMhRXbx_hfK45yq6vY';

  constructor( private _http: Http ) { }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    let headers = new Headers();
    headers.append('Authorization', this.token);

    return this._http.get(url, { headers });
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist`).map(response => {
      this.artists = response.json().artists.items;
      return this.artists;
    })
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id }`).map(response => {
      return response.json();
    })
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=US`).map(response => {
      return response.json().tracks;
    })
  }

}
