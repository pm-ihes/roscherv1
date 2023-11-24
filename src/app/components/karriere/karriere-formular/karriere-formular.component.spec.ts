import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereFormularComponent } from './karriere-formular.component';

describe('KarriereFormularComponent', () => {
  let component: KarriereFormularComponent;
  let fixture: ComponentFixture<KarriereFormularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereFormularComponent]
    });
    fixture = TestBed.createComponent(KarriereFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
