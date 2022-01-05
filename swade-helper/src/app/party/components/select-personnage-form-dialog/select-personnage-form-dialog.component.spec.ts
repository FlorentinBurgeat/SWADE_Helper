import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPersonnageFormDialogComponent } from './select-personnage-form-dialog.component';

describe('SelectPersonnageFormDialogComponent', () => {
  let component: SelectPersonnageFormDialogComponent;
  let fixture: ComponentFixture<SelectPersonnageFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPersonnageFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPersonnageFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
