import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService: UserService) {  }

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
    }, error => {
      console.log(error);
    })

  }
}
