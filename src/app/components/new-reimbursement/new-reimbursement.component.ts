import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Reimbursement } from '../../models/Reimbursement';
import { User } from '../../models/User';
import { ReimbursementService } from '../../services/reimbursement.service';

@Component({
  selector: 'app-new-reimbursement',
  templateUrl: './new-reimbursement.component.html',
  styleUrls: ['./new-reimbursement.component.css']
})
export class NewReimbursementComponent implements OnInit {

  //new reimb
  reimb: Reimbursement = new Reimbursement();
  loggedUser: User = JSON.parse(localStorage.getItem("user"));

  isValid: boolean = true;

  options = [
    { name: "lodging", value: 1 },
    { name: "travel", value: 2 },
    { name: "food", value: 3 },
    { name: "other", value: 4 }
  ]

  constructor(private route: ActivatedRoute,
     private location: Location, private reimbService: ReimbursementService, private router: Router) { }

  ngOnInit() {

  }

  addReimb() {
    this.reimbService.addReimb(this.reimb, this.loggedUser).subscribe(reimb => {
      this.reimbService.subscribers.next(reimb);
      localStorage.setItem("reimb", JSON.stringify(reimb));
      // this.reimb = JSON.parse(localStorage.getItem("reimb"));
      // this.loggedUser.myReimb.push(this.reimb);
      // location.reload();
      console.log(`Creating success!`);
      this.router.navigate(['dashboard']);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
