import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJokerPageComponent } from './create-joker-page.component';

describe('CreateJokerFormComponent', () => {
  let component: CreateJokerPageComponent;
  let fixture: ComponentFixture<CreateJokerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJokerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJokerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
