import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: UserService,
    private snackBar: MatSnackBar) {  }

  ngOnInit(): void {
  }

  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  submit() {
    var userData = {
      firstName: this.firstName.value,
      lastName : this.lastName.value,
      email : this.email.value,
      password: this.password.value,
    }
    console.log(userData);
    this.registrationService.registerUser(userData).subscribe(response => {
      console.log(response);
      this.snackBar.open('Registration Successful!', '', {duration: 400})
    }, error => {
      console.log(error);
      this.snackBar.open('Registration not  Successful!', '', {duration: 400})
    })
  }
}
