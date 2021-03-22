import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Signup1Component } from './signup1/signup1.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {FlexLayoutModule} from "@angular/flex-layout";
import { MatTabsModule } from '@angular/material';
import { AuthService } from './guards/auth.service';
import { CheckLoginGuard } from './guards/check-login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { IgxTabsModule } from 'igniteui-angular';
import { TabModule } from 'angular-tabs-component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl } from '@angular/forms';

import {
  FormsModule, 
  //ReactiveFormsModule, // Option 2: it works
  Validators // <-- Option 1: here is what triggers an error
}    from '@angular/forms';
import { TemplateSignupComponent } from './template-signup/template-signup.component';



@NgModule({
  declarations: [
    AppComponent,
    Signup1Component,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    TemplateSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    IgxTabsModule,
    TabModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [AuthService,CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
