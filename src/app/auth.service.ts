import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string) {
    return this.http.post(`${this.baseURL}/register`, { username, email, password });
  }

  login(email: string, password: string) {
    return this.http.post(`${this.baseURL}/login`, { email, password });
  }
}