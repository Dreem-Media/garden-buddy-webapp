import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditUsersComponent } from './edit-users.component';
import { UserServiceStub, AlertsServiceStub } from 'src/app/_test-helpers/test-components.spec';
import { UserService } from 'src/app/_services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertsService } from 'src/app/_services/alerts.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EditUsersComponent', () => {
  let component: EditUsersComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      providers: [
        EditUsersComponent,
        { provide: AlertsService, useClass: AlertsServiceStub },
        { provide: UserService, useClass: UserServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.inject(EditUsersComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
