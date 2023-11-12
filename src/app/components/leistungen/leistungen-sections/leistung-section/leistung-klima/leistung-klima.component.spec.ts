import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungKlimaComponent } from './leistung-klima.component';

describe('LeistungKlimaComponent', () => {
  let component: LeistungKlimaComponent;
  let fixture: ComponentFixture<LeistungKlimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungKlimaComponent]
    });
    fixture = TestBed.createComponent(LeistungKlimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
