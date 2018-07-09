import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reimbursement } from '../models/Reimbursement';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';

const API_URL = environment.apiUrl;
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class ReimbursementService {
  subscribers: BehaviorSubject<Reimbursement> = new BehaviorSubject<Reimbursement>(null);

  constructor(private http: HttpClient) {
    let user = localStorage.getItem('user');
    if (user !== '{}' && user !== 'undefined') {
      this.subscribers.next(JSON.parse(user));
    }
  }

  addReimb(reimb: Reimbursement, user: User) {
    reimb.reimb_author = user.ers_users_id;
    console.log(`Adding new reimbursement`);
    let json = JSON.stringify(reimb);
    return this.http.post<Reimbursement>(API_URL + 'new-reimbursement', json, HTTP_OPTIONS);
  }

  approveReimb(reimb: Reimbursement, user: User){
    reimb.reimb_resolver = user.ers_users_id;
    reimb.reimb_status_id = 2;
    console.log(reimb)
    let json = JSON.stringify(reimb);
    console.log(`${user.ers_username} approving reimbursement...`);
    return this.http.post<Reimbursement>(API_URL + 'update-reimbursement', json, HTTP_OPTIONS);
  }

  denyReimb(reimb: Reimbursement, user: User){
    reimb.reimb_resolver = user.ers_users_id;
    reimb.reimb_status_id = 3;
    let json = JSON.stringify(reimb);
    console.log(`${user.ers_username} denying reimbursement...`);
    return this.http.post<Reimbursement>(API_URL + 'update-reimbursement', json, HTTP_OPTIONS);
  }
}
