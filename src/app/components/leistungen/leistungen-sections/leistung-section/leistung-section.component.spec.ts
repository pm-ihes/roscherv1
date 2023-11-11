import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungSectionComponent } from './leistung-section.component';

describe('LeistungSectionComponent', () => {
  let component: LeistungSectionComponent;
  let fixture: ComponentFixture<LeistungSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungSectionComponent]
    });
    fixture = TestBed.createComponent(LeistungSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
