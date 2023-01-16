import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { AuthRoutingModule } from "./auth-routing.module";



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
