import { TestBed } from '@angular/core/testing';

import { SummonerViewService } from './summoner-view.service';

describe('SummonerViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummonerViewService = TestBed.get(SummonerViewService);
    expect(service).toBeTruthy();
  });
});
