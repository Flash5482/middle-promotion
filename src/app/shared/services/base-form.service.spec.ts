import { TestBed } from '@angular/core/testing';

import { BaseFormService } from './base-form.service';
import { FormBuilder } from "@angular/forms";

describe('BaseFormService', () => {
  let service: BaseFormService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseFormService]
    });
    service = new BaseFormService(new FormBuilder());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
