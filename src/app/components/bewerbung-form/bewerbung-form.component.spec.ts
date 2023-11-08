import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BewerbungFormComponent } from './bewerbung-form.component';

describe('BewerbungFormComponent', () => {
  let component: BewerbungFormComponent;
  let fixture: ComponentFixture<BewerbungFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BewerbungFormComponent]
    });
    fixture = TestBed.createComponent(BewerbungFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
