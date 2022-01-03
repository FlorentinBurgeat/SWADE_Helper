import { Injectable } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SaveService, SaveKeys } from './save.service';
import Party from 'src/app/model/party';
import { Guid } from 'guid-typescript';
@Injectable({
  providedIn: CoreModule
})
export class PartyService {
  private _parties!: Array<Party>
  private _currentPartyIndex: number | null = null;
  private _saveService!: SaveService

  constructor(saveService: SaveService) {
    this._saveService = saveService
    this._parties = this._saveService
      .loadSave<Array<Partial<Party>>>(SaveKeys.PARTY)
      ?.map(partialParty => new Party(partialParty)) 
    ?? []
  }

  public get parties () {
    return this._parties;
  }

  public get currentParty (): Party | null {
    return this._currentPartyIndex !== null ? this._parties[this._currentPartyIndex] : null
  }

  public selectParty (partyId: string): Party | null {
    const partyIndex = this.parties.findIndex(p => {
      return partyId === p.id
    })
    this._currentPartyIndex = partyIndex === -1 ? null : partyIndex
    return this.currentParty;
  }

  public createNewParty(partyName: string) {
    this._parties.push(new Party({name: partyName}))
    this.saveParty();
  }

  public saveParty() {
    this._saveService.save(SaveKeys.PARTY, this._parties)
  }
}
