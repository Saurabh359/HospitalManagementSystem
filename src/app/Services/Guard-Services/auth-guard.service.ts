import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../user-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private user: UserLoginService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
              : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
      if(!this.user.status){
        this.router.navigate(['']);
      }
      return true;
  }
}
