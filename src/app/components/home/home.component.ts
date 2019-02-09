import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

newReleases: any[] = [];
loading: boolean;
error: boolean;
errorMessage: string;

  constructor( private _spotifyService: SpotifyService ) {

    this.loading = true;
    this.error = false;
    
    _spotifyService.getNewReleases()
    .subscribe( data => {
      this.newReleases = data;
      this.loading = false;
    }, ( serviceError ) => {
      
      this.loading = false;
      this.error = true;
      this.errorMessage = serviceError.error.error.message;
    })
  }
}
