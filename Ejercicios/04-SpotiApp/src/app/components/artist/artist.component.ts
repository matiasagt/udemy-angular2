import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any;
  tracks: any[];
  loading: boolean;
  constructor(private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.loading = true;
    this._activatedRoute.params.map(param => param['id'])
      .subscribe(id => {
        this._spotifyService.getArtista(id).subscribe(response => this.artist = response);
        this._spotifyService.getTopTracks(id).subscribe(response => { this.tracks = response; this.loading = false;})
      })
  }

}
