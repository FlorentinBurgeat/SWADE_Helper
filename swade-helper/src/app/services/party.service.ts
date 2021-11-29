import { Injectable } from '@angular/core';
import { CoreModule } from '../core/core.module';

class Party {
  public name!: string;
  constructor(name: string) {
    this.name = name;
  }
}

@Injectable({
  providedIn: CoreModule
})
export class PartyService {
  private _parties!: Array<Party>
  private _currentPartyIndex: number | null = null;

  constructor() {
    try {
      this._parties = JSON.parse(localStorage.getItem('PARTIES') || '')
    } catch (e) {
      this._parties = [];
    }
  }

  public get parties () {
    return this._parties;
  }

  public get currentParty (): Party | null {
    return this._currentPartyIndex ? this._parties[this._currentPartyIndex] : null;
  }

  public selectParty (party: Party) {
    const partyIndex = this.parties.findIndex(p => p === party)
    this._currentPartyIndex = partyIndex === -1 ? null : partyIndex;
  }

  public createNewParty(partyName: string) {
    this.parties.push(new Party(partyName));
  }
}
