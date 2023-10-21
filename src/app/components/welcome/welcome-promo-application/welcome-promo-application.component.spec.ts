import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePromoApplicationComponent } from './welcome-promo-application.component';

describe('WelcomePromoApplicationComponent', () => {
  let component: WelcomePromoApplicationComponent;
  let fixture: ComponentFixture<WelcomePromoApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePromoApplicationComponent]
    });
    fixture = TestBed.createComponent(WelcomePromoApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
