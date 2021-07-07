import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from './registration.model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  ngOnInit(): void {
  }

  // constructor(private registrationService: UserService) {  }

  // ngOnInit(): void {
  // }

  user = new User();
  message: any
  data: any
  error: any

  constructor(private registrationService: UserService) {  }

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  // firstName = new FormControl('');
  // lastName = new FormControl('');
  // email = new FormControl('');
  // password = new FormControl('');

  // userData = {
  //   firstName: this.firstName.value,
  //   lastName : this.lastName.value,
  //   email : this.email.value,
  //   password: this.password.value,
  // }

  submit() {
    console.log(this.user);
    this.registrationService.registerUser(this.user).subscribe(response => {
      console.log(response);
      this.data = response
      this.message = this.data.message
    }, error => {
      console.log(error);
      this.error = error
      this.message = this.data.message
    })

  }
}
