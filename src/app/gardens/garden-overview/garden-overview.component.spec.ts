import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenOverviewComponent } from './garden-overview.component';

describe('GardenOverviewComponent', () => {
  let component: GardenOverviewComponent;
  let fixture: ComponentFixture<GardenOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
