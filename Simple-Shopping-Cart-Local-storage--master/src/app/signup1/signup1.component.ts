import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../guards/auth.service';

import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.scss']
})
export class Signup1Component implements OnInit {

  form;
  new_user = {}
  user_types=["Admin","Customer","Guest"]
  
  constructor(private fb: FormBuilder,private router:Router,private auth: AuthService) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required],Validators.email],
      phone: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
   }

   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  to_login(){
    this.router.navigate(['login'])
  }

  select_type(type1){
    this.new_user["type"] = type1.target.value
  } 

  register(){

    let customer_cart = []

    this.new_user["name"]= this.form.value.name
    this.new_user["email"]= this.emailFormControl.value
    this.new_user["phone"]= this.form.value.phone
    this.new_user["pass"]= this.form.value.pass
    this.new_user["customer_cart"]= customer_cart



    if(this.emailFormControl.value != "")
    {  
      let email_flag=0
      let all_users = JSON.parse(localStorage.getItem("all_users")) 
      
      for(var i=0;i<all_users.length;i++)
      {
        if(this.emailFormControl.value == all_users[i].email){
          email_flag=1
        }
      }

      if(email_flag==1){
        alert("User Already Exist...Try another Email Id...")
      
      }else if(this.form.value.phone.length != 10){
        alert("Please Enter valid Mobile Number...")
      }
      else{
        all_users.push(this.new_user)
        localStorage.setItem("all_users", JSON.stringify(all_users))
        this.router.navigate(['login'])  
      }

    }else{
      alert("Please Register...Enter Email Id...")
    }
  }

  ngOnInit() {
   // let a=[]
   // localStorage.setItem("all_users",JSON.stringify(a))

  }
}
