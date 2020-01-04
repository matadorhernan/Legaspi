import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSbComponent } from './auto-quote-sb.component';

describe('AutoQuoteSbComponent', () => {
  let component: AutoQuoteSbComponent;
  let fixture: ComponentFixture<AutoQuoteSbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
