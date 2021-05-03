import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }
  
  invalidDOB(control: FormControl): {[s: string]: boolean} | null{
    let dob= new Date(control.value);
    let today= new Date();
    let ans= Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(dob.getFullYear(), dob.getMonth(), dob.getDate()) ) /(1000 * 60 * 60 * 24 * 365));
    
    if(ans < 1 || ans > 200){
         return {'invalidDOB': true}
    }

    return null;
 }
}
