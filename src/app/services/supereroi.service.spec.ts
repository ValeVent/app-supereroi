import { TestBed } from '@angular/core/testing';

import { SupereroiService } from './supereroi.service';

describe('SupereroiService', () => {
  let service: SupereroiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupereroiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
