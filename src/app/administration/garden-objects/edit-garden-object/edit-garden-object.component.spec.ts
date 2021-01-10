import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { EditGardenObjectComponent } from "./edit-garden-object.component";
import { ActivatedRoute } from "@angular/router";
import { GardenObjectsService } from "src/app/_services/garden-objects.service";
import {
  GardenObjectsServiceStub,
  AlertsServiceStub,
  MatDialogStub,
  SuggestionsServiceStub,
} from "src/app/_test-helpers/test-components.spec";
import { AlertsService } from "src/app/_services/alerts.service";
import { MatDialog } from "@angular/material/dialog";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SuggestionsService } from "src/app/_services/suggestions.service";

describe("EditGardenObjectComponent", () => {
  let component: EditGardenObjectComponent;
  let fixture: ComponentFixture<EditGardenObjectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditGardenObjectComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: { get: () => {} } } },
          },
          { provide: GardenObjectsService, useClass: GardenObjectsServiceStub },
          { provide: AlertsService, useClass: AlertsServiceStub },
          { provide: MatDialog, useClass: MatDialogStub },
          { provide: SuggestionsService, useClass: SuggestionsServiceStub },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGardenObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
