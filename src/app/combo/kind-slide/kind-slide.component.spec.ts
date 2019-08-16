import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindSlideComponent } from './kind-slide.component';

describe('KindSlideComponent', () => {
  let component: KindSlideComponent;
  let fixture: ComponentFixture<KindSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
