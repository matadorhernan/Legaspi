import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSlideComponent } from './result-slide.component';

describe('ResultSlideComponent', () => {
  let component: ResultSlideComponent;
  let fixture: ComponentFixture<ResultSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
