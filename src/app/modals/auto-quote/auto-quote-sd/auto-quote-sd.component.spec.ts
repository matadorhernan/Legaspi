import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSdComponent } from './auto-quote-sd.component';

describe('AutoQuoteSdComponent', () => {
  let component: AutoQuoteSdComponent;
  let fixture: ComponentFixture<AutoQuoteSdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
