import { TestBed } from '@angular/core/testing';

import { AlertsService } from './alerts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('AlertsService', () => {

  const matSnackBar: MatSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: MatSnackBar, useValue: matSnackBar }
    ]
  }));

  it('should be created', () => {
    const service: AlertsService = TestBed.inject(AlertsService);
    expect(service).toBeTruthy();
  });
});
