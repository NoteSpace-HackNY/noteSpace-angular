import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  username_required: boolean = false;
  password_required: boolean = false;

  errors: string[];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.username && this.password) {
      this.username_required = false;
      this.password_required = false;
      this.authService.login(this.username, this.password).subscribe(
        (result) => {
        console.log(result);
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log(error.error);
        if (error.error && error.error.non_field_errors) {
          this.errors = error.error.non_field_errors;
        }
      }); 
    } else {
      if (!this.username) {
        this.username_required = true;
      }
      if (!this.password) {
        this.password_required = true;
      }
    }
    
  }

}
