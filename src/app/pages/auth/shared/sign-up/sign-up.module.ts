import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from "./sign-up.component";
import { SignUpRoutingModule } from "./signUp-routing.module";
import { BasicLoginLayoutModule } from "../../../../layout/basic-login-layout";



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    BasicLoginLayoutModule
  ],
  exports: [SignUpComponent]
})
export class SignUpModule { }
