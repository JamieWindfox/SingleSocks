import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  validation: FormGroup;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.validation = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(): void {
    this.validation.setErrors(null);
    let user: User = {
      username: this.validation.controls['username'].value,
      password: this.validation.controls['password'].value,
    };
    this.authService.login(user).subscribe({
      next: (result) => {
        this.authService.setLoggedIn(true);
      },
      error: () => {
        this.validation.setErrors({'incorrect': true});
      }
    });
  }
}
