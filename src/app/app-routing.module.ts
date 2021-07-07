import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SuccessfulRegistrationComponent } from './pages/successful-registration/successful-registration.component';

const routes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'resetPassword', component: PasswordResetComponent},
  {path: 'successfulRegistration', component: SuccessfulRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
