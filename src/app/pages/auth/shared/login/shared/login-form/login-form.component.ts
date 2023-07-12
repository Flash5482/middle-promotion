import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';


import { LoginFormService } from "./services";
import { FormGroup } from "@angular/forms";
import { LoginControl } from "../../enums";
import { ILoginFormValue } from "../../interfaces";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  viewProviders: [LoginFormService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  readonly loginControl = LoginControl;

  @Output() login = new EventEmitter<ILoginFormValue>();

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

  logIn(){
    this.login.emit(this.formService.value)
  }
}
