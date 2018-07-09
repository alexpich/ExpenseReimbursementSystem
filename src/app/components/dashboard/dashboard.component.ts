import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedUser = JSON.parse(localStorage.getItem('user'));

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.loggedUser === null) {
      this.router.navigate(['login']);
    }
  }
}
