import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeJobOfferComponent } from './welcome-job-offer.component';

describe('WelcomeJobOfferComponent', () => {
  let component: WelcomeJobOfferComponent;
  let fixture: ComponentFixture<WelcomeJobOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeJobOfferComponent]
    });
    fixture = TestBed.createComponent(WelcomeJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
