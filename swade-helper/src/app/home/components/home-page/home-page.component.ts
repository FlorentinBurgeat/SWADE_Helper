import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartyService } from 'src/app/services/party.service';
import { CreatePartyDialogComponent } from '../create-party-dialog/create-party-dialog.component';

@Component({
  selector: 'home-page',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>Parties</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <party-card *ngFor="let party of parties" [party]="party"></party-card>
        </mat-card-content>
        <mat-card-actions align="end">
            <button mat-fab color="primary" aria-label="Créer nouvelle partie" (click)="createParty()">
              <mat-icon>add</mat-icon>
            </button>
        </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    :host {
      flex: 1 0 fit-content;
      display: flex;
      flex-flow: column nowrap;
    }
    mat-card {
      display: flex;
      flex-flow: column nowrap;
      margin: 20px;
    }
    mat-card-content {
      display: flex;
      :not(:last-child) {
        margin-right: 10px;
      }
    }
    party-card {
      flex: 0 1 200px;
    }
  `]
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog, public partyService: PartyService) { }

  ngOnInit(): void {
  }

  createParty():void {
    const dialogRef = this.dialog.open(CreatePartyDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((partyTitle: string | boolean) => {
      if(typeof partyTitle === 'string') {
        this.partyService.createNewParty(partyTitle);
      }
    });
  }

  public get parties () { return this.partyService.parties }

}
