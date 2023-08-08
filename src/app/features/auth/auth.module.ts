import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
console.log('I am auth module');

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgotPasswordComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
