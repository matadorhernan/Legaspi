import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSlideComponent } from './staff-slide.component';

describe('StaffSlideComponent', () => {
  let component: StaffSlideComponent;
  let fixture: ComponentFixture<StaffSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
