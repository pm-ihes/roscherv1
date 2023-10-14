import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOverviewV2Component } from './service-overview-v2.component';

describe('ServiceOverviewV2Component', () => {
  let component: ServiceOverviewV2Component;
  let fixture: ComponentFixture<ServiceOverviewV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOverviewV2Component]
    });
    fixture = TestBed.createComponent(ServiceOverviewV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
