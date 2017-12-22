import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  register = {
    firstname: "", 
    secondname: "", 
    lastname: "", 
    username: "", 
    email: "", 
    password: "", 
    repassword: ""
  };
  login = {
    user: "",
    password: "",
  }
  
  public showWrongCredentials = false;
  
  constructor(private router: Router,
              private usersService: UsersService) { }

  ngOnInit() {
  }
  
  onLogin(form) {
    if (!form.invalid) {
      
      
      localStorage.removeItem('token');
      
      this.usersService
        .login(this.login.user, this.login.password)
        .subscribe(data => {
          let token = btoa(this.login.user + ':' + this.login.password);
          localStorage.setItem('token', token);
          
          this.router.navigate([`home`]);
        }, err => {
          localStorage.removeItem('token');
          console.log(err);
          this.showWrongCredentials = true;
        });
    }
  } 
  
  onRegister(form) {
    if (!form.invalid) {
      console.log(this.register);
    }
  }
}
