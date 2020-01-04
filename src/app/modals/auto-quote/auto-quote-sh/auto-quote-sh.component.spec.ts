import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteShComponent } from './auto-quote-sh.component';

describe('AutoQuoteShComponent', () => {
  let component: AutoQuoteShComponent;
  let fixture: ComponentFixture<AutoQuoteShComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteShComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteShComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
