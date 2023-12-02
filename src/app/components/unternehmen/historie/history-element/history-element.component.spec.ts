import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryElementComponent } from './history-element.component';

describe('HistoryElementComponent', () => {
  let component: HistoryElementComponent;
  let fixture: ComponentFixture<HistoryElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryElementComponent]
    });
    fixture = TestBed.createComponent(HistoryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
