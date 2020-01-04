import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteScComponent } from './auto-quote-sc.component';

describe('AutoQuoteScComponent', () => {
  let component: AutoQuoteScComponent;
  let fixture: ComponentFixture<AutoQuoteScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
