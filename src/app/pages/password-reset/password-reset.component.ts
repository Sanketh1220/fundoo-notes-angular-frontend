import { HttpHeaders } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(private resetPasswordService: UserService) { }

  ngOnInit(): void {
  }

  password = new FormControl('');
  confirm = new FormControl('');

  submit() {
    const token = "heyyy";
    var userData = {
      password: this.password.value,
      confirmPassword: this.confirm.value
    }
    this.resetPasswordService.resetPassword(userData, token).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
