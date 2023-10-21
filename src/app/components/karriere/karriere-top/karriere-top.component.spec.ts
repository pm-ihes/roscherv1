import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereTopComponent } from './karriere-top.component';

describe('KarriereTopComponent', () => {
  let component: KarriereTopComponent;
  let fixture: ComponentFixture<KarriereTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereTopComponent]
    });
    fixture = TestBed.createComponent(KarriereTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
