import {Component} from '@angular/core';
import {loginBgUrl} from "../../const";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  readonly loginBgUrl = loginBgUrl;

  constructor() { }
}
