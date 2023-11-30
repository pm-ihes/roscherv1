import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSliderVorteileComponent } from './welcome-slider-vorteile.component';

describe('WelcomeSliderVorteileComponent', () => {
  let component: WelcomeSliderVorteileComponent;
  let fixture: ComponentFixture<WelcomeSliderVorteileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeSliderVorteileComponent]
    });
    fixture = TestBed.createComponent(WelcomeSliderVorteileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
