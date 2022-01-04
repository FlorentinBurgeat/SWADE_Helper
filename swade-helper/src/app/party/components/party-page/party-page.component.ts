import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyService } from 'src/app/services/party.service';
@Component({
  selector: 'party-page',
  template: `
    <h1>{{ party?.name }}</h1>
    <mat-card>
      <mat-card-title>Personnages</mat-card-title>
      <mat-card-content>
        <mat-card-subtitle>Joker Joueurs</mat-card-subtitle>
        <mat-card-subtitle>Joker PNJ</mat-card-subtitle>
        <mat-card-subtitle>Extras</mat-card-subtitle>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-fab color="primary" aria-label="Créer nouveau Joker">
          <mat-icon>add</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
    <button mat-raised-button color="warn">
      <mat-icon>sync</mat-icon>
      Nouveau Round
    </button>
  `,
  styles: [`
  :host {
    flex: 1 0 auto;
    padding: 1em;
    display: flex;
    flex-direction: column;
    :not(:last-child) {
      margin-bottom: 1em;
    }
  }
  `]
})
export class PartyPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private partyService: PartyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.partyService.selectParty(params.id);
    }).unsubscribe();
  }

  public get party () {
    return this.partyService.currentParty;
  }

}
