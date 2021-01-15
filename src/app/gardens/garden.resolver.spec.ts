import { TestBed } from '@angular/core/testing';

import { GardenResolver } from './garden.resolver';

describe('GardenResolver', () => {
  let resolver: GardenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GardenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
