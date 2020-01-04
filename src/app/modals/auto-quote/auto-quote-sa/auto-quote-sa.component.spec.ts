import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoQuoteSaComponent } from './auto-quote-sa.component';

describe('AutoQuoteSaComponent', () => {
  let component: AutoQuoteSaComponent;
  let fixture: ComponentFixture<AutoQuoteSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoQuoteSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoQuoteSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
