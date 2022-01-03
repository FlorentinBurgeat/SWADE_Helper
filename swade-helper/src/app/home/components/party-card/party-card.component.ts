import { Component, Input, OnInit } from '@angular/core';
import Party from 'src/app/model/party';

@Component({
  selector: 'party-card',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>{{ party.name }}</mat-card-title>
        </mat-card-header>
        <mat-card-actions>
          <a mat-flat-button color="primary" routerLink="/party/{{party.id}}" routerLinkActive="active-link">Lancer</a>
        </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .mat-card {
      margin: 10px 0px;
    }
  `]
})
export class PartyCardComponent implements OnInit {
  @Input() party!: Party

  constructor() { }

  ngOnInit(): void {
  }

}
