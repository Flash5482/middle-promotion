import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginLayoutComponent } from "./basic-login-layout.component";



@NgModule({
  declarations: [BasicLoginLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [BasicLoginLayoutComponent]
})
export class BasicLoginLayoutModule { }
