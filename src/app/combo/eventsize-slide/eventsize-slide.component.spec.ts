import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsizeSlideComponent } from './eventsize-slide.component';

describe('EventsizeSlideComponent', () => {
  let component: EventsizeSlideComponent;
  let fixture: ComponentFixture<EventsizeSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsizeSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsizeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
