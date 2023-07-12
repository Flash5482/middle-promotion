import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-login-layout',
  templateUrl: './basic-login-layout.component.html',
  styleUrls: ['./basic-login-layout.component.scss']
})
export class BasicLoginLayoutComponent {

@Input()  backgroundUrl: string;

}
