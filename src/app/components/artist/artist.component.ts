import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  	selector: 'app-artist',
  	templateUrl: './artist.component.html',
  	styles: []
})
export class ArtistComponent implements OnInit{

	artist:any = {};
	tracks:any = [];

  	constructor(private _activatedRoute: ActivatedRoute,
  				public _spotifyService: SpotifyService) { }

  	ngOnInit(){
  		this._activatedRoute.params.map(params => params['id']).subscribe(id =>{
  			
  			this._spotifyService.getArtist(id).subscribe(artist =>{
  				this.artist = artist;
  				console.log(this.artist);
  			});

  			this._spotifyService.getTop(id).map((res:any) => res.tracks).subscribe(topTracks =>{
				this.tracks = topTracks;
				console.log(this.tracks);
			});

  		});
  	}
}
