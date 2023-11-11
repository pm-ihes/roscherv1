import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungenSectionsComponent } from './leistungen-sections.component';

describe('LeistungenSectionsComponent', () => {
  let component: LeistungenSectionsComponent;
  let fixture: ComponentFixture<LeistungenSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeistungenSectionsComponent]
    });
    fixture = TestBed.createComponent(LeistungenSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
