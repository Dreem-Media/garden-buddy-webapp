import { TestBed } from '@angular/core/testing';

import { GardenObjectsService } from './garden-objects.service';

describe('GardenObjectsService', () => {
  let service: GardenObjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardenObjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
