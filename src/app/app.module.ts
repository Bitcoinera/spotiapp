import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Import routes
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { SafeDomPipe } from './pipes/safedom.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AlbumComponent } from './components/album/album.component';
import { ErrorComponent } from './components/shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    SafeDomPipe,
    CardsComponent,
    LoadingComponent,
    AlbumComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
