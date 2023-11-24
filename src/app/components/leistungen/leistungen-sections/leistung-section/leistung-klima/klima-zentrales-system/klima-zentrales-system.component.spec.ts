import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimaZentralesSystemComponent } from './klima-zentrales-system.component';

describe('KlimaZentralesSystemComponent', () => {
  let component: KlimaZentralesSystemComponent;
  let fixture: ComponentFixture<KlimaZentralesSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlimaZentralesSystemComponent]
    });
    fixture = TestBed.createComponent(KlimaZentralesSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
