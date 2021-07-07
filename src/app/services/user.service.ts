import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registerUser(data: any) {
    console.log(data);
    return this.httpService.postData(environment.URL + 'register', data);
  }

  login(data: any) {
    return this.httpService.postData(environment.URL + 'login', data);
  }

  forgotPassword(data: any) {
    return this.httpService.postData(environment.URL + 'forgotPassword', data);
  }

  resetPassword(data: any, token: any) {
    return this.httpService.postDataUsingToken(environment.URL + 'resetPassword', data, token);
  }
}
