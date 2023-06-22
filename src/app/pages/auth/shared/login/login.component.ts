import { Component, OnInit } from '@angular/core';
import { loginBgUrl } from "../../const";
import { LoginFormService } from "./services";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  viewProviders: [LoginFormService]
})
export class LoginComponent implements OnInit{

  readonly loginBgUrl = loginBgUrl;

  constructor(private formService: LoginFormService) { }

  get form(): FormGroup {
    return this.formService.form;
  }

  get valid(): boolean {
    return this.formService.valid;
  }

  ngOnInit(): void {
    this.formService.buildForm();
  }
}
