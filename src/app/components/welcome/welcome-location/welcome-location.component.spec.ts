import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLocationComponent } from './welcome-location.component';

describe('WelcomeLocationComponent', () => {
  let component: WelcomeLocationComponent;
  let fixture: ComponentFixture<WelcomeLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeLocationComponent]
    });
    fixture = TestBed.createComponent(WelcomeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
