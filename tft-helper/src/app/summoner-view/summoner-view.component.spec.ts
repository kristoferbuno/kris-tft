import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerViewComponent } from './summoner-view.component';

describe('SummonerViewComponent', () => {
  let component: SummonerViewComponent;
  let fixture: ComponentFixture<SummonerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
