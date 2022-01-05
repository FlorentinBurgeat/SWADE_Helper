import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExtraPageComponent } from './create-extra-page.component';

describe('CreateExtraPageComponent', () => {
  let component: CreateExtraPageComponent;
  let fixture: ComponentFixture<CreateExtraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExtraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExtraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
