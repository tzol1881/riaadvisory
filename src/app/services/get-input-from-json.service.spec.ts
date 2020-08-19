import { TestBed } from '@angular/core/testing';

import { GetInputFromJsonService } from './get-input-from-json.service';

describe('GetInputFromJsonService', () => {
  let service: GetInputFromJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInputFromJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
