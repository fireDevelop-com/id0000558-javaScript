import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  isLoggedIn() {
    let a=localStorage.getItem("LoggedUser")
    if(a != null)
    {
      return true;
    }
    else{
      return false
    }
  }
  logout() {
    localStorage.removeItem("LoggedUser")
    this.myRoute.navigate(["login"]);
  }

}
