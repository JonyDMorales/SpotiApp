import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

	artists: any[] = [];
    urlSpotify:string = 'https://api.spotify.com/v1/';
    token:string = 'BQChkb0U3WfHc3zwYryfVTnDiCAs0Tzh2l-HHXIHw-O6CnsSDgy8vI6PUa0k5UKvDRYipOUWPeXl0_B0liw';

  	constructor(private _httpClient: HttpClient) { }

    private getHeaders(): HttpHeaders{
        return new HttpHeaders({ 'authorization': `Bearer ${ this.token }` });
    }

    public getArtist(id:string): any{
        let url:string = `${this.urlSpotify}artists/${ id }`;     
        let headers = this.getHeaders();
          
        return this._httpClient.get(url, { headers });
    }

  	public getArtists(termino:string): any{
        let headers = this.getHeaders();
  		let url:string = `${ this.urlSpotify }search?query=${ termino }&type=artist&limit=20`;
  		
  		return this._httpClient.get(url, { headers }).map((res:any) => { this.artists = res.artists.items; return this.artists  });
  	}

    public getTop(id:string): any{
        let headers = this.getHeaders();
        let url:string = `${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
          
        return this._httpClient.get(url, { headers });   
    }
}
