import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereAboutComponent } from './karriere-about.component';

describe('KarriereAboutComponent', () => {
  let component: KarriereAboutComponent;
  let fixture: ComponentFixture<KarriereAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereAboutComponent]
    });
    fixture = TestBed.createComponent(KarriereAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
