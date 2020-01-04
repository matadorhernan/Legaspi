import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesVenueCardComponent } from './venues-venue-card.component';

describe('VenuesVenueCardComponent', () => {
  let component: VenuesVenueCardComponent;
  let fixture: ComponentFixture<VenuesVenueCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesVenueCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesVenueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
