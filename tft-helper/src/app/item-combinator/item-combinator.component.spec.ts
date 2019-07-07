import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCombinatorComponent } from './item-combinator.component';

describe('ItemCombinatorComponent', () => {
  let component: ItemCombinatorComponent;
  let fixture: ComponentFixture<ItemCombinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCombinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
