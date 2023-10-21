import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereErwartetComponent } from './karriere-erwartet.component';

describe('KarriereErwartetComponent', () => {
  let component: KarriereErwartetComponent;
  let fixture: ComponentFixture<KarriereErwartetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereErwartetComponent]
    });
    fixture = TestBed.createComponent(KarriereErwartetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
