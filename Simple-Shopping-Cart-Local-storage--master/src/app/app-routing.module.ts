import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signup1Component } from './signup1/signup1.component';
import { TemplateSignupComponent } from './template-signup/template-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { CheckLoginGuard } from './guards/check-login.guard';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch : 'full'},
  {path : 'signup1' ,component : Signup1Component },
  
  {path : 'templatesignup' ,component : TemplateSignupComponent,
    canActivate: [CheckLoginGuard] 
  },
  
  {path : 'login', component : LoginComponent,
  },
  
  {path : 'dashboard' ,component : DashboardComponent,
    canActivate: [CheckLoginGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
