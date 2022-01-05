import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-personnage-form-dialog',
  template: `
    <h4>Quel type de personnage créer ?</h4>
    <form (ngSubmit)="goToForm()">
      <mat-form-field>
        <mat-label>Type de peronnage</mat-label>
        <mat-select [(value)]="selectedType">
          <mat-option [value]="types.jokerPj">Joueur</mat-option>
          <mat-option [value]="types.jokerPnj">Joker PNJ</mat-option>
          <mat-option [value]="types.extra">Extra</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-dialog-actions>
          <button mat-button matDialogClose (click)="onCancelClick()">Annuler</button>
          <button mat-raised-button color="primary" type="submit">Créer</button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [
  ]
})
export class SelectPersonnageFormDialogComponent implements OnInit {
  public types = {
    jokerPj: 'create-joker-pj',
    jokerPnj: 'create-joker-pnj',
    extra: 'create-extra'
  };
  public selectedType: string = this.types.jokerPj;
  
  constructor(public dialogRef: MatDialogRef<SelectPersonnageFormDialogComponent>) { }

  ngOnInit(): void {
  }

  goToForm () {
    this.dialogRef.close(this.selectedType);
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
