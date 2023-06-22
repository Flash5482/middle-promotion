import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from "./login-form.component";
import { LayoutModule } from "../../../../../../layout/layout.module";



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
