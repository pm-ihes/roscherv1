import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoApplicationComponent } from './promo-application.component';

describe('PromoApplicationComponent', () => {
  let component: PromoApplicationComponent;
  let fixture: ComponentFixture<PromoApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoApplicationComponent]
    });
    fixture = TestBed.createComponent(PromoApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
