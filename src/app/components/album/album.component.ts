import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {

album: any;
loading: boolean;
artists: any;

  constructor( private activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService, private router: Router ) {

    this.activatedRoute.params.subscribe( params => {
      this.loading = true;
      _spotifyService.getAlbum( params.id )
        .subscribe( data => {
          this.album = data;
          this.artists = data['artists'];
          this.loading = false;
        })
    }) 
  }

  goBack() {
    this.router.navigate(['home']);
  }

  getArtist( artist_id: string ) {
    this.router.navigate(['artist', artist_id]);
  }
}
