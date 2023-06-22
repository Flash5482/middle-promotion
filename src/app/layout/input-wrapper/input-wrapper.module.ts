import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWrapperComponent } from "./input-wrapper.component";
import { MatInputModule } from "@angular/material/input";



@NgModule({
  declarations: [InputWrapperComponent],
  imports: [
    CommonModule,
    MatInputModule,
  ],
  exports: [InputWrapperComponent]
})
export class InputWrapperModule { }
