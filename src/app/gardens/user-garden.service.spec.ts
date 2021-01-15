import { TestBed } from '@angular/core/testing';

import { UserGardenService } from './user-garden.service';

describe('UserGardenService', () => {
  let service: UserGardenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGardenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
