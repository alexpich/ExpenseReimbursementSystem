import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Reimbursement } from '../../models/Reimbursement';
import { ReimbursementService } from '../../services/reimbursement.service';


@Component({
  selector: 'app-manager-view-reimbursements',
  templateUrl: './manager-view-reimbursements.component.html',
  styleUrls: ['./manager-view-reimbursements.component.css']
})
export class ManagerViewReimbursementsComponent implements OnInit {

  reimb: Reimbursement = new Reimbursement();
  loggedUser = JSON.parse(localStorage.getItem('user'));
  status = ['Pending', 'Approved', 'Denied'];
  type = ['Lodging', 'Travel', 'Food', 'Other'];

  all = 0;
  pending = 1;
  approved = 2;
  denied = 3;
  selected = 0;


  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private reimbService: ReimbursementService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  approve(myReimb: Reimbursement) {
    this.reimbService.approveReimb(myReimb, this.loggedUser).subscribe(reimbs => {
      this.reimbService.subscribers.next(reimbs);
      localStorage.setItem("reimb", JSON.stringify(reimbs));
      // this.router.navigate(['master-dashboard']);
    })
  }

  deny(myReimb: Reimbursement) {
    this.reimbService.denyReimb(myReimb, this.loggedUser).subscribe(reimbs => {
      this.reimbService.subscribers.next(reimbs);
      localStorage.setItem("reimb", JSON.stringify(reimbs));
      // this.router.navigate(['master-dashboard']);
    })
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
