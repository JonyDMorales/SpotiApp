import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'sinfoto'
})

export class SinfotoPipe implements PipeTransform {

  	transform(ima: any[]): any {
  		let noimg:string = 'assets/img/noimage.png';
  		
  		if(!ima){
  			return noimg;
  		}

    	return (ima.length > 0)? ima[1].url : noimg;
  	}

}
