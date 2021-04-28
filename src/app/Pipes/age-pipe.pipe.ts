import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {
      let dob= new Date(value);
      let today= new Date();
      let tempAge= Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(dob.getFullYear(), dob.getMonth(), dob.getDate()) ) /(1000 * 60 * 60 * 24 * 365));

      return tempAge;
  }

}
