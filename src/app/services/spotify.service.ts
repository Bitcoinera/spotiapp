import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 
    console.log('Spotify Service is ready')
  }

  getQuery( query: string) {
    const headers = new HttpHeaders (
      {
        'Authorization': 'Bearer Spotify-Token' // here you would need to introduce your own token. 
        // Visit https://developer.spotify.com/documentation/general/guides/authorization-guide/ for more information
      }
    )

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    
    return this.getQuery('browse/new-releases?limit=20')  
      .pipe( map( data => data['albums'].items ))
  }

  searchArtists( query: string ) {

    return this.getQuery(`search?q=${ query }&type=artist&limit=15`)  
      .pipe( map( data => data['artists'].items ))
  }

  getArtist( artist_id: string ) {

    return this.getQuery(`artists/${artist_id}`)
  }

  getAlbum( album_id: string ) {

    return this.getQuery(`albums/${album_id}`)
  }

  getTopTracks( artist_id: string ) {
    return this.getQuery(`artists/${artist_id}/top-tracks?country=us`)
      .pipe( map( data => data['tracks']))
  }
}
