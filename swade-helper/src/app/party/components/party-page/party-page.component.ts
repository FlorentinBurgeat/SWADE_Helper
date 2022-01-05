import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyService } from 'src/app/services/party.service';
@Component({
  selector: 'party-page',
  template: `
    <h1>{{ party?.name }}</h1>
    <personnages-card></personnages-card>
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
