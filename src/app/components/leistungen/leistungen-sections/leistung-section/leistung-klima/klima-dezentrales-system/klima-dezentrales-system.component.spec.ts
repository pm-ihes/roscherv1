import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlimaDezentralesSystemComponent } from './klima-dezentrales-system.component';

describe('KlimaDezentralesSystemComponent', () => {
  let component: KlimaDezentralesSystemComponent;
  let fixture: ComponentFixture<KlimaDezentralesSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KlimaDezentralesSystemComponent]
    });
    fixture = TestBed.createComponent(KlimaDezentralesSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
