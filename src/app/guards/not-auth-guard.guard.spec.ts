import { TestBed, async, inject } from '@angular/core/testing';

import { NotAuthGuardGuard } from './not-auth-guard.guard';

describe('NotAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotAuthGuardGuard]
    });
  });

  it('should ...', inject([NotAuthGuardGuard], (guard: NotAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
