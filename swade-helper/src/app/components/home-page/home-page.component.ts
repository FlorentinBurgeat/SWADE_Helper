import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePartyDialogComponent } from './create-party-dialog/create-party-dialog.component';

@Component({
  selector: 'home-page',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>Parties</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            Parties existantes
        </mat-card-content>
        <mat-card-actions align="start">
            <button mat-raised-button color="primary" (click)="createParty()">Créer nouvelle partie</button>
        </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    :host {
      display: flex;
      flex-flow: column nowrap;
      align-items: stretch;
      height: 100%;
      padding: 20px;
      mat-card {
        flex-basis: 0;
      }
    }
  `]
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createParty():void {
    const dialogRef = this.dialog.open(CreatePartyDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((partyTitle: string | undefined) => {
      if(partyTitle) {
        console.log('Create new Party called ', partyTitle);
      }
    });
  }

}
