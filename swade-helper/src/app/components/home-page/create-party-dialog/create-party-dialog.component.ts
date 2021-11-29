import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-party-dialog',
  template: `
    <h1 matDialogTitle>Nouvelle partie</h1>
    
    <mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>Titre de la partie</mat-label>
        <input matInput [(ngModel)]="partyTitle">
      </mat-form-field>
    </mat-dialog-content>
    
    <mat-dialog-actions>
        <button mat-button matDialogClose (click)="onNoClick()">Annuler</button>
        <button mat-raised-button color="primary" (click)="createParty()">Créer</button>
        
    </mat-dialog-actions>
  `,
  styles: [
  ]
})
export class CreatePartyDialogComponent {
  public partyTitle: string = '';

  constructor(public dialogRef: MatDialogRef<CreatePartyDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close(false)
  }

  createParty(): void {
    this.dialogRef.close(this.partyTitle)
  }
}
