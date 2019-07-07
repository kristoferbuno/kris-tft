import { TestBed } from '@angular/core/testing';

import { ItemCombinatorService } from './item-combinator.service';

describe('ItemCombinatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCombinatorService = TestBed.get(ItemCombinatorService);
    expect(service).toBeTruthy();
  });
});
