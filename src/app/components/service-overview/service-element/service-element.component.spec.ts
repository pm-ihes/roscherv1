import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceElementComponent } from './service-element.component';

describe('ServiceElementComponent', () => {
  let component: ServiceElementComponent;
  let fixture: ComponentFixture<ServiceElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceElementComponent]
    });
    fixture = TestBed.createComponent(ServiceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
