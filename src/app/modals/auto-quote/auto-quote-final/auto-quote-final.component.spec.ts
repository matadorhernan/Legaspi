import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteFinalComponent } from './auto-quote-final.component';

describe('AutoQuoteFinalComponent', () => {
  let component: AutoQuoteFinalComponent;
  let fixture: ComponentFixture<AutoQuoteFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
