import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  api_base_url = "http://localhost:8000/";

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(path: string, data?: {key: string, value: string}[]): Observable<T> {
    if (data) {
      let httpParams = new HttpParams();
      data.forEach(element => {
        httpParams.set(element.key, element.value);
      });
      return this.httpClient.get<T>(this.api_base_url + path, {
        params: httpParams,
      })
    }
    return this.httpClient.get<T>(this.api_base_url + path);
  }

  post<T>(path: string, data: any): Observable<T> {
    return this.httpClient.post<T>(this.api_base_url + path, data);
  }

  put<T>(path: string, data: T): Observable<T> {
    return this.httpClient.put<T>(this.api_base_url + path, data);
  }

  delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(this.api_base_url + path)
  }

}
