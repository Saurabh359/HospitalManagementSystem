import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

    private username: string = "Admin";
    private password: string = "Admin";
    private loggedIn: boolean;

    constructor(private cookie: CookieService){
        let temp=this.cookie.get('status');
        if(temp) this.loggedIn= (temp=="true")? true: false;
        else this.loggedIn= false;
    }

    SignIn(username: string, pass: string): boolean{
        if((username.toLowerCase() === this.username.toLowerCase()) && (pass.toLowerCase() === this.password.toLowerCase()) ){
            this.loggedIn=true;
            this.cookie.set('status','true',1);
            return true;
        }

        return false;
    }
    SignOut(){
        this.cookie.delete('status');
        this.loggedIn=false;
    }

    get status(){ return this.loggedIn; }

}
