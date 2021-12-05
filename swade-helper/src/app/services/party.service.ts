import { Injectable } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SaveService, SaveKeys } from './save.service';
import Party from 'src/app/model/party';
@Injectable({
  providedIn: CoreModule
})
export class PartyService {
  private _parties!: Array<Party>
  private _currentPartyIndex: number | null = null;
  private _saveService!: SaveService

  constructor(saveService: SaveService) {
    this._saveService = saveService
    this._parties = this._saveService.loadSave<Array<Party>>(SaveKeys.PARTY) ?? []
    console.log(this._parties)
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
    this._parties.push(new Party(partyName));
    this.saveParty();
  }

  public saveParty() {
    this._saveService.save(SaveKeys.PARTY, this._parties)
  }
}
