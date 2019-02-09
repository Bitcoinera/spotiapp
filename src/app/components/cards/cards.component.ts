import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  @Input() items: any[] = [];
  @Input() search: boolean;

  constructor( private router: Router ) { }

  seeArtist( item: any ) {

    if ( item.type === 'artist' ) {
      this.router.navigate( ['/artist', item.id] );
    } else if ( item.type === 'album' ) {
      this.router.navigate( ['/album', item.id] );
    }
  }
}
