import { Injectable } from '@angular/core';
import { BaseFormService } from "../../../../../../../shared/services";
import { FormBuilder, Validators } from "@angular/forms";
import { ILoginFormValue } from "../../../interfaces";
import { LoginControl } from "../../../enums";

@Injectable()
export class LoginFormService extends BaseFormService<ILoginFormValue> {

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  buildForm(): void {
    this.build({
      [LoginControl.EMAIL]: this.fb.control(null, Validators.required),
      [LoginControl.PASSWORD]: this.fb.control(null, Validators.required)
    })
  }
}
