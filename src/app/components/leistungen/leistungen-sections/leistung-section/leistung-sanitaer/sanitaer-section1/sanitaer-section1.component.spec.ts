import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaerSection1Component } from './sanitaer-section1.component';

describe('SanitaerSection1Component', () => {
  let component: SanitaerSection1Component;
  let fixture: ComponentFixture<SanitaerSection1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanitaerSection1Component]
    });
    fixture = TestBed.createComponent(SanitaerSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
