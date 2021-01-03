import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PasswordResetFormComponent } from './password-reset-form.component';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import {
  AuthenticationServiceStub,
  UserServiceStub,
  AlertsServiceStub,
} from 'src/app/_test-helpers/test-components.spec';
import { UserService } from 'src/app/_services/user.service';
import { AlertsService } from 'src/app/_services/alerts.service';
import { FormsModule } from '@angular/forms';

describe('PasswordResetFormComponent', () => {
  let component: PasswordResetFormComponent;
  let fixture: ComponentFixture<PasswordResetFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordResetFormComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: { get: () => {} } } },
        },
        { provide: AuthenticationService, useClass: AuthenticationServiceStub },
        { provide: UserService, useClass: UserServiceStub },
        { provide: AlertsService, useClass: AlertsServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
