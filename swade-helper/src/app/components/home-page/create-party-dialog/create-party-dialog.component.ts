import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-party-dialog',
  template: `
    <h1 matDialogTitle>Nouvelle partie</h1>

    <form (ngSubmit)="createParty()">    
      <mat-dialog-content>
        <mat-form-field appearance="fill">
          <mat-label>Titre de la partie</mat-label>
          <input matInput [formControl]="partyTitle">
          <mat-error *ngIf="partyTitle.invalid">{{getErrorMessage()}}</mat-error>
        </mat-form-field>
      </mat-dialog-content>
      
      <mat-dialog-actions>
          <button mat-button matDialogClose (click)="onNoClick()">Annuler</button>
          <button mat-raised-button color="primary" type="submit">Créer</button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [
  ]
})
export class CreatePartyDialogComponent {
  public partyTitle: FormControl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<CreatePartyDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close(false)
  }

  createParty(): void {
    if(this.partyTitle.valid)
      this.dialogRef.close(this.partyTitle.value)
  }

  getErrorMessage() {
    if (this.partyTitle.hasError('required')) {
      return 'Merci d\'entrer un nom';
    }
    return ''
  }
}
