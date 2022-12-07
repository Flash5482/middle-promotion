import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {BasicLoginLayoutModule} from "../../../../layout/basic-login-layout/basic-login-layout.module";



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        BasicLoginLayoutModule
    ],
  exports: [LoginComponent]
})
export class LoginModule { }
