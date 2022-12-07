import { ChangeDetectionStrategy, Component } from '@angular/core';
import { loginBgUrl } from "../../const";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {

  readonly loginBgUrl = loginBgUrl;

  constructor() { }

}
