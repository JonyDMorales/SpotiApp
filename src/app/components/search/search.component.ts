import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{
	termino:string = '';

  	constructor(private _spotifyService: SpotifyService) { }

  	public searchArtists(){
  		if(this.termino.length > 1){
	  		this._spotifyService.getArtists(this.termino).subscribe(res =>{

	  		});
  		}
  	}
}
