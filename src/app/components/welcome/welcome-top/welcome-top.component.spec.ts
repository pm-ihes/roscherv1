import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTopComponent } from './welcome-top.component';

describe('WelcomeTopComponent', () => {
  let component: WelcomeTopComponent;
  let fixture: ComponentFixture<WelcomeTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeTopComponent]
    });
    fixture = TestBed.createComponent(WelcomeTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
