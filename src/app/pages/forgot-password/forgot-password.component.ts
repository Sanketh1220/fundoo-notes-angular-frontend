import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private forgotPasswordService: UserService) { }

  ngOnInit(): void {
  }

  email = new FormControl('');

  submit() {
    var userData = {
      email: this.email.value
    }
    console.log(userData);
    this.forgotPasswordService.forgotPassword(userData).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
