import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereStellenElementComponent } from './karriere-stellen-element.component';

describe('KarriereStellenElementComponent', () => {
  let component: KarriereStellenElementComponent;
  let fixture: ComponentFixture<KarriereStellenElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereStellenElementComponent]
    });
    fixture = TestBed.createComponent(KarriereStellenElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
