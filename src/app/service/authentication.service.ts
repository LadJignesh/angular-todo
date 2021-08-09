import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tasksUrl: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.tasksUrl = 'http://localhost:8080/user';
  }

  checkUser(username: string, password: string): Observable<number> {
    const url = `${this.tasksUrl}/${username}/${password}`;
    return this.http.get<number>(url);
  }

  authenticate(username, password) {
    console.log(username + '/in service' + password);
    return this.checkUser(username, password).subscribe((data)=> {
      if (data > 0) {
        sessionStorage.setItem('userId', String(data));
        sessionStorage.setItem('username', username);
        return true;
      } else {
        return false;
      }
    });
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userId');
  }

  addUser(user: User): Observable<number> {
    const url = `${this.tasksUrl}/`;
    return this.http.post<number>(url, user, this.httpOptions)
      .pipe();
  }
}
