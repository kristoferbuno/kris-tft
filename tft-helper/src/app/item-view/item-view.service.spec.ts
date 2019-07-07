import { TestBed } from '@angular/core/testing';

import { ItemViewService } from './item-view.service';

describe('ItemViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemViewService = TestBed.get(ItemViewService);
    expect(service).toBeTruthy();
  });
});
