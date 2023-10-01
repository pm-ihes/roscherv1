import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerElementComponent } from './partner-element.component';

describe('PartnerElementComponent', () => {
  let component: PartnerElementComponent;
  let fixture: ComponentFixture<PartnerElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerElementComponent]
    });
    fixture = TestBed.createComponent(PartnerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
