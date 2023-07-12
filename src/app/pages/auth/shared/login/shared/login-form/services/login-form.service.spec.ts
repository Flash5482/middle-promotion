import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './login-form.service';
import { ReactiveFormsModule } from "@angular/forms";

describe('LoginFormService', () => {
  let service: LoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [LoginFormService]
    });
    service = TestBed.inject(LoginFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
