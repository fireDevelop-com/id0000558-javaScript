import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-signup',
  templateUrl: './template-signup.component.html',
  styleUrls: ['./template-signup.component.scss']
})
export class TemplateSignupComponent implements OnInit {

  new_user = {}
  user_types=["Admin","Customer","Guest"]

  constructor() { }

  onSubmit(f) {
    console.log(f.value);
  }

  select_type(type1){
    this.new_user["type"] = type1.target.value
  } 

  ngOnInit() {
  }

}
