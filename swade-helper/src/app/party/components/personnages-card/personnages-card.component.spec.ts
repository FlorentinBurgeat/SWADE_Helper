import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnagesCardComponent } from './personnages-card.component';

describe('PersonnagesCardComponent', () => {
  let component: PersonnagesCardComponent;
  let fixture: ComponentFixture<PersonnagesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnagesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnagesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
