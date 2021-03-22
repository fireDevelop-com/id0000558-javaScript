import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CheckLoginGuard } from '../guards/check-login.guard'

import { AuthService } from '../guards/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  form;

  constructor(private fb: FormBuilder,private router:Router,private auth: AuthService) { 
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  register(){
    this.router.navigate(['signup1'])
  }

  login(){

    let all_users = JSON.parse(localStorage.getItem("all_users"))
    
    console.log(all_users)

    let login_flag=0

    for(var i=0;i<all_users.length;i++)
    {
      if(this.form.value.email == all_users[i].email){
        localStorage.setItem("LoggedUser", this.form.value.email)
        login_flag = 1
        this.router.navigate(['dashboard'],{queryParams:{email:this.form.value.email}})
      }
    }
    if(login_flag==0){
      alert("Invalid Username or Password")
    }
  }

  ngOnInit() {
  }

}
