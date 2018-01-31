import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { SpotifyService } from './services/spotify.service';
import { APP_ROUTING } from './app.route';

import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { SinfotoartistPipe } from './pipes/sinfotoartist.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistComponent,
    SinfotoartistPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
