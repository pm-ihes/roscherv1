import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungEnergieComponent } from './leistung-energie.component';

describe('LeistungEnergieComponent', () => {
  let component: LeistungEnergieComponent;
  let fixture: ComponentFixture<LeistungEnergieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungEnergieComponent]
    });
    fixture = TestBed.createComponent(LeistungEnergieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
