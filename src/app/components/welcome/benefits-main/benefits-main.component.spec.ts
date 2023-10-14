import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsMainComponent } from './benefits-main.component';

describe('BenefitsMainComponent', () => {
  let component: BenefitsMainComponent;
  let fixture: ComponentFixture<BenefitsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitsMainComponent]
    });
    fixture = TestBed.createComponent(BenefitsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
