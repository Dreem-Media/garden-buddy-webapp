import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginRegisterComponent } from './login-register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserTasksServiceStub, AuthenticationServiceStub, AlertsServiceStub, UserServiceStub } from 'src/app/_test-helpers/test-components.spec';
import { UserTasksService } from 'src/app/_services/user-tasks.service';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { AlertsService } from 'src/app/_services/alerts.service';
import { UserService } from 'src/app/_services/user.service';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoginRegisterComponent', () => {
  let component: LoginRegisterComponent;
  let fixture: ComponentFixture<LoginRegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegisterComponent],
      imports: [RouterTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: UserTasksService, useClass: UserTasksServiceStub },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: AlertsService, useClass: AlertsServiceStub },
        { provide: UserService, useClass: UserServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
