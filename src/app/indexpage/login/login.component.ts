import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  showErrorMessage = false;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
    this.loginservice
  }

  checkLogin():void {
    console.log(this.username + '/' + this.password);
    if (this.loginservice.authenticate(this.username, this.password)) {
      console.log("validated");
      this.router.navigate(['/todo'], {state: { userId: sessionStorage.getItem('userId') }});
      this.invalidLogin = false;
      this.showErrorMessage = false;
    } else {
      console.log("invalidated");
      this.router.navigateByUrl('/');
      this.invalidLogin = true
      this.showErrorMessage = true;
    }
  };

}
