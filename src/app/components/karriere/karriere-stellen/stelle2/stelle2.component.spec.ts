import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stelle2Component } from './stelle2.component';

describe('Stelle2Component', () => {
  let component: Stelle2Component;
  let fixture: ComponentFixture<Stelle2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stelle2Component]
    });
    fixture = TestBed.createComponent(Stelle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
