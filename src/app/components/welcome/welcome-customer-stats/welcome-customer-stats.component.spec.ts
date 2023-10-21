import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCustomerStatsComponent } from './welcome-customer-stats.component';

describe('WelcomeCustomerStatsComponent', () => {
  let component: WelcomeCustomerStatsComponent;
  let fixture: ComponentFixture<WelcomeCustomerStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeCustomerStatsComponent]
    });
    fixture = TestBed.createComponent(WelcomeCustomerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
