import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectPersonnageFormDialogComponent } from '../select-personnage-form-dialog/select-personnage-form-dialog.component';

@Component({
  selector: 'personnages-card',
  template: `
    <mat-card>
      <mat-card-title>Personnages</mat-card-title>
      <mat-card-content>
        <mat-card-subtitle>Joker Joueurs</mat-card-subtitle>
        <mat-card-subtitle>Joker PNJ</mat-card-subtitle>
        <mat-card-subtitle>Extras</mat-card-subtitle>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-fab color="primary" aria-label="Créer nouveau Joker" (click)="createPerso()">
          <mat-icon>add</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
  ]
})
export class PersonnagesCardComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  createPerso():void {
    const dialogRef = this.dialog.open(SelectPersonnageFormDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((childRoute?: string) => {
      if(childRoute) {
        this.router.navigate([childRoute], {relativeTo: this.activatedRoute});
      }
    });
  }
}
