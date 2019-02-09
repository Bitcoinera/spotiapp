import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService, private router: Router ) {
    this.error = false;
    this.loading = true;

    this.activatedRoute.params.subscribe( params => {
      this._spotifyService.getArtist( params.id )
        .subscribe( data => {
          this.artist = data;
          this.loading = false;

          this.getTopTracks( params.id );
        }, ( serviceError ) => {
          this.loading = false;
          this.error = true;
          this.errorMessage = serviceError.error.error.message;
        })
    })
  }

  goBack() {
    this.router.navigate(['search']);
  }

  getTopTracks( artist_id: string ) {
    this._spotifyService.getTopTracks( artist_id)
      .subscribe( data => {
        this.topTracks = data;
      })
  }
}
