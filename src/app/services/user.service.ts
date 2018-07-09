import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class UserService {
  subscribers: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
    let user = localStorage.getItem('user');
    if (user !== '{}' && user !== 'undefined') {
      this.subscribers.next(JSON.parse(user));
    }
  }

  /*
    The addUser() method returns an Observable<User>. A user will be returned from the server asynchronously so subscribing to this observable makes it possible to perform some logic once a value is received
  */

  addUser(user: User) {
    console.log(`Adding new user: ${user.ers_username}`);
    let json = JSON.stringify(user);
    return this.http.post<User>(API_URL + 'register', json, HTTP_OPTIONS);
  }

  loginUser(user: User) {
    console.log(`Attempting to login user: ${user.ers_username}`)
    let json = JSON.stringify(user);
    return this.http.post<User>(API_URL + 'login', json, HTTP_OPTIONS);
  }
}
