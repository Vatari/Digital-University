import { TestBed } from '@angular/core/testing';

import { EventDetailsResolver } from './event-details.resolver';

describe('EventDetailsResolver', () => {
  let resolver: EventDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EventDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
