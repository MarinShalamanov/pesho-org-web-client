import { Component, OnInit } from '@angular/core';

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
    repassord: ""
  };
  login = {
    user: "",
    password: "",
  }
  constructor() { }

  ngOnInit() {
  }
  
  onLogin(form) {
    if (!form.invalid) {
      console.log(form);
    }
  } 
  
  onRegister(form) {
    if (!form.invalid) {
      console.log(this.register);
    }
  }
}
