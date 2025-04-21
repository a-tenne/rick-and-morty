import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmCharacterCardComponent } from './sm-character-card.component';

describe('SmCharacterCardComponent', () => {
  let component: SmCharacterCardComponent;
  let fixture: ComponentFixture<SmCharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmCharacterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
