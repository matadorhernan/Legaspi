import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSjComponent } from './auto-quote-sj.component';

describe('AutoQuoteSjComponent', () => {
  let component: AutoQuoteSjComponent;
  let fixture: ComponentFixture<AutoQuoteSjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
