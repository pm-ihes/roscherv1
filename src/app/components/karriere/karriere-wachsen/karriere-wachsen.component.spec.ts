import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereWachsenComponent } from './karriere-wachsen.component';

describe('KarriereWachsenComponent', () => {
  let component: KarriereWachsenComponent;
  let fixture: ComponentFixture<KarriereWachsenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereWachsenComponent]
    });
    fixture = TestBed.createComponent(KarriereWachsenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
