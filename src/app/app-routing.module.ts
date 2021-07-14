import { CreateNoteComponent } from './components/create-note/create-note.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'resetPassword/:token', component: PasswordResetComponent},
  {path: 'createNote', component: CreateNoteComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', component: CreateNoteComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
