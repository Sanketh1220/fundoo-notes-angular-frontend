import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  // private token: string;

  constructor(private resetPasswordService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      var token: string;
      token = params['token'];
      console.log('token in ngOnIt', token);
    })
  }

  password = new FormControl('');
  confirm = new FormControl('');

  submit() {
    var token = "hey";
    var userData = {
      password: this.password.value,
      confirmPassword: this.confirm.value
    };
    this.resetPasswordService.resetPassword(userData, token).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
