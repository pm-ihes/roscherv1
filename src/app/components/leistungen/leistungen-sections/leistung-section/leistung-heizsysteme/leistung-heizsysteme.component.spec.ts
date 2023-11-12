import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungHeizsystemeComponent } from './leistung-heizsysteme.component';

describe('LeistungHeizsystemeComponent', () => {
  let component: LeistungHeizsystemeComponent;
  let fixture: ComponentFixture<LeistungHeizsystemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungHeizsystemeComponent]
    });
    fixture = TestBed.createComponent(LeistungHeizsystemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
