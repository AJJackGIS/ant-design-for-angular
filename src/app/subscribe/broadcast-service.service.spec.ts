import { TestBed } from '@angular/core/testing';

import { BroadcastServiceService } from './broadcast-service.service';

describe('BroadcastServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroadcastServiceService = TestBed.get(BroadcastServiceService);
    expect(service).toBeTruthy();
  });
});
