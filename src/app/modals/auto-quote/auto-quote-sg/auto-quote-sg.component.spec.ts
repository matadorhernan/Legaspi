import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSgComponent } from './auto-quote-sg.component';

describe('AutoQuoteSgComponent', () => {
  let component: AutoQuoteSgComponent;
  let fixture: ComponentFixture<AutoQuoteSgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
