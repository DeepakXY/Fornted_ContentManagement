import { TestBed } from '@angular/core/testing';

import { GuradformGuard } from './guradform.guard';

describe('GuradformGuard', () => {
  let guard: GuradformGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuradformGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
