import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSfComponent } from './auto-quote-sf.component';

describe('AutoQuoteSfComponent', () => {
  let component: AutoQuoteSfComponent;
  let fixture: ComponentFixture<AutoQuoteSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
