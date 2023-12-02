import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnternehmenTopComponent } from './unternehmen-top.component';

describe('UnternehmenTopComponent', () => {
  let component: UnternehmenTopComponent;
  let fixture: ComponentFixture<UnternehmenTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnternehmenTopComponent]
    });
    fixture = TestBed.createComponent(UnternehmenTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
