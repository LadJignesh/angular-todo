import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [IndexComponent, SignupComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule
  ]
})
export class IndexpageModule { }
