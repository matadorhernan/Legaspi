import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSiComponent } from './auto-quote-si.component';

describe('AutoQuoteSiComponent', () => {
  let component: AutoQuoteSiComponent;
  let fixture: ComponentFixture<AutoQuoteSiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
