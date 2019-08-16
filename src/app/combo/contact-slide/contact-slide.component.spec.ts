import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSlideComponent } from './contact-slide.component';

describe('ContactSlideComponent', () => {
  let component: ContactSlideComponent;
  let fixture: ComponentFixture<ContactSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
