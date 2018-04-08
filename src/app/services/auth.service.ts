import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

  get token() {
    return localStorage.getItem("token"); 
  }

  set token(value: string) {
    localStorage.setItem("token", value);
  }
 
  constructor(
    private apiService: ApiService,
  ) { }

  login(username, password): boolean {
    var success = false;
    this.apiService.post<any>("api/auth/", {
      username: username,
      password: password,
    }).subscribe((result) => {
      if (result.token) {
        success = true;
        this.token = result.token;
      }
    });
    return success;
  }


  logout(): void {
    this.token = undefined;
  }
}
