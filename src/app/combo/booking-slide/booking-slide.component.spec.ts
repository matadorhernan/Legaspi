import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSlideComponent } from './booking-slide.component';

describe('BookingSlideComponent', () => {
  let component: BookingSlideComponent;
  let fixture: ComponentFixture<BookingSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
