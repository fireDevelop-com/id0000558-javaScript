import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private auth: AuthService,
    private router: Router) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(state.url)  
      if(this.auth.isLoggedIn()){
        return true;
      }else{
        this.router.navigate(["login"]);
        return false;
      }
    }

}
