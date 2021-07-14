import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: UserService) { }

  ngOnInit(): void {
  }

  email = new FormControl('');
  password = new FormControl('');

  data:any
  token:any

  submit() {
    var userData = {
      email: this.email.value,
      password: this.password.value
    }
    console.log(userData);
    this.loginService.login(userData).subscribe(response => {
      console.log(response);
      this.data = response
      this.token = this.data.token
      console.log(this.token);
      localStorage.setItem('token', JSON.stringify(this.token))
      localStorage.setItem('email', userData.email)
    }, error => {
      console.log(error);
    })
  }
}
