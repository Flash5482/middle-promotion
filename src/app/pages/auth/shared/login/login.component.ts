import { Component } from '@angular/core';
import { loginBgUrl } from "../../const";
import { ILoginFormValue } from "./interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  readonly loginBgUrl = loginBgUrl;

  loginForm: ILoginFormValue;

  constructor() { }

  onGoogleLogin(){

  }

  onFacebookLogin(){

  }

  onLogin(loginForm: ILoginFormValue){
    this.loginForm = loginForm;
  }
}
