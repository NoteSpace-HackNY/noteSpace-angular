import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = {
    username: "",
    email: "",
    password1: "",
    password2: ""
  }

  error: any = {
    username: undefined,
    email: undefined,
    password1: undefined,
    password2: undefined,
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user).subscribe(
      (result) => {
        this.authService.token = result.key;
        this.router.navigateByUrl("/dashboard");
      },
      (error) => {
        console.log(error.error);
        this.error = error.error;
      }
    );
  }

}
