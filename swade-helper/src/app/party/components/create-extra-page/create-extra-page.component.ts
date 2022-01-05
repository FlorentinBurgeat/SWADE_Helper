import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Dices from 'src/app/model/dices.enum';

@Component({
  selector: 'app-create-extra-page',
  template: `
  <mat-card>
    <h1>Nouvel Extra</h1>
    <form [formGroup]="extraForm" (ngSubmit)="submit()">
      <mat-form-field>
        <mat-label>Nom</mat-label>
        <input formControlName="name" matInput placeholder="Sous-fifre Nazi" required>
      </mat-form-field>
    </form>
  </mat-card>
  `,
  styles: [
  ]
})
export class CreateExtraPageComponent implements OnInit {
  public extraForm = this.formBuilder.group({
    name: [''],
    personality: [''],
    parade: [0],
    allure: [0],
    resistance: [0],
    stats: this.formBuilder.group({
      agi: [Dices.d4],
      ame: [Dices.d4],
      for: [Dices.d4],
      int: [Dices.d4],
      vig: [Dices.d4]
    }),
    skills: this.formBuilder.array([])
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addSkill () {
    const skills = this.extraForm.get('skills') as FormArray;
    skills.push(this.formBuilder.group({
      dice: [Dices.d4],
      name: ['']
    }));
  }

  submit() {

  }

}
