import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarriereStellenComponent } from './karriere-stellen.component';

describe('KarriereStellenComponent', () => {
  let component: KarriereStellenComponent;
  let fixture: ComponentFixture<KarriereStellenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KarriereStellenComponent]
    });
    fixture = TestBed.createComponent(KarriereStellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
