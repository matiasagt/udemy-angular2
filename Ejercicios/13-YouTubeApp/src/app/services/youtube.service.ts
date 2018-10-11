import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeService {
  private youTubeUrl: string = 'https://www.googleapis.com/youtube/v3';
  private apikey: string = 'AIzaSyBbITWzneWOTAWVCCeE4szyz9tHjQpZCY4';
  private playlistId: string = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken: string = '';

  constructor(public http: Http) {}

  getVideos() {
    let url: string = `${this.youTubeUrl}/playlistItems`;
    let params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playlistId);
    params.set('key', this.apikey);

    if( this.nextPageToken ){
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, { search: params }).pipe(
      map(res => {
        this.nextPageToken = res.json().nextPageToken;
        let videos: any[] = [];
        for ( const video of res.json().items ) {
          videos.push(video.snippet);
        }      
        return videos;
      })
    );
  }
}
