import { TestBed } from '@angular/core/testing';

import { SessionListResolver } from './session-list.resolver';

describe('SessionListResolver', () => {
  let resolver: SessionListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SessionListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
