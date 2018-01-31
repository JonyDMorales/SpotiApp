import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfotoartist'
})
export class SinfotoartistPipe implements PipeTransform {

	transform(ima: any[]): any {
  		let noimg:string = 'assets/img/noimage.png';
  		
  		if(!ima){
  			return noimg;
  		}

    	return (ima.length > 0)? ima[2].url : noimg;
  	}

}
