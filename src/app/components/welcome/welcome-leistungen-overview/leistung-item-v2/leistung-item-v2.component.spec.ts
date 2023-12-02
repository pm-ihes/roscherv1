import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungItemV2Component } from './leistung-item-v2.component';

describe('LeistungItemV2Component', () => {
  let component: LeistungItemV2Component;
  let fixture: ComponentFixture<LeistungItemV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungItemV2Component]
    });
    fixture = TestBed.createComponent(LeistungItemV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
