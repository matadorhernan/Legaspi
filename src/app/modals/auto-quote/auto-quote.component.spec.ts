import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteComponent } from './auto-quote.component';

describe('AutoQuoteComponent', () => {
  let component: AutoQuoteComponent;
  let fixture: ComponentFixture<AutoQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
