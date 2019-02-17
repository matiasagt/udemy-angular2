import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string = "";
  loading: boolean = false;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscarArtista() {
    this.loading = this.termino.length > 0;
    if (this.termino.length) { this._spotifyService.getArtistas( this.termino ).subscribe( () =>
      this.loading = false
    )}
  }

}
