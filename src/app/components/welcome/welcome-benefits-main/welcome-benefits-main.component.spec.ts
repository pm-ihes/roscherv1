import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBenefitsMainComponent } from './welcome-benefits-main.component';

describe('WelcomeBenefitsMainComponent', () => {
  let component: WelcomeBenefitsMainComponent;
  let fixture: ComponentFixture<WelcomeBenefitsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeBenefitsMainComponent]
    });
    fixture = TestBed.createComponent(WelcomeBenefitsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
