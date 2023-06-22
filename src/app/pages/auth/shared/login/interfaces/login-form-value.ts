import { LoginControl } from "../enums";

export interface ILoginFormValue {
  [LoginControl.EMAIL]: null | string;
  [LoginControl.PASSWORD]: null | string;
}
