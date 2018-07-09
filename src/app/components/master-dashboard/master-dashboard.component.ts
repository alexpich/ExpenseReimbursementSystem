import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-dashboard',
  templateUrl: './master-dashboard.component.html',
  styleUrls: ['./master-dashboard.component.css']
})
export class MasterDashboardComponent implements OnInit {

  loggedUser = JSON.parse(localStorage.getItem('user'));

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.loggedUser === null) {
      this.router.navigate(['login']);
    }
  }

}
