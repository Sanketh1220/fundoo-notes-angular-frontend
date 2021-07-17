import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './components/title/title.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthGuardService } from './services/auth-guard.service';

import {DemoMaterialModule} from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { IconsComponent } from './components/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    RegistrationComponent,
    LoginComponent,
    PasswordResetComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    SideNavigationComponent,
    SearchComponent,
    CreateNoteComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
