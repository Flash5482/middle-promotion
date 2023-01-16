import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLoginLayoutComponent } from './basic-login-layout.component';

describe('BasicLoginLayoutComponent', () => {
  let component: BasicLoginLayoutComponent;
  let fixture: ComponentFixture<BasicLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicLoginLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
