import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GardenObjectsComponent } from './garden-objects.component';
import { GardenObjectsService } from 'src/app/_services/garden-objects.service';
import { GardenObjectsServiceStub, MatDialogStub, AlertsServiceStub } from 'src/app/_test-helpers/test-components.spec';
import { SuggestionsService } from 'src/app/_services/suggestions.service';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertsService } from 'src/app/_services/alerts.service';

describe('GardenObjectsComponent', () => {
  let component: GardenObjectsComponent;
  let suggestionsService: SuggestionsService;

  beforeEach(waitForAsync(() => {

    suggestionsService = jasmine.createSpyObj('SuggestionsService', ['createSuggestion', 'getSuggestions']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        GardenObjectsComponent,
        { provide: GardenObjectsService, useClass: GardenObjectsServiceStub },
        { provide: SuggestionsService, useValue: suggestionsService },
        { provide: MatDialog, useClass: MatDialogStub },
        { provide: AlertsService, useClass: AlertsServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.inject(GardenObjectsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
