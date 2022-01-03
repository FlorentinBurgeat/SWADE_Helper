import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyService } from 'src/app/services/party.service';
@Component({
  selector: 'party-page',
  template: `
    <h1>{{ party?.name }}</h1>
  `,
  styles: [
  ]
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
