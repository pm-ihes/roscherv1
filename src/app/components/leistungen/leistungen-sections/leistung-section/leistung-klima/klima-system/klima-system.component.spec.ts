import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimaSystemComponent } from './klima-system.component';

describe('KlimaSystemComponent', () => {
  let component: KlimaSystemComponent;
  let fixture: ComponentFixture<KlimaSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlimaSystemComponent]
    });
    fixture = TestBed.createComponent(KlimaSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
