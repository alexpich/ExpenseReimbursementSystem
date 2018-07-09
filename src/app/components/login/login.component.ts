import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User = new User();
  loggedUser = localStorage.getItem('user');
  isValid: boolean = true;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.loggedUser != null) {
      this.userService.subscribers.next(JSON.parse(localStorage.getItem('user')));
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    this.userService.loginUser(this.user).subscribe(users => {
      if (users == null) {
        this.isValid = !this.isValid;
      } else {
        this.userService.subscribers.next(users);
        localStorage.setItem("user", JSON.stringify(users));
        console.log(`User, ${this.user.ers_username}, successfully logged in!`);
        console.log(localStorage.getItem("user"));
        if (users.user_role_id == 1) {
          this.router.navigate(['dashboard']);
        } else if (users.user_role_id == 2) {
          this.router.navigate(['master-dashboard']);
        }
      }
    })
  }



}
