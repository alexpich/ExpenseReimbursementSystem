import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  isValid: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.userService.addUser(this.user).subscribe(users => {
      if (users == null) {
        this.isValid = !this.isValid;
      } else {
        this.userService.subscribers.next(users);
        localStorage.setItem("user", JSON.stringify(users));
        console.log(`Creating, ${this.user.ers_username}, success!`);
        this.router.navigate(['dashboard']);
      }
    })
  }

}
