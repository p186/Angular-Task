import { TestBed } from '@angular/core/testing';

import { CharacterApiServicesService } from './character-api-services.service';

describe('CharacterApiServicesService', () => {
  let service: CharacterApiServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterApiServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
