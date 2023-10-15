import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApplicationComponent } from './about-application.component';

describe('AboutApplicationComponent', () => {
  let component: AboutApplicationComponent;
  let fixture: ComponentFixture<AboutApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutApplicationComponent]
    });
    fixture = TestBed.createComponent(AboutApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
