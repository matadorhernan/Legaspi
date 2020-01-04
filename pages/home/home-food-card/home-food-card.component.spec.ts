import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFoodCardComponent } from './home-food-card.component';

describe('HomeFoodCardComponent', () => {
  let component: HomeFoodCardComponent;
  let fixture: ComponentFixture<HomeFoodCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFoodCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
