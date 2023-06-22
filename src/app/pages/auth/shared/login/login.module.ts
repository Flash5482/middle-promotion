import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { FormBuilder } from "@angular/forms";
import { shared } from "./shared";
import { LayoutModule } from "../../../../layout/layout.module";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LayoutModule,
    shared
  ],
  providers: [FormBuilder],
  exports: [LoginComponent]
})
export class LoginModule { }
