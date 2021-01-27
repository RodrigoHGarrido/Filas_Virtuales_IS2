import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCajeroComponent } from './login-cajero.component';

describe('LoginCajeroComponent', () => {
  let component: LoginCajeroComponent;
  let fixture: ComponentFixture<LoginCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
