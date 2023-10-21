import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAboutApplicationComponent } from './welcome-about-application.component';

describe('WelcomeAboutApplicationComponent', () => {
  let component: WelcomeAboutApplicationComponent;
  let fixture: ComponentFixture<WelcomeAboutApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeAboutApplicationComponent]
    });
    fixture = TestBed.createComponent(WelcomeAboutApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
