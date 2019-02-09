import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];
  error: boolean;
  errorMessage: string;

  constructor( private _spotifyService: SpotifyService ) {
    this.error = false;
  }
  
  search(query) {
    this._spotifyService.searchArtists( query )
      .subscribe( (data) => {
        this.artists = data;
        this.error = false;
      }, ( serviceError ) => {
        this.error = true;
        this.errorMessage = serviceError.error.error.message;
      }) 
  }
}
