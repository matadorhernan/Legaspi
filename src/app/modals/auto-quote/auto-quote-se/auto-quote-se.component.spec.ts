import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSeComponent } from './auto-quote-se.component';

describe('AutoQuoteSeComponent', () => {
  let component: AutoQuoteSeComponent;
  let fixture: ComponentFixture<AutoQuoteSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
