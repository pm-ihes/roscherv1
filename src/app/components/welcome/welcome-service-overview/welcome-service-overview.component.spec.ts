import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeServiceOverviewComponent } from './welcome-service-overview.component';

describe('WelcomeServiceOverviewComponent', () => {
  let component: WelcomeServiceOverviewComponent;
  let fixture: ComponentFixture<WelcomeServiceOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeServiceOverviewComponent]
    });
    fixture = TestBed.createComponent(WelcomeServiceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
