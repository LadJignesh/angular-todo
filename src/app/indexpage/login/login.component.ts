import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin = function () {
    console.log(this.username + '/' + this.password);
    if (this.loginservice.authenticate(this.username, this.password)) {
      console.log("Invalidated");
      this.router.navigate([''])
      this.invalidLogin = false
    } else {
      console.log("validated");
      this.router.navigateByUrl('/todo');
      this.invalidLogin = true
    }
  };

}
