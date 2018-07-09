import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;

  loggedUser: User = JSON.parse(localStorage.getItem('user'));

  constructor(private router: Router) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
