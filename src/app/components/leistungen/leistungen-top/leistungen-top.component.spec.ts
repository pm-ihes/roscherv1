import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungenTopComponent } from './leistungen-top.component';

describe('LeistungenTopComponent', () => {
  let component: LeistungenTopComponent;
  let fixture: ComponentFixture<LeistungenTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungenTopComponent]
    });
    fixture = TestBed.createComponent(LeistungenTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
