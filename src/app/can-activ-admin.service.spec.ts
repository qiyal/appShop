import { TestBed } from '@angular/core/testing';

import { CanActivAdminService } from './can-activ-admin.service';

describe('CanActivAdminService', () => {
  let service: CanActivAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
