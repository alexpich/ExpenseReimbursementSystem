import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reimbursements',
  templateUrl: './reimbursements.component.html',
  styleUrls: ['./reimbursements.component.css']
})
export class ReimbursementsComponent implements OnInit {

  loggedUser = JSON.parse(localStorage.getItem('user'));
  status = ['Pending', 'Approved', 'Denied'];
  type = ['Lodging', 'Travel', 'Food', 'Other'];

  all = 0;
  pending = 1;
  approved = 2;
  denied = 3;
  selected = 0;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  changeAll() {
    this.selected = this.all;
  }

  changePending() {
    this.selected = this.pending;
  }

  changeApproved() {
    this.selected = this.approved;
  }

  changeDenied() {
    this.selected = this.denied;
  }
}
