import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';

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

  login(username, password): Observable<any> {
    return this.apiService.post<any>("api/auth/login/", {
      username: username,
      password: password,
    });
  }


  getUserId(): number {
    let x;
    this.apiService.get<User>("api/auth/user/").subscribe((result) => x = result.id);
    return x;
  }


  logout(): void {
    this.token = undefined;
  }

  register(user: User): Observable<any> {
    return this.apiService.post<any>("api/auth/registration", user);
  }

}
