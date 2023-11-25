import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LueftungZentralesSystemComponent } from './lueftung-zentrales-system.component';

describe('LueftungZentralesSystemComponent', () => {
  let component: LueftungZentralesSystemComponent;
  let fixture: ComponentFixture<LueftungZentralesSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LueftungZentralesSystemComponent]
    });
    fixture = TestBed.createComponent(LueftungZentralesSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
