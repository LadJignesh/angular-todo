import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
 

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  registerUser():void {
    console.log(this.username + '/' + this.password);
    let user: User = {
      username: this.username,
      password: this.password
    }
    this.loginservice.addUser(user).subscribe((data)=>{
      if (data > 0) {
        sessionStorage.setItem('userId', String(data));
        sessionStorage.setItem('username', this.username);
        console.log("validated");
        this.router.navigate(['/todo'], {state: { userId: sessionStorage.getItem('userId') }});
        this.invalidLogin = false;
      } 
    });
    
  };

}
