import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { FormBuilder } from "@angular/forms";
import { shared } from "./shared";
import { LayoutModule } from "../../../../layout/layout.module";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LayoutModule,
    shared,
    MatButtonModule
  ],
  providers: [FormBuilder],
  exports: [LoginComponent]
})
export class LoginModule { }
