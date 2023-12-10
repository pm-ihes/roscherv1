import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaerSection3Component } from './sanitaer-section3.component';

describe('SanitaerSection3Component', () => {
  let component: SanitaerSection3Component;
  let fixture: ComponentFixture<SanitaerSection3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanitaerSection3Component]
    });
    fixture = TestBed.createComponent(SanitaerSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
