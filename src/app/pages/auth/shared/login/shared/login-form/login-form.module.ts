import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from "./login-form.component";
import { LayoutModule } from "../../../../../../layout/layout.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
