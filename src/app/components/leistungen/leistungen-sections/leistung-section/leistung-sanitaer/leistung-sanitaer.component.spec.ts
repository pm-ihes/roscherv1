import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungSanitaerComponent } from './leistung-sanitaer.component';

describe('LeistungSanitaerComponent', () => {
  let component: LeistungSanitaerComponent;
  let fixture: ComponentFixture<LeistungSanitaerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungSanitaerComponent]
    });
    fixture = TestBed.createComponent(LeistungSanitaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
