import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItemV2Component } from './service-item-v2.component';

describe('ServiceItemV2Component', () => {
  let component: ServiceItemV2Component;
  let fixture: ComponentFixture<ServiceItemV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceItemV2Component]
    });
    fixture = TestBed.createComponent(ServiceItemV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
