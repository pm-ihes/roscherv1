import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaerSection2Component } from './sanitaer-section2.component';

describe('SanitaerSection2Component', () => {
  let component: SanitaerSection2Component;
  let fixture: ComponentFixture<SanitaerSection2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SanitaerSection2Component]
    });
    fixture = TestBed.createComponent(SanitaerSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
