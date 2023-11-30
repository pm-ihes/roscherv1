import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeLeistungenOverviewComponent } from './welcome-leistungen-overview.component';

describe('WelcomeLeistungenOverviewComponent', () => {
  let component: WelcomeLeistungenOverviewComponent;
  let fixture: ComponentFixture<WelcomeLeistungenOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeLeistungenOverviewComponent]
    });
    fixture = TestBed.createComponent(WelcomeLeistungenOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
