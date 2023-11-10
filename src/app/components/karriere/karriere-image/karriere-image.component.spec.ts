import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereImageComponent } from './karriere-image.component';

describe('KarriereImageComponent', () => {
  let component: KarriereImageComponent;
  let fixture: ComponentFixture<KarriereImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereImageComponent]
    });
    fixture = TestBed.createComponent(KarriereImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
