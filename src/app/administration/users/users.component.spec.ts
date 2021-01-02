import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UserServiceStub, MatDialogStub, RouterStub, AlertsServiceStub } from 'src/app/_test-helpers/test-components.spec';
import { UserService } from 'src/app/_services/user.service';
import { LoadingService } from 'src/app/_services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/_services/alerts.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatTableModule, FormsModule],
      providers: [
        LoadingService,
        { provide: AlertsService, useClass: AlertsServiceStub },
        { provide: Router, useClass: RouterStub },
        { provide: MatDialog, useClass: MatDialogStub },
        { provide: UserService, useClass: UserServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
