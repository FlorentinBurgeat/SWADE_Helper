import { Component, Input, OnInit } from '@angular/core';
import Party from 'src/app/model/party';

@Component({
  selector: 'party-card',
  template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>{{ party.name }}</mat-card-title>
        </mat-card-header>
    </mat-card>
  `,
  styles: [
  ]
})
export class PartyCardComponent implements OnInit {
  @Input() party!: Party

  constructor() { }

  ngOnInit(): void {
  }

}
