import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  present_items = ["Wallet","mobiles","Bags","Laptop","Bike","Car","phone"]
  cart_items:any
  email:any
  all_users:any
  show_setting = 0

  add(new_item){

    this.all_users = JSON.parse(localStorage.getItem("all_users"))

    for(var i=0;i<this.all_users.length;i++)
    {
      if(this.all_users[i].email == this.email)
      {
        this.all_users[i].customer_cart.push(new_item) 
        this.cart_items = this.all_users[i].customer_cart
      }
    }
    localStorage.setItem("all_users", JSON.stringify(this.all_users))
  
  }

  remove(deleted){

    this.all_users = JSON.parse(localStorage.getItem("all_users"))

    for(var i=0;i<this.all_users.length;i++)
    {
      if(this.all_users[i].email == this.email)
      {
        for(var j=0;j<this.all_users[i].customer_cart.length;j++){
          if(deleted == this.all_users[i].customer_cart[j]){
            this.all_users[i].customer_cart.splice(j,1)
            this.cart_items = this.all_users[i].customer_cart
            break
          }
        }
        break
      }
    }

    localStorage.setItem("all_users", JSON.stringify(this.all_users))
  }

  ngOnInit() {

    let a=window.location.href;
    let b=a.split("/");
    let e=b[3].split("=");
    this.email = e[1]

    this.all_users = JSON.parse(localStorage.getItem("all_users"))

    for(var i=0;i<this.all_users.length;i++)
    {
      if(this.all_users[i].email == this.email)
      {
        this.cart_items = this.all_users[i].customer_cart
        
        if(this.all_users[i].type == "Admin"){
          this.show_setting = 1
        }
      }
    }
    console.log(this.cart_items)
  }

}
