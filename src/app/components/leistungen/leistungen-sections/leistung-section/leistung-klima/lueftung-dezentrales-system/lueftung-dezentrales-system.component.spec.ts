import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LueftungDezentralesSystemComponent } from './lueftung-dezentrales-system.component';

describe('LueftungDezentralesSystemComponent', () => {
  let component: LueftungDezentralesSystemComponent;
  let fixture: ComponentFixture<LueftungDezentralesSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LueftungDezentralesSystemComponent]
    });
    fixture = TestBed.createComponent(LueftungDezentralesSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
