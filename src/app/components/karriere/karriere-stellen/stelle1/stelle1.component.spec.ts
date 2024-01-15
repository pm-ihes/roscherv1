import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stelle1Component } from './stelle1.component';

describe('Stelle1Component', () => {
  let component: Stelle1Component;
  let fixture: ComponentFixture<Stelle1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stelle1Component]
    });
    fixture = TestBed.createComponent(Stelle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
