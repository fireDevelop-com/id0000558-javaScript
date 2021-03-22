import { TestBed } from '@angular/core/testing';

import { Signup1Service } from './signup1.service';

describe('Signup1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Signup1Service = TestBed.get(Signup1Service);
    expect(service).toBeTruthy();
  });
});
